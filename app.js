// app.js - Main Application Controller, Mastery Evaluation & Parent Diagnostic System

// --- Canvas Confetti Engine (Self-contained, no external CDN needed) ---
class ConfettiCannon {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  fire(duration = 2500) {
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: this.canvas.width / 2,
        y: this.canvas.height / 2,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    if (!this.animId) {
      this.animate();
    }

    setTimeout(() => {
      // Gradual fade
    }, duration);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.vx *= 0.98;
      p.rotation += p.rSpeed;
      p.alpha -= 0.008;

      if (p.alpha <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.animate());
    } else {
      this.animId = null;
    }
  }
}

// --- App State & Mastery Store ---
class MasteryApp {
  constructor() {
    this.storageKey = 'primary3_math_mastery_v1';
    this.state = this.loadState();
    this.currentChapter = null;
    this.currentLesson = null;
    this.activeQuestionList = [];
    this.currentQuestionIdx = 0;
    this.isTargetedPractice = false;
    this.confetti = null;
    this.aiChatHistories = {};
    this.isAiGenerating = false;
    this.aiAutoVoiceEnabled = true;
    this.isRecordingVoice = false;
    this.recognition = null;
    this.speechRecognitionAvailable = false;
    this.currentBookPdfPage = 6;
    this.currentBookPrintedPage = 2;
    this.currentBookZoom = 1.0;

    this.init();
  }

  loadState() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Corrupt state:", e);
      }
    }
    return {
      childName: "Champion",
      stars: 0,
      streak: 0,
      answers: {}, // { [qId]: { correct: bool, attempts: int, wrongCount: int } }
      completedLessons: {}, // { [lessonId]: bool }
      completedChapters: {}, // { [chapterId]: bool }
      lastActive: new Date().toISOString()
    };
  }

  saveState() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    this.updateHeaderStats();
  }

  init() {
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
      this.confetti = new ConfettiCannon(canvas);
    }

    this.bindNavigation();
    this.updateHeaderStats();
    this.renderRoadmap();
    this.renderParentDashboard();
    this.initVoiceRecognition();
  }

  // --- Calculation Helpers ---
  getLessonQuestions(lesson) {
    return [...lesson.tiers.t1, ...lesson.tiers.t2, ...lesson.tiers.t3];
  }

  getLessonMastery(lesson) {
    const questions = this.getLessonQuestions(lesson);
    if (questions.length === 0) return 0;
    let correctCount = 0;
    questions.forEach(q => {
      if (this.state.answers[q.id]?.correct) {
        correctCount++;
      }
    });
    return Math.round((correctCount / questions.length) * 100);
  }

  getChapterMastery(chapter) {
    let totalQ = 0;
    let correctQ = 0;
    chapter.lessons.forEach(l => {
      const qs = this.getLessonQuestions(l);
      totalQ += qs.length;
      qs.forEach(q => {
        if (this.state.answers[q.id]?.correct) correctQ++;
      });
    });
    return totalQ === 0 ? 0 : Math.round((correctQ / totalQ) * 100);
  }

  getOverallMastery() {
    let totalQ = 0;
    let correctQ = 0;
    CURRICULUM_DATA.forEach(ch => {
      ch.lessons.forEach(l => {
        const qs = this.getLessonQuestions(l);
        totalQ += qs.length;
        qs.forEach(q => {
          if (this.state.answers[q.id]?.correct) correctQ++;
        });
      });
    });
    return totalQ === 0 ? 0 : Math.round((correctQ / totalQ) * 100);
  }

  getWeakQuestions() {
    const weakList = [];
    CURRICULUM_DATA.forEach(ch => {
      ch.lessons.forEach(l => {
        const qs = this.getLessonQuestions(l);
        qs.forEach(q => {
          const ans = this.state.answers[q.id];
          if (!ans || !ans.correct || ans.wrongCount > 0) {
            weakList.push({ question: q, lesson: l, chapter: ch, ans });
          }
        });
      });
    });
    return weakList;
  }

  // --- UI Navigation ---
  bindNavigation() {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.onclick = (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(tab);
        window.soundManager.click();
      };
    });

    // Sound toggle
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.onclick = () => {
        window.soundManager.muted = !window.soundManager.muted;
        soundBtn.textContent = window.soundManager.muted ? '🔇 Sound Off' : '🔊 Sound On';
      };
    }

    // Name edit
    const nameDisplay = document.getElementById('display-child-name');
    if (nameDisplay) {
      nameDisplay.onclick = () => {
        const newName = prompt("Enter student name / أدخل اسم البطل الصغير:", this.state.childName);
        if (newName && newName.trim()) {
          this.state.childName = newName.trim();
          this.saveState();
          this.updateHeaderStats();
          this.renderParentDashboard();
        }
      };
    }
  }

  switchTab(tabName) {
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.remove('active');
    });
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    const targetView = document.getElementById(`view-${tabName}`);
    if (targetView) targetView.classList.add('active');

    if (tabName === 'roadmap') this.renderRoadmap();
    if (tabName === 'dashboard') this.renderParentDashboard();
    if (tabName === 'exam') this.initSchoolExamView();
  }

  updateHeaderStats() {
    const starEl = document.getElementById('stat-stars');
    const masteryEl = document.getElementById('stat-mastery');
    const nameEl = document.getElementById('display-child-name');
    if (starEl) starEl.textContent = `⭐ ${this.state.stars}`;
    if (masteryEl) masteryEl.textContent = `🎯 ${this.getOverallMastery()}% Mastered`;
    if (nameEl) nameEl.textContent = this.state.childName;
  }

  // --- View: Adventure Roadmap ---
  renderRoadmap() {
    const container = document.getElementById('roadmap-chapters-list');
    if (!container) return;

    const overall = this.getOverallMastery();
    document.getElementById('overall-progress-bar').style.width = `${overall}%`;
    document.getElementById('overall-progress-label').textContent = `${overall}% Complete`;

    container.innerHTML = CURRICULUM_DATA.map(ch => {
      const chMastery = this.getChapterMastery(ch);
      const isMastered = chMastery === 100;
      const statusBadge = isMastered 
        ? `<span class="badge-status badge-success">🏆 100% MASTERED</span>`
        : chMastery > 0 
          ? `<span class="badge-status badge-progress">⚡ In Progress (${chMastery}%)</span>`
          : `<span class="badge-status badge-locked">🌱 Ready to start</span>`;

      return `
        <div class="chapter-card ${isMastered ? 'chapter-card-mastered' : ''}" style="border-top-color: ${ch.color}">
          <div class="ch-card-header">
            <div class="ch-badge" style="background: ${ch.color}">${ch.icon} Chapter ${ch.number}</div>
            ${statusBadge}
          </div>
          <h3 class="ch-title">${ch.title}</h3>
          <h4 class="ch-title-ar">${ch.titleAr}</h4>
          <p class="ch-desc">${ch.lessons.length} Lessons matching Ministry Textbook (Book Pages ${ch.lessons[0].bookPage} - ${ch.lessons[ch.lessons.length-1].bookPage})</p>

          <div class="ch-lessons-list" style="max-height: 280px; overflow-y: auto;">
            ${ch.lessons.map(l => {
              const lMastery = this.getLessonMastery(l);
              const lDone = lMastery === 100;
              return `
                <div class="lesson-row" onclick="app.startLesson('${ch.id}', '${l.id}')">
                  <div class="lesson-meta">
                    <span class="lesson-dot ${lDone ? 'dot-done' : ''}">${lDone ? '✓' : l.lessonNumber}</span>
                    <div style="display:flex; flex-direction:column; gap:2px;">
                      <span class="lesson-name">${l.title}</span>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <small style="color:#64748B; font-size:11px;">${l.titleAr}</small>
                        <button type="button" class="btn-lesson-book-badge" onclick="event.stopPropagation(); app.openBookPageModal(${l.bookPage}, '${this.escapeHtml(l.titleAr || l.title)}')" title="تصفح صفحة هذا الدرس في كتاب الوزارة الرسمي">📖 صـ ${l.bookPage}</button>
                      </div>
                    </div>
                  </div>
                  <div class="lesson-status-wrap">
                    <div class="lesson-mini-bar">
                      <div class="lesson-mini-fill" style="width: ${lMastery}%"></div>
                    </div>
                    <span class="lesson-pct">${lMastery}%</span>
                    <button class="btn-play-lesson" title="Start Lesson">▶</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="ch-card-footer">
            <div class="ch-mastery-bar-wrap">
              <div class="ch-mastery-bar-fill" style="width: ${chMastery}%; background: ${ch.color}"></div>
            </div>
            <button class="btn-primary-action" onclick="app.startChapterDrill('${ch.id}')" style="background: ${ch.color}">
              ${isMastered ? '🔄 Practice Chapter Again' : `🚀 Test Chapter ${ch.number} (${chMastery}%)`}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- View: Parent Diagnostic Dashboard ---
  renderParentDashboard() {
    const overall = this.getOverallMastery();
    const weakList = this.getWeakQuestions();

    const gaugeFill = document.getElementById('dash-gauge-fill');
    const gaugeText = document.getElementById('dash-gauge-text');
    if (gaugeFill && gaugeText) {
      gaugeFill.style.strokeDashoffset = 314 - (314 * overall) / 100;
      gaugeText.textContent = `${overall}%`;
    }

    const weakContainer = document.getElementById('dash-weakness-list');
    if (weakContainer) {
      if (weakList.length === 0) {
        weakContainer.innerHTML = `
          <div class="all-clean-notice">
            <div class="notice-icon">🎉</div>
            <h4>Superb! No Weak Spots Found!</h4>
            <p>Your child has successfully mastered all attempted concepts with 100% accuracy.</p>
          </div>
        `;
      } else {
        weakContainer.innerHTML = `
          <div class="weakness-header-box">
            <div>
              <strong>${weakList.length} Concepts</strong> require extra attention or review.
            </div>
            <button class="btn-drill-weakness" onclick="app.startWeaknessPractice()">
              🎯 Start Targeted Drill on Weak Topics
            </button>
          </div>
          <div class="weak-items-grid">
            ${weakList.slice(0, 6).map(item => `
              <div class="weak-item-card">
                <div class="weak-badge">${item.chapter.icon} Ch ${item.chapter.number}: ${item.lesson.title}</div>
                <div class="weak-q-text">${item.question.question}</div>
                <div class="weak-diagnostic-tip">
                  💡 <strong>Tip for Parent:</strong> ${item.lesson.conceptSummary}
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    // Breakdown table
    const tableBody = document.getElementById('dash-breakdown-body');
    if (tableBody) {
      tableBody.innerHTML = CURRICULUM_DATA.map(ch => {
        return ch.lessons.map(l => {
          const mastery = this.getLessonMastery(l);
          const totalQ = this.getLessonQuestions(l).length;
          let badge = '';
          if (mastery === 100) badge = `<span class="badge-status badge-success">🌟 Mastered 100%</span>`;
          else if (mastery > 0) badge = `<span class="badge-status badge-progress">⚠️ Needs Review (${mastery}%)</span>`;
          else badge = `<span class="badge-status badge-locked">⏳ Not Started</span>`;

          return `
            <tr>
              <td><strong>Ch ${ch.number}</strong></td>
              <td>
                <strong>${l.title}</strong><br>
                <small style="color:#64748B;">${l.titleAr} • 📖 Book Page ${l.bookPage}</small>
              </td>
              <td>${totalQ} Checks</td>
              <td>
                <div class="table-progress-bar">
                  <div class="table-progress-fill" style="width:${mastery}%"></div>
                </div>
                <strong>${mastery}%</strong>
              </td>
              <td>
                <div style="display:flex; align-items:center; gap:8px;">
                  ${badge}
                  <button class="btn-step" title="Practice this lesson" onclick="app.startLesson('${ch.id}', '${l.id}')">▶</button>
                </div>
              </td>
            </tr>
          `;
        }).join('');
      }).join('');
    }

    // Certificate preview state
    const certCard = document.getElementById('cert-action-card');
    if (certCard) {
      if (overall === 100) {
        certCard.classList.remove('cert-locked');
        certCard.classList.add('cert-unlocked');
        document.getElementById('cert-status-msg').innerHTML = `
          <strong>🎊 Congratulations!</strong> 100% Mastery has been achieved across all 6 Chapters!
        `;
        document.getElementById('btn-view-cert').disabled = false;
      } else {
        certCard.classList.add('cert-locked');
        certCard.classList.remove('cert-unlocked');
        document.getElementById('cert-status-msg').innerHTML = `
          Reach <strong>100% Overall Mastery</strong> to unlock the Official Grade 3 Math Honor Certificate! (${100 - overall}% remaining).
        `;
        document.getElementById('btn-view-cert').disabled = true;
      }
    }
  }

  // --- Quiz / Practice Execution ---
  startLesson(chapterId, lessonId) {
    const ch = CURRICULUM_DATA.find(c => c.id === chapterId);
    if (!ch) return;
    const lesson = ch.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.currentChapter = ch;
    this.currentLesson = lesson;
    this.isTargetedPractice = false;
    this.activeQuestionList = this.getLessonQuestions(lesson);
    this.currentQuestionIdx = 0;

    this.launchQuizInterface();
  }

  startChapterDrill(chapterId) {
    const ch = CURRICULUM_DATA.find(c => c.id === chapterId);
    if (!ch) return;

    this.currentChapter = ch;
    this.currentLesson = null;
    this.isTargetedPractice = false;

    let list = [];
    ch.lessons.forEach(l => {
      list.push(...this.getLessonQuestions(l));
    });

    this.activeQuestionList = list;
    this.currentQuestionIdx = 0;
    this.launchQuizInterface();
  }

  startWeaknessPractice() {
    const weak = this.getWeakQuestions();
    if (weak.length === 0) return;

    this.isTargetedPractice = true;
    this.currentChapter = null;
    this.currentLesson = null;
    this.activeQuestionList = weak.map(w => w.question);
    this.currentQuestionIdx = 0;
    this.launchQuizInterface();
  }

  launchQuizInterface() {
    this.switchTab('quiz');
    this.renderCurrentQuestion();
  }

  renderQuestionVisual(q, size = 180) {
    if (!q || !q.visual || !window.QuestionVisuals) return '';
    const v = q.visual;
    // Suppress pseudo-patterns that are just verbal sentences/text rather than math sequences
    if (v.type === 'pattern') {
      const hasLongText = v.items && v.items.some(it => /[a-zA-Z\u0600-\u06FF]{4,}/.test(String(it)));
      if (hasLongText) return '';
      return window.QuestionVisuals.renderPattern(v.items, '');
    }
    if (v.type === 'clock') return window.QuestionVisuals.renderClock(v.hour, v.minute, size, '');
    if (v.type === 'dual_clock') return window.QuestionVisuals.renderDualClock(v.startHour, v.startMin, v.endHour, v.endMin, '');
    if (v.type === 'array') return window.QuestionVisuals.renderArray(v.rows, v.cols, v.emoji || '⭐', '');
    if (v.type === 'split_array') return window.QuestionVisuals.renderSplitArray(v.rows, v.cols1, v.cols2, v.emoji || '⭐', '');
    if (v.type === 'equal_groups') return window.QuestionVisuals.renderEqualGroups(v.groups, v.items, v.emoji || '🍎', '');
    if (v.type === 'shape') return window.QuestionVisuals.renderShape(v.shape, size, '');
    if (v.type === 'dimensioned_shape') return window.QuestionVisuals.renderDimensionedShape(v.shape, v.dimensions, v.unit || 'cm', '');
    if (v.type === 'l_shape') return window.QuestionVisuals.renderLShape(v.dimensions, '');
    if (v.type === 'grid_area') return window.QuestionVisuals.renderGridArea(v.rows, v.cols, v.color || '#3B82F6', '');
    if (v.type === 'dual_grid_area') return window.QuestionVisuals.renderDualGridArea(v.r1, v.c1, v.r2, v.c2, '', '', '');
    if (v.type === 'ruler') return window.QuestionVisuals.renderRuler(v.length, v.name || 'Pencil', v.emoji || '✏️', v.isMm || false, v.startCm || 0);
    if (v.type === 'line_plot') return window.QuestionVisuals.renderLinePlot(v.title, v.xValues, v.counts, v.xLabel, '', v.keyText);
    if (v.type === 'bar_graph') return window.QuestionVisuals.renderBarGraph(v.data, v.title, v.scale || 2, v.maxVal, '', v.showValues || false);
    if (v.type === 'beaker') return window.QuestionVisuals.renderBeaker(v.fillMl, v.maxMl || 500, '');
    if (v.type === 'place_value') return window.QuestionVisuals.renderPlaceValueCard(v.num, v.target, '');
    if (v.type === 'place_value_compare') return window.QuestionVisuals.renderPlaceValueComparison(v.num1, v.num2, v.highlightPlace, '');
    if (v.type === 'fact_family_triangle') return window.QuestionVisuals.renderFactFamilyTriangle(v.top, v.left, v.right, '');
    return '';
  }

  renderCurrentQuestion() {
    const container = document.getElementById('quiz-question-container');
    if (!container) return;

    if (this.currentQuestionIdx >= this.activeQuestionList.length) {
      this.renderQuizCompleteScreen();
      return;
    }

    const q = this.activeQuestionList[this.currentQuestionIdx];
    const total = this.activeQuestionList.length;
    const qNum = this.currentQuestionIdx + 1;
    const progressPct = ((qNum - 1) / total) * 100;

    // Determine tier type
    let tierLabel = "Core Skill";
    let tierBadgeClass = "tier-core";
    if (q.type.includes('visual') || q.type.includes('clock') || q.type.includes('ruler') || q.type.includes('array')) {
      tierLabel = "Tier 1: Visual & Hands-On";
      tierBadgeClass = "tier-visual";
    } else if (q.type.includes('mistake') || q.type.includes('word')) {
      tierLabel = "Tier 3: Critical Thinking & Word Problem";
      tierBadgeClass = "tier-critical";
    } else {
      tierLabel = "Tier 2: Direct Application";
      tierBadgeClass = "tier-core";
    }

    // Top progress
    document.getElementById('quiz-progress-fill').style.width = `${progressPct}%`;
    document.getElementById('quiz-counter-text').textContent = `Question ${qNum} of ${total}`;

    // Header title
    const headerTitle = document.getElementById('quiz-context-title');
    if (headerTitle) {
      if (this.isTargetedPractice) {
        headerTitle.innerHTML = `🎯 Targeted Weakness Drill`;
      } else if (this.currentLesson) {
        headerTitle.innerHTML = `${this.currentChapter.icon} <strong>${this.currentChapter.title}</strong> &gt; ${this.currentLesson.title} <button type="button" class="btn-book-preview-pill" onclick="app.openCurrentLessonBookPage()" title="انقر لمطالعة صفحة كتاب الوزارة الرسمية لهذا الدرس"><span>📖</span> صفحة الكتاب (صـ ${this.currentLesson.bookPage})</button>`;
      } else if (this.currentChapter) {
        headerTitle.innerHTML = `${this.currentChapter.icon} <strong>Chapter ${this.currentChapter.number} Mastery Challenge</strong>`;
      }
    }

    // Check if we should show an interactive widget above question
    let widgetHtml = '';
    if (q.type === 'clock_read' || q.type === 'elapsed_time') {
      widgetHtml = `<div id="inline-widget-mount"></div>`;
    } else if (q.type === 'array_builder') {
      widgetHtml = `<div id="inline-widget-mount"></div>`;
    } else if (q.type === 'area_grid') {
      widgetHtml = `<div id="inline-widget-mount"></div>`;
    } else if (q.type === 'ruler_read' || q.type === 'ruler_unit') {
      widgetHtml = `<div id="inline-widget-mount"></div>`;
    } else if (q.type === 'capacity_unit' || q.type === 'capacity_conv') {
      widgetHtml = `<div id="inline-widget-mount"></div>`;
    }

    // Render SVG visual diagram if defined
    let visualDiagramHtml = this.renderQuestionVisual(q);

    // Controls based on question format
    let inputControlsHtml = '';
    if (q.format === 'compare') {
      inputControlsHtml = `
        <div class="q-compare-grid">
          <button class="btn-compare-symbol btn-greater" onclick="app.handleAnswer('>')">&gt;<br><small>Greater than</small></button>
          <button class="btn-compare-symbol btn-less" onclick="app.handleAnswer('<')">&lt;<br><small>Less than</small></button>
          <button class="btn-compare-symbol btn-equal" onclick="app.handleAnswer('=')">=<br><small>Equal to</small></button>
        </div>
      `;
    } else if (q.format === 'complete') {
      inputControlsHtml = `
        <div class="q-complete-box">
          <div class="input-display-row">
            <input type="text" id="complete-input-field" class="complete-input" placeholder="اكتب الناتج هنا..." autocomplete="off" />
            <button class="btn-submit-answer" onclick="app.submitCompleteAnswer()">Check (تحقق) ✔</button>
          </div>
          <div class="onscreen-numpad">
            ${[1,2,3,4,5,6,7,8,9,0].map(n => `<button type="button" class="btn-num-key" onclick="app.pressKey('${n}')">${n}</button>`).join('')}
            <button type="button" class="btn-num-key btn-key-comma" onclick="app.pressKey(',')">,</button>
            <button type="button" class="btn-num-key btn-key-del" onclick="app.pressKey('del')">⌫ Del</button>
          </div>
        </div>
      `;
    } else {
      inputControlsHtml = `
        <div class="q-options-grid">
          ${q.options.map(opt => `
            <button class="btn-option" onclick="app.handleAnswer('${this.escapeHtml(opt)}')">
              <span class="opt-bullet">○</span>
              <span class="opt-label">${opt}</span>
            </button>
          `).join('')}
        </div>
      `;
    }

    // Format question into interactive clickable words
    const interactiveQuestionHtml = this.formatInteractiveQuestion(q.question);

    container.innerHTML = `
      <div class="question-card animate-pop">
        <div class="q-card-top-clean">
          <div class="q-progress-badge">
            <span class="q-badge-icon">✨</span>
            <span>سؤال ${qNum} من ${total}</span>
          </div>
          <div class="q-quick-tools">
            <button class="btn-q-tool btn-q-listen" id="btn-read-aloud" onclick="app.startKaraokeReading('${this.escapeHtml(q.question)}')" title="استمع لقراءة السؤال">
              <span class="tool-icon">🔊</span>
              <span id="read-aloud-text">اسمع</span>
            </button>
            <button class="btn-q-tool btn-q-ar ${this.showArabic ? 'active' : ''}" id="btn-toggle-ar" onclick="app.toggleArabicQuestion()" title="عرض / إخفاء الترجمة">
              <span class="tool-icon">🌐</span>
              <span id="toggle-ar-text">${this.showArabic ? 'إخفاء العربي' : 'عربي'}</span>
            </button>
            <button class="btn-q-tool btn-q-book" onclick="app.openCurrentLessonBookPage()" title="تصفح صفحة كتاب الوزارة لهذا الدرس">
              <span class="tool-icon">📖</span>
              <span>الكتاب</span>
            </button>
            <button class="btn-q-tool btn-q-tutor" id="btn-ask-ai" onclick="app.openAiTutor()" title="اسأل المعلمة إيما">
              <span class="tool-icon">👩‍🏫</span>
              <span>المعلمة إيما</span>
            </button>
            <button class="btn-q-tool btn-q-voice" id="btn-q-voice" onclick="app.openAiTutorWithVoice()" title="تحدث بصوتك للمعلمة">
              <span class="tool-icon">🎙️</span>
              <span>تحدث</span>
            </button>
          </div>
        </div>

        ${visualDiagramHtml}
        ${widgetHtml}

        <div class="q-main-question">
          <div class="q-text-en" id="q-words-container" dir="ltr">${interactiveQuestionHtml}</div>
          <div class="q-text-ar" id="q-text-ar" dir="rtl" style="display: ${this.showArabic ? 'block' : 'none'};">
            ${q.questionAr || q.hintAr}
          </div>
        </div>

        ${inputControlsHtml}

        <div class="q-feedback-box" id="q-feedback-box" style="display: none;"></div>

        <div class="q-hints-bar">
          <button class="btn-hint" id="btn-toggle-hint" onclick="app.toggleHint()">
            💡 فكرة الحل (Need a Hint?)
          </button>
          <div class="hint-content-box" id="hint-content-box" style="display: none;">
            <div class="hint-item-en" dir="ltr">
              <span class="hint-tag-en">ENG</span>
              <span>${q.hint || "Take your time and read carefully!"}</span>
            </div>
            <div class="hint-item-ar" dir="rtl">
              <span class="hint-tag-ar">عربي</span>
              <span>${q.hintAr || "فكر جيداً في السؤال وتذكر القاعدة الأساسية."}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Word Bubble Tooltip -->
      <div id="word-bubble-tooltip" class="word-tooltip-bubble" style="display: none;"></div>
    `;

    // Attach inline widget if applicable
    if (widgetHtml) {
      setTimeout(() => {
        if (q.type.includes('clock')) window.Widgets.renderClockWidget('inline-widget-mount', 4, 30);
        else if (q.type === 'array_builder') window.Widgets.renderArrayBuilder('inline-widget-mount', 3, 4);
        else if (q.type === 'area_grid') window.Widgets.renderAreaPerimeterWidget('inline-widget-mount', 6, 4);
        else if (q.type.includes('ruler')) window.Widgets.renderRulerWidget('inline-widget-mount');
        else if (q.type.includes('capacity')) window.Widgets.renderCapacityWidget('inline-widget-mount', 500);
      }, 50);
    }
  }

  // --- Feature 1: Click-to-Hear Word & Translation ---
  formatInteractiveQuestion(questionText) {
    const tokens = questionText.split(/(\s+)/);
    let charOffset = 0;
    return tokens.map(token => {
      if (/^\s+$/.test(token)) {
        charOffset += token.length;
        return token;
      }
      const cleanWord = token.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
      const dictEntry = window.lookupMathWord ? window.lookupMathWord(cleanWord) : null;
      const offset = charOffset;
      charOffset += token.length;
      return `<span class="interactive-word ${dictEntry ? 'is-math-keyword' : ''}" 
                    data-clean="${cleanWord}" 
                    data-raw="${this.escapeHtml(token)}" 
                    data-offset="${offset}" 
                    onclick="app.handleWordClick(this, event)">${token}</span>`;
    }).join('');
  }

  handleWordClick(spanEl, event) {
    if (event && event.stopPropagation) event.stopPropagation();
    if (!spanEl) return;
    const cleanWord = spanEl.getAttribute('data-clean');
    const rawWord = spanEl.getAttribute('data-raw');
    if (!cleanWord) return;

    // Bounce animation
    spanEl.classList.add('word-bounce');
    setTimeout(() => spanEl.classList.remove('word-bounce'), 400);

    // Audio pop & pronunciation
    window.soundManager.popWord();
    setTimeout(() => {
      window.soundManager.speak(cleanWord, null, null, 'en-US');
    }, 80);

    // Tooltip popup
    const dict = window.lookupMathWord ? window.lookupMathWord(cleanWord) : null;
    const tooltip = document.getElementById('word-bubble-tooltip');
    if (tooltip) {
      if (dict) {
        tooltip.innerHTML = `
          <div class="tooltip-badge">${dict.emoji} ${cleanWord}</div>
          <div class="tooltip-ar">${dict.ar}</div>
          <div class="tooltip-tip">💡 ${dict.tip}</div>
        `;
      } else {
        tooltip.innerHTML = `
          <div class="tooltip-badge">🔊 ${cleanWord}</div>
          <div class="tooltip-tip">Click to hear pronunciation!</div>
        `;
      }

      // Position tooltip near the word
      const rect = spanEl.getBoundingClientRect();
      const parentCard = document.querySelector('.question-card');
      const parentRect = parentCard ? parentCard.getBoundingClientRect() : { left: 0, top: 0 };
      tooltip.style.left = `${rect.left - parentRect.left + (rect.width / 2)}px`;
      tooltip.style.top = `${rect.top - parentRect.top - 10}px`;
      tooltip.style.display = 'block';

      // Auto hide after 3 seconds or on next click
      clearTimeout(this.tooltipTimeout);
      this.tooltipTimeout = setTimeout(() => {
        tooltip.style.display = 'none';
      }, 3200);
    }
  }

  // --- Feature 3: Karaoke Real-time Word-by-Word Highlighting ---
  startKaraokeReading(questionText) {
    const wordSpans = Array.from(document.querySelectorAll('.interactive-word'));
    const readBtn = document.getElementById('btn-read-aloud');
    const readText = document.getElementById('read-aloud-text');

    if (readBtn) readBtn.classList.add('is-reading-active');
    if (readText) readText.textContent = "تقرأ...";

    window.soundManager.speak(
      questionText,
      (charIndex, charLength) => {
        wordSpans.forEach(span => {
          const offset = parseInt(span.getAttribute('data-offset') || '0');
          const spanLen = (span.textContent || '').length;
          if (charIndex >= offset && charIndex < offset + spanLen + 2) {
            span.classList.add('karaoke-highlight');
          } else {
            span.classList.remove('karaoke-highlight');
          }
        });
      },
      () => {
        // Finished
        wordSpans.forEach(s => s.classList.remove('karaoke-highlight'));
        if (readBtn) readBtn.classList.remove('is-reading-active');
        if (readText) readText.textContent = "اسمع";
        window.soundManager.starEarned();
      }
    );
  }


  pressKey(val) {
    const input = document.getElementById('complete-input-field');
    if (!input) return;
    if (val === 'del') {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += val;
    }
    input.focus();
    window.soundManager.click();
  }

  submitCompleteAnswer() {
    const input = document.getElementById('complete-input-field');
    if (!input) return;
    const val = input.value.trim();
    if (!val) {
      alert("Please enter a number first / اكتب الناتج أولاً");
      return;
    }
    this.handleAnswer(val);
  }

  toggleArabicQuestion() {
    this.showArabic = !this.showArabic;
    const arBox = document.getElementById('q-text-ar');
    const arBtnText = document.getElementById('toggle-ar-text');
    const arBtn = document.getElementById('btn-toggle-ar');
    if (arBox) arBox.style.display = this.showArabic ? 'block' : 'none';
    if (arBtnText) arBtnText.textContent = this.showArabic ? 'إخفاء العربي' : 'عربي';
    if (arBtn) arBtn.classList.toggle('active', this.showArabic);
    window.soundManager.click();
  }

  escapeHtml(str) {
    return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
  }

  toggleHint() {
    const hintBox = document.getElementById('hint-content-box');
    if (!hintBox) return;
    const isHidden = hintBox.style.display === 'none';
    hintBox.style.display = isHidden ? 'block' : 'none';
    window.soundManager.click();
  }

  handleAnswer(selectedOpt) {
    const q = this.activeQuestionList[this.currentQuestionIdx];
    let isCorrect = false;

    if (q.format === 'complete') {
      const cleanUser = String(selectedOpt).replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
      const cleanAns = String(q.answer).replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
      isCorrect = cleanUser === cleanAns || cleanAns.startsWith(cleanUser);
    } else {
      isCorrect = String(selectedOpt).trim() === String(q.answer).trim();
    }

    // Track state
    if (!this.state.answers[q.id]) {
      this.state.answers[q.id] = { correct: false, attempts: 0, wrongCount: 0 };
    }
    const record = this.state.answers[q.id];
    record.attempts++;

    const feedbackBox = document.getElementById('q-feedback-box');
    feedbackBox.style.display = 'block';

    const optionBtns = document.querySelectorAll('.btn-option');
    optionBtns.forEach(btn => {
      btn.disabled = true;
      const label = btn.querySelector('.opt-label');
      const text = label ? label.textContent.trim() : btn.textContent.trim();
      if (text === q.answer) {
        btn.classList.add('opt-correct');
        const bullet = btn.querySelector('.opt-bullet');
        if (bullet) bullet.textContent = '✓';
      } else if (text === selectedOpt && !isCorrect) {
        btn.classList.add('opt-wrong');
        const bullet = btn.querySelector('.opt-bullet');
        if (bullet) bullet.textContent = '✗';
      }
    });

    const compareBtns = document.querySelectorAll('.btn-compare-symbol');
    compareBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent.includes(q.answer)) {
        btn.classList.add('opt-correct');
      } else if (btn.textContent.includes(selectedOpt) && !isCorrect) {
        btn.classList.add('opt-wrong');
      }
    });

    const completeInput = document.getElementById('complete-input-field');
    if (completeInput) {
      completeInput.disabled = true;
      completeInput.style.borderColor = isCorrect ? '#10B981' : '#EF4444';
      completeInput.style.backgroundColor = isCorrect ? '#ECFDF5' : '#FEF2F2';
    }

    if (isCorrect) {
      record.correct = true;
      this.state.stars += 2;
      this.state.streak++;
      this.saveState();

      window.soundManager.correct();
      if (this.confetti) this.confetti.fire(1200);

      feedbackBox.className = 'q-feedback-box feedback-correct animate-pop';
      feedbackBox.innerHTML = `
        <div class="feedback-title">🎉 أحسنت يا بطل! إجابة صحيحة وممتازة! Excellent!</div>
        <div class="feedback-desc-en" dir="ltr">
          <span class="fb-tag fb-tag-en">ENG</span>
          <span>${q.explanation}</span>
        </div>
        ${q.hintAr ? `
          <div class="feedback-desc-ar" dir="rtl">
            <span class="fb-tag fb-tag-ar">عربي</span>
            <span>${q.hintAr}</span>
          </div>
        ` : ''}
        <div class="feedback-actions">
          <button class="btn-next-action" onclick="app.nextQuestion()">Next Question (السؤال التالي) ➜</button>
        </div>
      `;
    } else {
      record.wrongCount++;
      this.state.streak = 0;
      this.saveState();

      window.soundManager.incorrect();

      feedbackBox.className = 'q-feedback-box feedback-wrong animate-shake';
      feedbackBox.innerHTML = `
        <div class="feedback-title">🤔 فكر فيها تاني يا بطل! Almost there!</div>
        <div class="feedback-desc-en" dir="ltr">
          <span class="fb-tag fb-tag-en">ENG</span>
          <span>${q.explanation}</span>
        </div>
        ${q.hintAr ? `
          <div class="feedback-desc-ar" dir="rtl">
            <span class="fb-tag fb-tag-ar">عربي</span>
            <span>${q.hintAr}</span>
          </div>
        ` : ''}
        <div class="feedback-tutor-callout">
          <span class="callout-text" dir="rtl">👩‍🏫 محتاج المعلمة إيما تبسطلك فكرة السؤال بمثال سهل بصوتها؟</span>
          <button class="btn-ask-ai-mini" onclick="app.openAiTutor()">✨ اسأل المعلمة إيما</button>
        </div>
        <div class="feedback-actions">
          <button class="btn-next-action btn-retry-action" onclick="app.retryQuestion()">Try Again (حاول مرة أخرى) 🔄</button>
          <button class="btn-next-action" onclick="app.nextQuestion()">Continue (متابعة) ➜</button>
        </div>
      `;
    }
  }

  retryQuestion() {
    this.renderCurrentQuestion();
  }

  nextQuestion() {
    this.currentQuestionIdx++;
    this.renderCurrentQuestion();
  }

  renderQuizCompleteScreen() {
    const container = document.getElementById('quiz-question-container');
    if (!container) return;

    window.soundManager.levelUp();
    if (this.confetti) this.confetti.fire(3500);

    const overall = this.getOverallMastery();

    let titleMsg = "🌟 Awesome Effort!";
    if (this.currentLesson && this.getLessonMastery(this.currentLesson) === 100) {
      titleMsg = "🏆 100% Lesson Mastered!";
    } else if (this.currentChapter && this.getChapterMastery(this.currentChapter) === 100) {
      titleMsg = `👑 100% Chapter ${this.currentChapter.number} Mastered!`;
    }

    container.innerHTML = `
      <div class="quiz-complete-card animate-pop">
        <div class="complete-trophy-icon">🏆</div>
        <h2>${titleMsg}</h2>
        <p class="complete-sub">You've finished this practice set! Your knowledge is growing stronger every day.</p>

        <div class="complete-stats-row">
          <div class="complete-stat">
            <span class="c-val">⭐ +${this.activeQuestionList.length * 2}</span>
            <span class="c-label">Stars Earned</span>
          </div>
          <div class="complete-stat">
            <span class="c-val">${overall}%</span>
            <span class="c-label">Overall Mastery</span>
          </div>
        </div>

        <div class="complete-buttons">
          <button class="btn-primary-action" onclick="app.switchTab('roadmap')">
            🗺️ Return to Adventure Map
          </button>
          <button class="btn-secondary-action" onclick="app.switchTab('dashboard')">
            📊 View Parent Diagnostic Report
          </button>
        </div>
      </div>
    `;
  }

  // --- Certificate Generator & Print Modal ---
  showCertificate() {
    const modal = document.getElementById('cert-modal');
    if (!modal) return;

    document.getElementById('cert-child-name').textContent = this.state.childName;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    modal.style.display = 'flex';
    window.soundManager.levelUp();
    if (this.confetti) this.confetti.fire(3000);
  }

  closeCertificate() {
    const modal = document.getElementById('cert-modal');
    if (modal) modal.style.display = 'none';
  }

  printCertificate() {
    window.print();
  }

  resetAllProgress() {
    if (confirm("Are you sure you want to reset all progress and start fresh? هل أنت متأكد من إعادة تصفير التقدم؟")) {
      localStorage.removeItem(this.storageKey);
      this.state = this.loadState();
      this.saveState();
      this.updateHeaderStats();
      this.renderRoadmap();
      this.renderParentDashboard();
      alert("Progress reset successfully! بالتوفيق في البداية الجديدة.");
    }
  }

  // --- School Monthly Exam Simulator Engine ---
  initSchoolExamView() {
    if (!this.currentExam) {
      this.generateNewSchoolExam();
    }
  }

  generateNewSchoolExam() {
    // 1. Gather pool of questions
    const allQuestions = [];
    CURRICULUM_DATA.forEach(ch => {
      ch.lessons.forEach(l => {
        allQuestions.push(...this.getLessonQuestions(l));
      });
    });

    // 2. Select: 5 choose questions, 5 complete questions, 2 story problems
    const shuffle = arr => [...arr].sort(() => 0.5 - Math.random());

    let choosePool = allQuestions.filter(q => q.format !== 'complete' && !q.type.includes('word'));
    if (choosePool.length < 5) {
      choosePool = allQuestions.filter(q => q.format !== 'complete' || q.id.endsWith('_q1'));
    }
    if (choosePool.length === 0) choosePool = allQuestions;

    let completePool = allQuestions.filter(q => q.format === 'complete' || q.type.includes('calc') || q.type.includes('conv') || q.type.includes('val') || q.id.endsWith('_q2'));
    if (completePool.length < 5) {
      completePool = allQuestions.filter(q => q.id.endsWith('_q2') || q.format === 'complete');
    }
    if (completePool.length === 0) completePool = allQuestions;

    let storyPool = allQuestions.filter(q => q.type.includes('word') || q.type.includes('mistake') || q.id.endsWith('_q3'));
    if (storyPool.length < 2) {
      storyPool = allQuestions.filter(q => q.id.endsWith('_q3'));
    }
    if (storyPool.length === 0) storyPool = allQuestions;

    const part1 = shuffle(choosePool).slice(0, 5);
    const part2 = shuffle(completePool).slice(0, 5);
    const part3 = shuffle(storyPool).slice(0, 2);

    this.currentExam = {
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      part1,
      part2,
      part3,
      userAnswers: {},
      submitted: false,
      score: 0
    };

    this.renderSchoolExamPaper();
  }

  selectExamAnswer(qId, val) {
    if (!this.currentExam || this.currentExam.submitted) return;
    this.currentExam.userAnswers[qId] = val;
    window.soundManager.click();
    this.renderSchoolExamPaper();
  }

  setExamTextInput(qId, val) {
    if (!this.currentExam || this.currentExam.submitted) return;
    this.currentExam.userAnswers[qId] = val.trim();
  }

  submitSchoolExam() {
    if (!this.currentExam) return;
    let score = 0;

    // Part 1: 5 choose questions (1 mark each = 5)
    this.currentExam.part1.forEach(q => {
      if (this.currentExam.userAnswers[q.id] === q.answer) score += 1;
    });

    // Part 2: 5 complete questions (1 mark each = 5)
    this.currentExam.part2.forEach(q => {
      const u = String(this.currentExam.userAnswers[q.id] || '').replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
      const a = String(q.answer).replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
      if (u && (u === a || a.startsWith(u))) score += 1;
    });

    // Part 3: 2 story problems (5 marks each = 10)
    this.currentExam.part3.forEach(q => {
      if (this.currentExam.userAnswers[q.id] === q.answer) score += 5;
    });

    this.currentExam.submitted = true;
    this.currentExam.score = score;

    if (score >= 16) {
      window.soundManager.levelUp();
      if (this.confetti) this.confetti.fire(3000);
    } else {
      window.soundManager.incorrect();
    }

    this.renderSchoolExamPaper();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderSchoolExamPaper() {
    const container = document.getElementById('exam-questions-paper');
    if (!container || !this.currentExam) return;

    const exam = this.currentExam;

    let resultBannerHtml = '';
    if (exam.submitted) {
      let gradeText = "Excellent! ممتاز جداً";
      let gradeColor = "#10B981";
      if (exam.score < 10) { gradeText = "Needs More Practice / يحتاج تدريب"; gradeColor = "#EF4444"; }
      else if (exam.score < 16) { gradeText = "Good Job / جيد جداً"; gradeColor = "#F59E0B"; }

      resultBannerHtml = `
        <div class="exam-score-result-card animate-pop" style="border: 3px solid ${gradeColor}; border-radius: 16px; background: #F8FAFC; margin-bottom: 24px;">
          <div class="exam-stamp" style="border-color: ${gradeColor}; color: ${gradeColor};">
            Score: ${exam.score} / 20
          </div>
          <h3 style="color: ${gradeColor}; font-size: 24px; margin-bottom: 6px;">${gradeText}</h3>
          <p style="color: #64748B;">Student: <strong>${this.state.childName}</strong> • Date: ${exam.date}</p>
        </div>
      `;
    }

    container.innerHTML = `
      ${resultBannerHtml}

      <div class="exam-paper-school-head">
        <div>
          <strong>Ministry of Education & Technical Education</strong><br>
          Primary 3 Language Schools • Mathematics Assessment
        </div>
        <div style="text-align: right;">
          Student Name: <u>${this.state.childName}</u><br>
          Total Marks: <strong>20 Marks</strong>
        </div>
      </div>

      <!-- SECTION 1 -->
      <div class="exam-section-card">
        <div class="exam-section-header">
          <span>Question 1: Choose the correct answer</span>
          <span class="marks-tag">[5 Marks]</span>
        </div>
        ${exam.part1.map((q, idx) => {
          const userAns = exam.userAnswers[q.id];
          let statusLabel = '';
          if (exam.submitted) {
            const isRight = userAns === q.answer;
            statusLabel = isRight ? ' <span style="color:#10B981; font-weight:bold;">✔ Correct (1 Mark)</span>' : ` <span style="color:#DC2626; font-weight:bold;">✗ Correct: ${q.answer}</span>`;
          }

          return `
            <div class="exam-q-row">
              <div class="exam-q-title">(${idx + 1}) ${q.question}${statusLabel}</div>
              ${this.renderQuestionVisual(q, 140)}
              <div class="exam-choose-options">
                ${q.options.map(opt => `
                  <button type="button" class="btn-exam-opt ${userAns === opt ? 'active' : ''}" 
                          ${exam.submitted ? 'disabled' : ''}
                          onclick="app.selectExamAnswer('${q.id}', '${this.escapeHtml(opt)}')">
                    ${opt}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- SECTION 2 -->
      <div class="exam-section-card">
        <div class="exam-section-header">
          <span>Question 2: Complete the following</span>
          <span class="marks-tag">[5 Marks]</span>
        </div>
        ${exam.part2.map((q, idx) => {
          const userAns = exam.userAnswers[q.id] || '';
          let statusLabel = '';
          if (exam.submitted) {
            const u = String(userAns).replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
            const a = String(q.answer).replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
            const isRight = u && (u === a || a.startsWith(u));
            statusLabel = isRight ? ' <span style="color:#10B981; font-weight:bold;">✔ Correct (1 Mark)</span>' : ` <span style="color:#DC2626; font-weight:bold;">✗ Model Answer: ${q.answer}</span>`;
          }

          return `
            <div class="exam-q-row">
              <div class="exam-q-title">(${idx + 1}) ${q.question}${statusLabel}</div>
              ${this.renderQuestionVisual(q, 140)}
              <div>
                <input type="text" class="complete-input" style="max-width: 260px; font-size:16px; padding:8px 12px;" 
                       value="${userAns}" 
                       placeholder="Write answer..." 
                       ${exam.submitted ? 'disabled' : ''}
                       oninput="app.setExamTextInput('${q.id}', this.value)" />
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- SECTION 3 -->
      <div class="exam-section-card">
        <div class="exam-section-header">
          <span>Question 3: Story Problems & Critical Reasoning</span>
          <span class="marks-tag">[10 Marks - 5 Marks Each]</span>
        </div>
        ${exam.part3.map((q, idx) => {
          const userAns = exam.userAnswers[q.id];
          let statusLabel = '';
          if (exam.submitted) {
            const isRight = userAns === q.answer;
            statusLabel = isRight ? ' <span style="color:#10B981; font-weight:bold;">✔ Correct (5 Marks)</span>' : ` <span style="color:#DC2626; font-weight:bold;">✗ Correct: ${q.answer}</span>`;
          }

          return `
            <div class="exam-q-row">
              <div class="exam-q-title">(${idx + 1}) ${q.question}${statusLabel}</div>
              ${this.renderQuestionVisual(q, 140)}
              <div class="exam-choose-options">
                ${q.options.map(opt => `
                  <button type="button" class="btn-exam-opt ${userAns === opt ? 'active' : ''}" 
                          ${exam.submitted ? 'disabled' : ''}
                          onclick="app.selectExamAnswer('${q.id}', '${this.escapeHtml(opt)}')">
                    ${opt}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div style="text-align: center; margin-top: 24px;">
        ${!exam.submitted ? `
          <button class="btn-primary-action" style="max-width: 320px; font-size: 16px; padding: 14px;" onclick="app.submitSchoolExam()">
            📝 Submit Exam & Calculate Grade (تسليم الامتحان)
          </button>
        ` : `
          <button class="btn-primary-action" style="max-width: 320px; font-size: 16px; padding: 14px;" onclick="app.generateNewSchoolExam()">
            🔄 Take Another Model Exam (امتحان تجريبي جديد)
          </button>
        `}
      </div>
    `;
  }

  // --- Feature: Miss Emma (Gemini AI Bilingual Math Tutor) ---
  getCurrentQuestion() {
    if (this.activeQuestionList && this.activeQuestionList[this.currentQuestionIdx]) {
      return this.activeQuestionList[this.currentQuestionIdx];
    }
    if (window.curriculumData && window.curriculumData.chapters && window.curriculumData.chapters[0]) {
      const firstChapter = window.curriculumData.chapters[0];
      const firstLesson = firstChapter.lessons[0];
      const qs = this.getLessonQuestions(firstLesson);
      if (qs.length > 0) return qs[0];
    }
    return null;
  }

  async openAiTutor() {
    if (!this.activeQuestionList || this.activeQuestionList.length === 0) {
      if (window.curriculumData && window.curriculumData.chapters && window.curriculumData.chapters[0]) {
        const firstChapter = window.curriculumData.chapters[0];
        const firstLesson = firstChapter.lessons[0];
        this.startLesson(firstChapter.id, firstLesson.id);
      }
    }

    const q = this.getCurrentQuestion();
    if (!q) {
      alert("Please start a lesson or quiz first to ask Miss Emma!");
      return;
    }

    const modal = document.getElementById('ai-tutor-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    document.getElementById('ai-modal-q-en').textContent = q.question;
    document.getElementById('ai-modal-q-ar').textContent = q.questionAr || q.hintAr || "فكر في معطيات المسألة خطوة بخطوة";

    this.updateAiKeyBadge();

    // Check if chat history exists for this question
    if (!this.aiChatHistories[q.id]) {
      this.aiChatHistories[q.id] = [];
    }

    if (this.aiChatHistories[q.id].length === 0) {
      await this.fetchInitialAiExplanation(q);
    } else {
      this.renderAiChatMessages(q.id);
    }

    // Focus input
    const input = document.getElementById('ai-user-query');
    if (input) input.focus();
  }

  async openAiTutorWithVoice() {
    await this.openAiTutor();
    setTimeout(() => {
      this.startVoiceRecording();
    }, 350);
  }

  closeAiTutor() {
    const modal = document.getElementById('ai-tutor-modal');
    if (modal) modal.style.display = 'none';
    this.stopAiSpeech();
    this.stopVoiceRecording();
  }

  // --- Voice-to-Text Recognition for Miss Emma ---
  initVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.log("[Voice] SpeechRecognition API not supported in this browser environment.");
      this.speechRecognitionAvailable = false;
      return;
    }

    try {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'ar-EG';
      this.speechRecognitionAvailable = true;

      this.recognition.onstart = () => {
        this.isRecordingVoice = true;
        this.updateVoiceUi(true, "تحدث الآن، أسمعك بوضوح يا بطل... 🎙️");
        if (window.soundManager && typeof window.soundManager.click === 'function') {
          window.soundManager.click();
        }
      };

      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        const combined = (finalTranscript || interimTranscript).trim();
        const input = document.getElementById('ai-user-query');
        if (input && combined) {
          input.value = combined;
        }
      };

      this.recognition.onerror = (event) => {
        console.warn("[Voice Error]", event.error);
        this.isRecordingVoice = false;
        let msg = "لم أتمكن من سماعك، جرب مرة أخرى 🎙️";
        if (event.error === 'not-allowed' || event.error === 'permission-denied') {
          msg = "يرجى تفعيل إذن الميكروفون في المتصفح 🔒";
        } else if (event.error === 'no-speech') {
          msg = "لم أسمع أي صوت، اضغط وتحدث مرة أخرى 🎙️";
        }
        this.updateVoiceUi(false, msg);
      };

      this.recognition.onend = () => {
        this.isRecordingVoice = false;
        this.updateVoiceUi(false);
        const input = document.getElementById('ai-user-query');
        if (input && input.value.trim().length > 0) {
          input.focus();
        }
      };
    } catch (e) {
      console.warn("[Voice] Initialization failed:", e);
      this.speechRecognitionAvailable = false;
    }
  }

  startVoiceRecording() {
    if (!this.speechRecognitionAvailable || !this.recognition) {
      alert("عذراً، المتصفح الحالي لا يدعم التسجيل الصوتي المباشر. يمكنك كتابة سؤالك في المربع يا بطل!");
      const input = document.getElementById('ai-user-query');
      if (input) input.focus();
      return;
    }

    this.stopAiSpeech();

    try {
      if (this.isRecordingVoice) {
        this.recognition.stop();
      }
      this.recognition.start();
    } catch (err) {
      console.warn("[Voice] Start error:", err);
      this.isRecordingVoice = false;
      this.updateVoiceUi(false);
    }
  }

  stopVoiceRecording() {
    if (this.recognition && this.isRecordingVoice) {
      try {
        this.recognition.stop();
      } catch (e) {
        console.warn("[Voice] Stop error:", e);
      }
    }
    this.isRecordingVoice = false;
    this.updateVoiceUi(false);
  }

  toggleVoiceRecording() {
    if (this.isRecordingVoice) {
      this.stopVoiceRecording();
    } else {
      this.startVoiceRecording();
    }
  }

  updateVoiceUi(isListening, statusText) {
    const banner = document.getElementById('ai-voice-recording-banner');
    const statusEl = document.getElementById('voice-status-text');
    const micBtn = document.getElementById('ai-btn-mic');
    const qMicBtn = document.getElementById('btn-q-voice');

    if (banner) {
      if (isListening) {
        banner.style.display = 'flex';
        if (statusEl) statusEl.textContent = statusText || "تحدث الآن، أسمعك بوضوح يا بطل... 🎙️";
      } else if (statusText) {
        banner.style.display = 'flex';
        if (statusEl) statusEl.textContent = statusText;
        setTimeout(() => {
          if (!this.isRecordingVoice && banner) banner.style.display = 'none';
        }, 3200);
      } else {
        banner.style.display = 'none';
      }
    }

    if (micBtn) {
      micBtn.classList.toggle('is-listening', isListening);
    }
    if (qMicBtn) {
      qMicBtn.classList.toggle('is-listening', isListening);
    }
  }

  updateAiKeyBadge() {
    const pill = document.getElementById('ai-active-key-label');
    if (!pill) return;
    pill.textContent = `Gemini AI ✨ (متصل)`;
  }

  async fetchInitialAiExplanation(q) {
    const chatBody = document.getElementById('ai-chat-body');
    if (!chatBody) return;

    this.isAiGenerating = true;
    chatBody.innerHTML = `
      <div class="ai-msg-row teacher">
        <div class="ai-msg-avatar">👩‍🏫</div>
        <div class="ai-bubble-wrap">
          <div class="ai-typing-loader">
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
            <span style="font-size: 12px; color: #64748B; margin-left: 6px;">Miss Emma is preparing your hint... المعلمة تجهز الشرح</span>
          </div>
        </div>
      </div>
    `;

    try {
      const res = await window.GeminiTutor.explainQuestion(q, this.state.childName);
      this.aiChatHistories[q.id].push({
        role: 'teacher',
        text: res.text
      });
      this.updateAiKeyBadge();
      this.renderAiChatMessages(q.id);
      window.soundManager.starEarned();
      if (this.aiAutoVoiceEnabled) {
        setTimeout(() => this.speakAiText(res.text), 450);
      }
    } catch (err) {
      console.error("[openAiTutor] Error:", err);
      chatBody.innerHTML = `
        <div class="ai-msg-row teacher">
          <div class="ai-msg-avatar">👩‍🏫</div>
          <div class="ai-bubble" style="border-color: #EF4444; background: #FEF2F2;">
            <p><strong>Miss Emma:</strong> Oops! I had trouble connecting to the math library right now.</p>
            <p style="font-size: 12px; color: #DC2626; margin-bottom: 8px;">Error: ${err.message}</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn-primary-action" style="width: auto; padding: 6px 14px;" onclick="app.fetchInitialAiExplanation(app.getCurrentQuestion())">Retry 🔄</button>
              <button class="btn-primary-action" style="width: auto; padding: 6px 14px; background: #4F46E5;" onclick="app.promptApiKey()">🔑 تغيير المفتاح (API Key)</button>
            </div>
          </div>
        </div>
      `;
    } finally {
      this.isAiGenerating = false;
    }
  }

  promptApiKey() {
    const current = localStorage.getItem('gemini_api_key') || '';
    const newKey = prompt('أدخل مفتاح Gemini API إضافي لزيادة سرعة الشرح ومضاعفة الرصيد اليومي:', current);
    if (newKey !== null) {
      if (newKey.trim().length > 10) {
        if (window.GeminiTutor) {
          window.GeminiTutor.setApiKey(newKey.trim());
        } else {
          localStorage.setItem('gemini_api_key', newKey.trim());
        }
        alert('تم حفظ المفتاح بنجاح وتفعيله ضمن المفاتيح النشطة! 🌟');
      } else if (newKey.trim() === '') {
        localStorage.removeItem('gemini_api_key');
        alert('تمت العودة للمفاتيح الافتراضية المدمجة.');
      }
      this.updateAiKeyBadge();
      const q = this.getCurrentQuestion();
      if (q) {
        this.fetchInitialAiExplanation(q);
      }
    }
  }

  async sendAiUserQuery() {
    if (this.isAiGenerating) return;
    const input = document.getElementById('ai-user-query');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    const q = this.getCurrentQuestion();
    if (!q) return;

    input.value = '';

    // Add user message
    this.aiChatHistories[q.id].push({
      role: 'user',
      text: text
    });

    this.renderAiChatMessages(q.id, true);

    this.isAiGenerating = true;
    try {
      const history = this.aiChatHistories[q.id].slice(0, -1);
      const res = await window.GeminiTutor.chatWithTutor(q, history, text, this.state.childName);

      this.aiChatHistories[q.id].push({
        role: 'teacher',
        text: res.text
      });
      this.updateAiKeyBadge();
      this.renderAiChatMessages(q.id);
      window.soundManager.click();
      if (this.aiAutoVoiceEnabled) {
        setTimeout(() => this.speakAiText(res.text), 450);
      }
    } catch (err) {
      console.error("[sendAiUserQuery] Error:", err);
      this.aiChatHistories[q.id].push({
        role: 'teacher',
        text: `Miss Emma: معلش يا بطل، حصل خطأ في الاتصال: ${err.message}. حاول مرة أخرى!`
      });
      this.renderAiChatMessages(q.id);
    } finally {
      this.isAiGenerating = false;
    }
  }

  async askAiQuickAction(type) {
    if (this.isAiGenerating) return;
    const q = this.getCurrentQuestion();
    if (!q) return;

    if (type === 'cheer') {
      this.aiChatHistories[q.id].push({ role: 'user', text: "فهمت خلاص، شكراً يا مس إيما! 🌟" });
      this.aiChatHistories[q.id].push({
        role: 'teacher',
        text: `عفواً يا ${this.state.childName} يا بطل! 👏 أنا فخورة بيك وبذكائك جداً.\nيلا جرب تختار الحل الصحيح الآن واكسب النجوم! 🚀🌟`
      });
      this.renderAiChatMessages(q.id);
      window.soundManager.correct();
      return;
    }

    let userLabel = "";
    if (type === 'food_toys') {
      userLabel = "ممكن تبسطيها بمثال من الأكل أو اللعب؟ 🍕🧸";
    } else if (type === 'step_by_step') {
      userLabel = "اديني أول خطوة فقط للحل 👣";
    } else if (type === 'math_words') {
      userLabel = "اشرحيلي معنى الكلمات الصعبة بالإنجليزي 🔤";
    }

    this.aiChatHistories[q.id].push({ role: 'user', text: userLabel });
    this.renderAiChatMessages(q.id, true);

    this.isAiGenerating = true;
    try {
      let res;
      if (type === 'food_toys') {
        res = await window.GeminiTutor.explainWithFoodOrToys(q, this.state.childName);
      } else if (type === 'step_by_step') {
        const history = this.aiChatHistories[q.id].slice(0, -1);
        res = await window.GeminiTutor.chatWithTutor(q, history, "اديني أول خطوة صغيرة فقط بالعربي إزاي أبدأ أفكر وأحل، مع توضيح المصطلحات الإنجليزية الخاصة بيها، بدون ما تقولي الناتج النهائي.", this.state.childName);
      } else if (type === 'math_words') {
        const history = this.aiChatHistories[q.id].slice(0, -1);
        res = await window.GeminiTutor.chatWithTutor(q, history, "اشرحيلي بالتفصيل معنى كل المصطلحات والكلمات الإنجليزية (Math Vocabulary) في هذا السؤال ومعناها بالعربي وكيف تفيدني في الحل.", this.state.childName);
      }

      this.aiChatHistories[q.id].push({
        role: 'teacher',
        text: res.text
      });
      this.updateAiKeyBadge();
      this.renderAiChatMessages(q.id);
      window.soundManager.click();
      if (this.aiAutoVoiceEnabled) {
        setTimeout(() => this.speakAiText(res.text), 450);
      }
    } catch (err) {
      console.error("[askAiQuickAction] Error:", err);
      this.aiChatHistories[q.id].push({
        role: 'teacher',
        text: `Miss Emma: حصل خطأ في الاتصال: ${err.message}. اضغط على الزر لتجربة المحاولة مرة تانية!`
      });
      this.renderAiChatMessages(q.id);
    } finally {
      this.isAiGenerating = false;
    }
  }

  formatBilingualText(rawText) {
    if (!rawText) return '';
    const paragraphs = String(rawText).split(/\r?\n/).filter(line => line.trim().length > 0);
    return paragraphs.map(p => {
      const hasArabic = /[\u0600-\u06FF]/.test(p);
      let clean = String(p)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\$\$\\text\{(.*?)\}\$\$/g, '<span class="math-isolate" dir="ltr">$1</span>')
        .replace(/\$(.*?)\$/g, '<span class="math-isolate" dir="ltr">$1</span>')
        .replace(/\\times/g, '×')
        .replace(/\\rightarrow/g, '➜')
        .replace(/^\s*[\*\-]\s+(.*)$/, '• $1')
        .replace(/\*\*(.*?)\*\*/g, (match, p1) => {
          const isEnglishTerm = /^[A-Za-z0-9\s\-\/\(\)\'\,\.\:\+]+$/.test(p1.trim());
          if (isEnglishTerm && /[A-Za-z]/.test(p1)) {
            return `<strong class="ai-math-term" dir="ltr">${p1}</strong>`;
          }
          return `<strong>${p1}</strong>`;
        });

      if (hasArabic) {
        clean = clean.replace(/(\b\d+[\s\+\-\×\*\/\=\<\>\÷]+\d+([\s\+\-\×\*\/\=\<\>\÷\d]+)?)/g, '<span class="math-isolate" dir="ltr">$1</span>');
        return `<div class="ai-para-ar" dir="rtl">${clean}</div>`;
      } else {
        return `<div class="ai-para-en" dir="ltr">${clean}</div>`;
      }
    }).join('');
  }

  renderAiChatMessages(qId, showLoader = false) {
    const chatBody = document.getElementById('ai-chat-body');
    if (!chatBody) return;

    const messages = this.aiChatHistories[qId] || [];
    let html = '';

    messages.forEach((msg, idx) => {
      const isTeacher = msg.role === 'teacher';
      const formattedText = this.formatBilingualText(msg.text);

      html += `
        <div class="ai-msg-row ${isTeacher ? 'teacher' : 'user'} animate-pop">
          <div class="ai-msg-avatar">${isTeacher ? '👩‍🏫' : '🧒'}</div>
          <div class="ai-bubble-wrap">
            <div class="ai-bubble">
              ${formattedText}
              ${isTeacher ? `
                <div class="ai-bubble-footer">
                  <button class="ai-speak-bubble-btn" onclick="app.speakAiMessage('${qId}', ${idx})" title="Listen to Miss Emma's explanation (استمع لشرح المعلمة)">
                    🔊 اسمع الشرح بصوت المعلمة
                  </button>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    });

    if (showLoader) {
      html += `
        <div class="ai-msg-row teacher">
          <div class="ai-msg-avatar">👩‍🏫</div>
          <div class="ai-bubble-wrap">
            <div class="ai-typing-loader">
              <span class="ai-typing-dot"></span>
              <span class="ai-typing-dot"></span>
              <span class="ai-typing-dot"></span>
              <span style="font-size: 12px; color: #64748B; margin-left: 6px;">Miss Emma is writing... المعلمة تكتب</span>
            </div>
          </div>
        </div>
      `;
    }

    chatBody.innerHTML = html;
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  toggleAiAutoVoice() {
    this.aiAutoVoiceEnabled = !this.aiAutoVoiceEnabled;
    const btn = document.getElementById('btn-ai-voice-toggle');
    const label = document.getElementById('ai-voice-toggle-label');
    if (btn) {
      btn.classList.toggle('active', this.aiAutoVoiceEnabled);
    }
    if (label) {
      label.textContent = this.aiAutoVoiceEnabled ? 'Voice: ON' : 'Voice: Muted';
    }
    if (!this.aiAutoVoiceEnabled) {
      this.stopAiSpeech();
    } else {
      window.soundManager.click();
    }
  }

  stopAiSpeech() {
    if (window.soundManager && typeof window.soundManager.stopSpeaking === 'function') {
      window.soundManager.stopSpeaking();
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.onAiSpeechEnd();
  }

  showAiSpeechLoading(msg) {
    const bar = document.getElementById('ai-speaking-bar');
    const text = document.getElementById('ai-speaking-text');
    if (text) text.textContent = msg || "✨ جاري تحضير صوت المعلمة بالذكاء الاصطناعي من Google Gemini...";
    if (bar) bar.style.display = 'flex';
  }

  hideAiSpeechLoading() {
    if (!window.soundManager || !window.soundManager.isSpeaking) {
      const bar = document.getElementById('ai-speaking-bar');
      if (bar) bar.style.display = 'none';
    }
  }

  onAiSpeechStart() {
    const bar = document.getElementById('ai-speaking-bar');
    const text = document.getElementById('ai-speaking-text');
    if (text) text.textContent = "Miss Emma is speaking (المعلمة إيما تشرح بصوت الذكاء الاصطناعي ✨)...";
    if (bar) bar.style.display = 'flex';
    const avatar = document.querySelector('.ai-tutor-avatar-wrap');
    if (avatar) avatar.classList.add('is-talking');
  }

  onAiSpeechEnd() {
    const bar = document.getElementById('ai-speaking-bar');
    if (bar) bar.style.display = 'none';
    const avatar = document.querySelector('.ai-tutor-avatar-wrap');
    if (avatar) avatar.classList.remove('is-talking');
  }

  speakAiMessage(qId, idx) {
    const list = this.aiChatHistories[qId];
    if (list && list[idx] && list[idx].text) {
      this.speakAiText(list[idx].text);
    }
  }

  async speakAiText(rawText) {
    if (!rawText) return;
    this.showAiSpeechLoading("✨ المعلمة تتحدث الآن...");

    // Try Gemini Neural Audio with a short 3-second timeout, then fallback to instant Natural Voice
    if (window.GeminiTutor && typeof window.GeminiTutor.generateAiSpeech === 'function') {
      try {
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Audio timeout")), 3000));
        const result = await Promise.race([window.GeminiTutor.generateAiSpeech(rawText), timeoutPromise]);
        if (result && result.audioData) {
          this.hideAiSpeechLoading();
          window.soundManager.playPcmAudio(
            result.audioData,
            () => this.onAiSpeechStart(),
            () => this.onAiSpeechEnd()
          );
          return;
        }
      } catch (err) {
        console.warn("[speakAiText] Gemini direct audio taking too long or failed, switching to instant voice:", err);
      }
    }

    // Instant fallback to natural teacher voice (Speaks in 0.1s!)
    this.hideAiSpeechLoading();
    if (window.soundManager && typeof window.soundManager.speakTeacherExplanation === 'function') {
      window.soundManager.speakTeacherExplanation(
        rawText,
        () => this.onAiSpeechStart(),
        () => this.onAiSpeechEnd()
      );
    } else {
      this.onAiSpeechEnd();
    }
  }

  // --- Feature: Official Ministry Textbook Page Viewer ---
  // --- Feature: Official Ministry Textbook Page Viewer ---
  openBookPageModal(bookPageNumber, lessonTitle) {
    const pageNum = parseInt(bookPageNumber) || (this.currentLesson ? this.currentLesson.bookPage : 8);
    // Verified 1-to-1 direct mapping in new 2027 Ministry textbook: PDF Page = Book Page
    const pdfPage = Math.min(121, Math.max(1, pageNum));

    this.currentBookPrintedPage = pdfPage;
    this.currentBookPdfPage = pdfPage;
    this.currentBookZoom = 1.0;

    const modal = document.getElementById('book-page-modal');
    if (!modal) return;

    const titleEl = document.getElementById('book-modal-title');
    const subTitleEl = document.getElementById('book-modal-subtitle');
    const indicatorEl = document.getElementById('book-page-indicator');
    const imgEl = document.getElementById('book-page-img');
    const canvasEl = document.getElementById('book-image-canvas');
    const zoomResetBtn = document.getElementById('book-zoom-reset-btn');

    const titleText = lessonTitle || (this.currentLesson ? (this.currentLesson.titleAr || this.currentLesson.title) : 'كتاب الوزارة الرسمي المعتمد 2027');
    if (titleEl) titleEl.textContent = titleText;
    if (subTitleEl) {
      const chText = this.currentChapter ? `الفصل ${this.currentChapter.number}` : 'الصف الثالث الابتدائي';
      subTitleEl.textContent = `${chText} • صفحة ${pdfPage} من كتاب الوزارة الرسمي`;
    }
    if (indicatorEl) indicatorEl.textContent = `صـ ${pdfPage}`;

    if (imgEl) {
      imgEl.src = `book_pages/page_${pdfPage}.jpg`;
      imgEl.alt = `كتاب الوزارة صفحة ${pdfPage}`;
    }

    if (canvasEl) {
      canvasEl.style.transform = 'scale(1)';
    }
    if (zoomResetBtn) {
      zoomResetBtn.textContent = '100%';
    }

    modal.style.display = 'flex';
    window.soundManager.click();
  }

  openCurrentLessonBookPage() {
    const pageNum = this.currentLesson ? this.currentLesson.bookPage : 8;
    const title = this.currentLesson ? (this.currentLesson.titleAr || this.currentLesson.title) : null;
    this.openBookPageModal(pageNum, title);
  }

  closeBookPageModal() {
    const modal = document.getElementById('book-page-modal');
    if (modal) modal.style.display = 'none';
    this.currentBookZoom = 1.0;
  }

  prevBookPage() {
    if (!this.currentBookPdfPage || this.currentBookPdfPage <= 1) return;
    this.currentBookPdfPage--;
    this.currentBookPrintedPage = this.currentBookPdfPage;
    this.updateBookModalImage();
  }

  nextBookPage() {
    if (!this.currentBookPdfPage || this.currentBookPdfPage >= 121) return;
    this.currentBookPdfPage++;
    this.currentBookPrintedPage = this.currentBookPdfPage;
    this.updateBookModalImage();
  }

  updateBookModalImage() {
    const imgEl = document.getElementById('book-page-img');
    const indicatorEl = document.getElementById('book-page-indicator');
    const subTitleEl = document.getElementById('book-modal-subtitle');

    if (imgEl) {
      imgEl.src = `book_pages/page_${this.currentBookPdfPage}.jpg`;
    }
    if (indicatorEl) {
      indicatorEl.textContent = `صـ ${this.currentBookPrintedPage}`;
    }
    if (subTitleEl) {
      subTitleEl.textContent = `صفحة ${this.currentBookPrintedPage} من كتاب الوزارة الرسمي (صفحة ${this.currentBookPdfPage} من 121)`;
    }
    window.soundManager.click();
  }

  zoomBookPage(delta) {
    this.currentBookZoom = Math.min(2.5, Math.max(0.6, Math.round((this.currentBookZoom + delta) * 10) / 10));
    const canvasEl = document.getElementById('book-image-canvas');
    const zoomResetBtn = document.getElementById('book-zoom-reset-btn');
    if (canvasEl) {
      canvasEl.style.transform = `scale(${this.currentBookZoom})`;
    }
    if (zoomResetBtn) {
      zoomResetBtn.textContent = `${Math.round(this.currentBookZoom * 100)}%`;
    }
  }

  resetBookZoom() {
    this.currentBookZoom = 1.0;
    const canvasEl = document.getElementById('book-image-canvas');
    const zoomResetBtn = document.getElementById('book-zoom-reset-btn');
    if (canvasEl) {
      canvasEl.style.transform = 'scale(1)';
    }
    if (zoomResetBtn) {
      zoomResetBtn.textContent = '100%';
    }
  }
}

// Global instance
window.app = new MasteryApp();

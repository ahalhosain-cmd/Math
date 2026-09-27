// interactive_widgets.js - Visual Hands-on Interactive Tools for Primary 3 Math

const Widgets = {
  // 1. Interactive Array Builder
  renderArrayBuilder(containerId, initialRows = 3, initialCols = 4) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let rows = initialRows;
    let cols = initialCols;

    function update() {
      const total = rows * cols;
      container.innerHTML = `
        <div class="widget-card">
          <div class="widget-header">
            <h4>🌟 Interactive Array Builder (مُنشئ المصفوفات)</h4>
            <span class="widget-badge">Hands-On Concept</span>
          </div>
          <p class="widget-sub">See how multiplication is organized in <strong>Rows</strong> (Horizontal) and <strong>Columns</strong> (Vertical):</p>
          
          <div class="widget-controls">
            <div class="ctrl-group">
              <label>Rows (صفوف): <span class="val-tag">${rows}</span></label>
              <div class="btn-group-mini">
                <button class="btn-step" id="row-dec">-</button>
                <button class="btn-step" id="row-inc">+</button>
              </div>
            </div>
            <div class="ctrl-group">
              <label>Columns (أعمدة): <span class="val-tag">${cols}</span></label>
              <div class="btn-group-mini">
                <button class="btn-step" id="col-dec">-</button>
                <button class="btn-step" id="col-inc">+</button>
              </div>
            </div>
          </div>

          <div class="array-visual-grid" style="grid-template-columns: repeat(${cols}, 40px);">
            ${Array.from({ length: total }).map((_, i) => `<div class="array-item" title="Item ${i+1}">⭐</div>`).join('')}
          </div>

          <div class="math-sentence-box">
            <div class="math-main">${rows} × ${cols} = <span class="highlight-total">${total}</span></div>
            <div class="math-sub">Repeated Addition: ${Array(rows).fill(cols).join(' + ')} = ${total}</div>
            <div class="math-sub">Commutative Property: ${rows} × ${cols} = ${cols} × ${rows} = ${total}</div>
          </div>
        </div>
      `;

      // Event listeners
      container.querySelector('#row-inc').onclick = () => { if (rows < 7) { rows++; update(); window.soundManager.click(); } };
      container.querySelector('#row-dec').onclick = () => { if (rows > 1) { rows--; update(); window.soundManager.click(); } };
      container.querySelector('#col-inc').onclick = () => { if (cols < 9) { cols++; update(); window.soundManager.click(); } };
      container.querySelector('#col-dec').onclick = () => { if (cols > 1) { cols--; update(); window.soundManager.click(); } };
    }

    update();
  },

  // 2. Interactive Clock Simulator
  renderClockWidget(containerId, initialHour = 3, initialMinute = 15) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let hour = initialHour;
    let minute = initialMinute;

    function update() {
      // Calculate hand angles
      const minuteAngle = minute * 6; // 360 / 60
      const hourAngle = (hour % 12) * 30 + (minute / 60) * 30; // 360 / 12

      const formattedHour = String(hour).padStart(2, '0');
      const formattedMin = String(minute).padStart(2, '0');

      let timeText = "";
      if (minute === 0) timeText = `${hour} o'clock`;
      else if (minute === 15) timeText = `Quarter past ${hour}`;
      else if (minute === 30) timeText = `Half past ${hour}`;
      else if (minute === 45) timeText = `Quarter to ${(hour % 12) + 1}`;
      else timeText = `${formattedHour}:${formattedMin}`;

      container.innerHTML = `
        <div class="widget-card">
          <div class="widget-header">
            <h4>⏰ Interactive Analog & Digital Clock (محاكي الساعة)</h4>
            <span class="widget-badge">Hands-On Concept</span>
          </div>
          <p class="widget-sub">Move the sliders to see how the Hour hand (Short/Red) and Minute hand (Long/Blue) move!</p>

          <div class="clock-display-wrap">
            <svg class="clock-face" viewBox="0 0 200 200" width="200" height="200">
              <!-- Outer dial -->
              <circle cx="100" cy="100" r="95" fill="#FFFFFF" stroke="#374151" stroke-width="6"/>
              <!-- Hour marks and numbers -->
              ${Array.from({ length: 12 }).map((_, i) => {
                const num = i + 1;
                const angle = num * 30 * (Math.PI / 180);
                const x = 100 + 72 * Math.sin(angle);
                const y = 100 - 72 * Math.cos(angle) + 5;
                return `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" font-weight="bold" fill="#1F2937">${num}</text>`;
              }).join('')}
              <!-- Center pin -->
              <circle cx="100" cy="100" r="6" fill="#111827"/>
              <!-- Hour hand (Red, short) -->
              <line x1="100" y1="100" x2="100" y2="48" stroke="#DC2626" stroke-width="6" stroke-linecap="round"
                    transform="rotate(${hourAngle} 100 100)" />
              <!-- Minute hand (Blue, long) -->
              <line x1="100" y1="100" x2="100" y2="22" stroke="#2563EB" stroke-width="4" stroke-linecap="round"
                    transform="rotate(${minuteAngle} 100 100)" />
            </svg>

            <div class="digital-clock-readout">
              <div class="digital-box">${formattedHour}:${formattedMin}</div>
              <div class="clock-words-tag">${timeText}</div>
              <div class="clock-guide-tip">
                <span style="color:#DC2626">● Short Red: Hour</span> | <span style="color:#2563EB">● Long Blue: Minute (× 5)</span>
              </div>
            </div>
          </div>

          <div class="widget-controls">
            <div class="ctrl-group">
              <label>Hour (الساعات): <span class="val-tag">${hour}</span></label>
              <input type="range" id="hour-slider" min="1" max="12" value="${hour}" class="custom-range" />
            </div>
            <div class="ctrl-group">
              <label>Minutes (الدقائق): <span class="val-tag">${minute} min</span></label>
              <input type="range" id="min-slider" min="0" max="55" step="5" value="${minute}" class="custom-range" />
            </div>
          </div>
        </div>
      `;

      container.querySelector('#hour-slider').oninput = (e) => {
        hour = parseInt(e.target.value);
        update();
      };
      container.querySelector('#min-slider').oninput = (e) => {
        minute = parseInt(e.target.value);
        update();
      };
    }

    update();
  },

  // 3. Interactive Perimeter & Area Sandbox
  renderAreaPerimeterWidget(containerId, initialL = 5, initialW = 3) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let length = initialL;
    let width = initialW;

    function update() {
      const area = length * width;
      const perimeter = 2 * (length + width);

      container.innerHTML = `
        <div class="widget-card">
          <div class="widget-header">
            <h4>📐 Area & Perimeter Explorer (مختبر المساحة والمحيط)</h4>
            <span class="widget-badge">Hands-On Concept</span>
          </div>
          <p class="widget-sub">See the difference! <strong>Area</strong> = inside squares. <strong>Perimeter</strong> = outside fence.</p>

          <div class="widget-controls">
            <div class="ctrl-group">
              <label>Length (الطول): <span class="val-tag">${length} cm</span></label>
              <div class="btn-group-mini">
                <button class="btn-step" id="l-dec">-</button>
                <button class="btn-step" id="l-inc">+</button>
              </div>
            </div>
            <div class="ctrl-group">
              <label>Width (العرض): <span class="val-tag">${width} cm</span></label>
              <div class="btn-group-mini">
                <button class="btn-step" id="w-dec">-</button>
                <button class="btn-step" id="w-inc">+</button>
              </div>
            </div>
          </div>

          <div class="geo-sandbox-wrap">
            <div class="geo-rect-visual" style="
              width: ${length * 36}px; 
              height: ${width * 36}px;
              grid-template-columns: repeat(${length}, 1fr);
              grid-template-rows: repeat(${width}, 1fr);
            ">
              ${Array.from({ length: area }).map(() => `<div class="geo-unit-square">1</div>`).join('')}
              <div class="label-length-top">${length} cm</div>
              <div class="label-width-right">${width} cm</div>
            </div>
          </div>

          <div class="results-comparison-grid">
            <div class="result-tile area-tile">
              <div class="tile-title">🟩 AREA (المساحة)</div>
              <div class="tile-formula">Length × Width</div>
              <div class="tile-val">${length} × ${width} = <strong>${area} cm²</strong></div>
              <div class="tile-desc">Space inside (Count the squares!)</div>
            </div>
            <div class="result-tile perim-tile">
              <div class="tile-title">🟨 PERIMETER (المحيط)</div>
              <div class="tile-formula">Sum of all 4 sides</div>
              <div class="tile-val">${length} + ${width} + ${length} + ${width} = <strong>${perimeter} cm</strong></div>
              <div class="tile-desc">Distance around the outside border</div>
            </div>
          </div>
        </div>
      `;

      container.querySelector('#l-inc').onclick = () => { if (length < 8) { length++; update(); window.soundManager.click(); } };
      container.querySelector('#l-dec').onclick = () => { if (length > 2) { length--; update(); window.soundManager.click(); } };
      container.querySelector('#w-inc').onclick = () => { if (width < 6) { width++; update(); window.soundManager.click(); } };
      container.querySelector('#w-dec').onclick = () => { if (width > 1) { width--; update(); window.soundManager.click(); } };
    }

    update();
  },

  // 4. Interactive Virtual Ruler
  renderRulerWidget(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const objects = [
      { name: "Crayon (قلم تلوين)", lengthCm: 8, lengthMm: 80, emoji: "🖍️" },
      { name: "Paperclip (مشبك ورق)", lengthCm: 3, lengthMm: 30, emoji: "📎" },
      { name: "Toothbrush (فرشاة أسنان)", lengthCm: 14, lengthMm: 140, emoji: "🪥" },
      { name: "Ant (نملة)", lengthCm: 0.5, lengthMm: 5, emoji: "🐜" },
      { name: "Key (مفتاح)", lengthCm: 5, lengthMm: 50, emoji: "🔑" }
    ];

    let currentIdx = 0;

    function update() {
      const obj = objects[currentIdx];
      const pxPerCm = 28;
      const objWidthPx = obj.lengthCm * pxPerCm;

      container.innerHTML = `
        <div class="widget-card">
          <div class="widget-header">
            <h4>📏 Virtual Metric Ruler (المسطرة الافتراضية)</h4>
            <span class="widget-badge">Hands-On Concept</span>
          </div>
          <p class="widget-sub">Remember: Always align the left edge of the object with <strong>0 cm</strong>!</p>

          <div class="ruler-tool-bar">
            <span>Choose Object to Measure:</span>
            <div class="object-select-btns">
              ${objects.map((o, idx) => `
                <button class="btn-obj-select ${idx === currentIdx ? 'active' : ''}" data-idx="${idx}">
                  ${o.emoji} ${o.name.split(' ')[0]}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="ruler-measurement-stage">
            <div class="measured-object-bar" style="width: ${objWidthPx}px;">
              <span class="obj-icon-large">${obj.emoji}</span>
              <span class="obj-label-name">${obj.name}</span>
            </div>

            <!-- Virtual 15 cm ruler -->
            <div class="virtual-ruler-svg-wrap">
              <svg viewBox="0 0 450 65" class="ruler-svg">
                <rect x="0" y="0" width="450" height="60" rx="4" fill="#FDE047" stroke="#CA8A04" stroke-width="2"/>
                ${Array.from({ length: 16 }).map((_, i) => {
                  const x = i * 28 + 15;
                  const lines = [`<line x1="${x}" y1="0" x2="${x}" y2="24" stroke="#854D0E" stroke-width="2"/>`];
                  lines.push(`<text x="${x}" y="42" font-size="11" font-weight="bold" fill="#713F12" text-anchor="middle">${i}</text>`);
                  if (i < 15) {
                    // Half cm mark
                    lines.push(`<line x1="${x + 14}" y1="0" x2="${x + 14}" y2="16" stroke="#A16207" stroke-width="1.5"/>`);
                  }
                  return lines.join('');
                }).join('')}
                <text x="435" y="52" font-size="10" font-weight="bold" fill="#713F12" text-anchor="end">cm</text>
              </svg>
            </div>
          </div>

          <div class="ruler-stats-card">
            <div>Measured Length in Centimeters: <strong>${obj.lengthCm} cm</strong></div>
            <div>Converted to Millimeters (× 10): <strong>${obj.lengthMm} mm</strong></div>
            <div class="ruler-rule-highlight">1 cm = 10 mm | 1 m = 100 cm</div>
          </div>
        </div>
      `;

      container.querySelectorAll('.btn-obj-select').forEach(btn => {
        btn.onclick = (e) => {
          currentIdx = parseInt(e.currentTarget.getAttribute('data-idx'));
          window.soundManager.click();
          update();
        };
      });
    }

    update();
  },

  // 5. Interactive Capacity Beaker (mL and L)
  renderCapacityWidget(containerId, initialMl = 500) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let ml = initialMl;

    function update() {
      const percentage = (ml / 1000) * 100;
      const liters = (ml / 1000).toFixed(2);

      container.innerHTML = `
        <div class="widget-card">
          <div class="widget-header">
            <h4>🧪 Capacity Measuring Beaker (مدرج قياس السعة)</h4>
            <span class="widget-badge">Hands-On Concept</span>
          </div>
          <p class="widget-sub">Observe how <strong>Milliliters (mL)</strong> add up to fill <strong>1 Liter (L) = 1,000 mL</strong>.</p>

          <div class="beaker-stage">
            <div class="beaker-container">
              <div class="beaker-liquid" style="height: ${percentage}%;">
                <div class="liquid-surface-wave"></div>
              </div>
              <div class="beaker-ticks">
                <div class="tick-mark t-1000"><span>1,000 mL (1 L)</span></div>
                <div class="tick-mark t-750"><span>750 mL</span></div>
                <div class="tick-mark t-500"><span>500 mL (1/2 L)</span></div>
                <div class="tick-mark t-250"><span>250 mL</span></div>
                <div class="tick-mark t-0"><span>0 mL</span></div>
              </div>
            </div>

            <div class="beaker-readout-panel">
              <div class="beaker-val-box">
                <div class="big-ml">${ml} mL</div>
                <div class="equiv-liters">= ${liters} Liters (L)</div>
              </div>

              <div class="beaker-buttons">
                <button class="btn-beaker-add" data-add="100">+ 100 mL</button>
                <button class="btn-beaker-add" data-add="250">+ 250 mL</button>
                <button class="btn-beaker-add" data-sub="100">- 100 mL</button>
                <button class="btn-beaker-reset">Reset (0 mL)</button>
              </div>

              <div class="capacity-tip-box">
                💡 <strong>Remember:</strong> 1 Liter = 1,000 Milliliters.<br>
                A water bottle is ~1 L, while a medical spoon is 5 mL.
              </div>
            </div>
          </div>
        </div>
      `;

      container.querySelectorAll('[data-add]').forEach(b => {
        b.onclick = (e) => {
          const val = parseInt(e.currentTarget.getAttribute('data-add'));
          ml = Math.min(1000, ml + val);
          window.soundManager.click();
          update();
        };
      });

      container.querySelectorAll('[data-sub]').forEach(b => {
        b.onclick = (e) => {
          const val = parseInt(e.currentTarget.getAttribute('data-sub'));
          ml = Math.max(0, ml - val);
          window.soundManager.click();
          update();
        };
      });

      container.querySelector('.btn-beaker-reset').onclick = () => {
        ml = 0;
        window.soundManager.click();
        update();
      };
    }

    update();
  }
};

window.Widgets = Widgets;

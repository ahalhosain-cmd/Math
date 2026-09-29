// question_visuals.js - Comprehensive Visual Diagram Generator for School-Style Math Questions
// Primary 3 Term 1 Curriculum (Matching Official MOETE Egyptian Textbook)
// Pure visual diagrams: NO captions, NO text leaks, NO answer spoilers!

const QuestionVisuals = {
  formatCaption(caption) {
    return '';
  },

  // 1. Analog Clock
  renderClock(hour, minute, size = 170, caption = '') {
    const minuteAngle = (minute % 60) * 6;
    const hourAngle = ((hour % 12) * 30) + ((minute / 60) * 30);

    let numbersSvg = '';
    for (let i = 1; i <= 12; i++) {
      const angle = i * 30 * (Math.PI / 180);
      const x = 100 + 70 * Math.sin(angle);
      const y = 100 - 70 * Math.cos(angle) + 5;
      numbersSvg += `<text x="${x}" y="${y}" text-anchor="middle" font-size="14" font-weight="bold" fill="#1E293B">${i}</text>`;
    }

    // Minute tick marks
    let ticksSvg = '';
    for (let m = 0; m < 60; m++) {
      const rad = m * 6 * (Math.PI / 180);
      const isFive = m % 5 === 0;
      const r1 = isFive ? 84 : 88;
      const r2 = 92;
      const x1 = 100 + r1 * Math.sin(rad);
      const y1 = 100 - r1 * Math.cos(rad);
      const x2 = 100 + r2 * Math.sin(rad);
      const y2 = 100 - r2 * Math.cos(rad);
      const strokeW = isFive ? '2.5' : '1.2';
      const strokeC = isFive ? '#334155' : '#94A3B8';
      ticksSvg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${strokeC}" stroke-width="${strokeW}" stroke-linecap="round" />`;
    }

    return `
      <div class="q-visual-wrapper">
        <svg viewBox="0 0 200 200" width="${size}" height="${size}" class="q-visual-svg">
          <circle cx="100" cy="100" r="96" fill="#FFFFFF" stroke="#334155" stroke-width="5"/>
          <circle cx="100" cy="100" r="92" fill="#F8FAFC"/>
          ${ticksSvg}
          ${numbersSvg}
          <!-- Hour hand (short, red) -->
          <line x1="100" y1="100" x2="100" y2="52" stroke="#DC2626" stroke-width="6" stroke-linecap="round"
                transform="rotate(${hourAngle} 100 100)" />
          <!-- Minute hand (long, blue) -->
          <line x1="100" y1="100" x2="100" y2="24" stroke="#2563EB" stroke-width="4" stroke-linecap="round"
                transform="rotate(${minuteAngle} 100 100)" />
          <circle cx="100" cy="100" r="6" fill="#0F172A"/>
          <circle cx="100" cy="100" r="2.5" fill="#FFFFFF"/>
        </svg>
      </div>
    `;
  },

  // 1b. Dual Clock for Elapsed Time (e.g. Start 4:10 PM -> End 4:40 PM)
  renderDualClock(startHour = 4, startMin = 10, endHour = 4, endMin = 40, caption = '') {
    const c1 = this.renderClock(startHour, startMin, 120, '');
    const c2 = this.renderClock(endHour, endMin, 120, '');

    return `
      <div class="q-visual-wrapper">
        <div style="display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap;">
          <div style="text-align: center;">
            ${c1}
          </div>
          <div style="font-size: 26px; font-weight: bold; color: #4F46E5; align-self: center;">➔</div>
          <div style="text-align: center;">
            ${c2}
          </div>
        </div>
      </div>
    `;
  },

  // 2. Array Grid
  renderArray(rows, cols, emoji = '⭐', caption = '') {
    const maxCols = Math.min(cols, 10);
    const cellSize = maxCols > 6 ? 30 : 36;

    return `
      <div class="q-visual-wrapper">
        <div class="q-array-grid" style="grid-template-columns: repeat(${cols}, ${cellSize}px);">
          ${Array.from({ length: rows * cols }).map(() => `<div class="q-array-cell" style="font-size: ${cellSize * 0.55}px;">${emoji}</div>`).join('')}
        </div>
      </div>
    `;
  },

  // 3. Split Array for Distributive Property (e.g. 5x8 split into 5x5 + 5x3)
  renderSplitArray(rows, cols1, cols2, emoji = '⭐', caption = '') {
    return `
      <div class="q-visual-wrapper">
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px; background: white; padding: 10px 14px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
          <div style="text-align: center;">
            <div class="q-array-grid" style="grid-template-columns: repeat(${cols1}, 28px); background: #EFF6FF; border: 1px solid #BFDBFE;">
              ${Array.from({ length: rows * cols1 }).map(() => `<div class="q-array-cell" style="font-size:15px;">${emoji}</div>`).join('')}
            </div>
          </div>
          <div style="font-size: 22px; font-weight: bold; color: #64748B;">+</div>
          <div style="text-align: center;">
            <div class="q-array-grid" style="grid-template-columns: repeat(${cols2}, 28px); background: #F5F3FF; border: 1px solid #DDD6FE;">
              ${Array.from({ length: rows * cols2 }).map(() => `<div class="q-array-cell" style="font-size:15px;">${emoji}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 4. Equal Groups Sharing (Division & Multiplication)
  renderEqualGroups(groupsCount, itemsPerGroup, emoji = '🍎', caption = '') {
    return `
      <div class="q-visual-wrapper">
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 500px;">
          ${Array.from({ length: groupsCount }).map(() => `
            <div style="border: 2px dashed #3B82F6; background: #EFF6FF; border-radius: 14px; min-width: 75px; min-height: 75px; padding: 8px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 3px; max-width: 70px;">
                ${Array.from({ length: itemsPerGroup }).map(() => `<span style="font-size: 16px;">${emoji}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // 5. Geometric Shapes (Quadrilaterals, Polygons, Circles) - Pure visual geometry without text
  renderShape(shapeType, size = 160, caption = '') {
    let shapeSvg = '';

    if (shapeType === 'trapezoid') {
      shapeSvg = `
        <polygon points="50,40 150,40 180,140 20,140" fill="#E0E7FF" stroke="#4F46E5" stroke-width="3.5"/>
        <line x1="45" y1="40" x2="155" y2="40" stroke="#DC2626" stroke-width="2" stroke-dasharray="3"/>
        <line x1="15" y1="140" x2="185" y2="140" stroke="#DC2626" stroke-width="2" stroke-dasharray="3"/>
        <polygon points="98,37 106,40 98,43" fill="#DC2626"/>
        <polygon points="98,137 106,140 98,143" fill="#DC2626"/>
      `;
    } else if (shapeType === 'rhombus') {
      shapeSvg = `
        <polygon points="100,20 170,100 100,180 30,100" fill="#FEF3C7" stroke="#D97706" stroke-width="3.5"/>
        <line x1="133" y1="58" x2="137" y2="62" stroke="#B45309" stroke-width="3"/>
        <line x1="133" y1="138" x2="137" y2="142" stroke="#B45309" stroke-width="3"/>
        <line x1="63" y1="138" x2="67" y2="142" stroke="#B45309" stroke-width="3"/>
        <line x1="63" y1="58" x2="67" y2="62" stroke="#B45309" stroke-width="3"/>
      `;
    } else if (shapeType === 'parallelogram') {
      shapeSvg = `
        <polygon points="60,40 180,40 140,140 20,140" fill="#D1FAE5" stroke="#059669" stroke-width="3.5"/>
        <polygon points="118,37 126,40 118,43" fill="#047857"/>
        <polygon points="78,137 86,140 78,143" fill="#047857"/>
      `;
    } else if (shapeType === 'rectangle') {
      shapeSvg = `
        <rect x="25" y="45" width="150" height="90" fill="#DBEAFE" stroke="#2563EB" stroke-width="3.5" rx="2"/>
        <path d="M25,60 L40,60 L40,45" fill="none" stroke="#2563EB" stroke-width="2"/>
        <path d="M175,60 L160,60 L160,45" fill="none" stroke="#2563EB" stroke-width="2"/>
        <path d="M25,120 L40,120 L40,135" fill="none" stroke="#2563EB" stroke-width="2"/>
        <path d="M175,120 L160,120 L160,135" fill="none" stroke="#2563EB" stroke-width="2"/>
      `;
    } else if (shapeType === 'square') {
      shapeSvg = `
        <rect x="45" y="35" width="110" height="110" fill="#FCE7F3" stroke="#DB2777" stroke-width="3.5" rx="2"/>
        <path d="M45,50 L60,50 L60,35" fill="none" stroke="#DB2777" stroke-width="2"/>
        <path d="M155,50 L140,50 L140,35" fill="none" stroke="#DB2777" stroke-width="2"/>
        <path d="M45,130 L60,130 L60,145" fill="none" stroke="#DB2777" stroke-width="2"/>
        <path d="M155,130 L140,130 L140,145" fill="none" stroke="#DB2777" stroke-width="2"/>
        <line x1="100" y1="30" x2="100" y2="40" stroke="#DB2777" stroke-width="2.5"/>
        <line x1="100" y1="140" x2="100" y2="150" stroke="#DB2777" stroke-width="2.5"/>
        <line x1="40" y1="90" x2="50" y2="90" stroke="#DB2777" stroke-width="2.5"/>
        <line x1="150" y1="90" x2="160" y2="90" stroke="#DB2777" stroke-width="2.5"/>
      `;
    } else if (shapeType === 'hexagon') {
      shapeSvg = `
        <polygon points="100,20 170,55 170,135 100,170 30,135 30,55" fill="#EDE9FE" stroke="#7C3AED" stroke-width="3.5"/>
        <circle cx="100" cy="20" r="4.5" fill="#4C1D95"/>
        <circle cx="170" cy="55" r="4.5" fill="#4C1D95"/>
        <circle cx="170" cy="135" r="4.5" fill="#4C1D95"/>
        <circle cx="100" cy="170" r="4.5" fill="#4C1D95"/>
        <circle cx="30" cy="135" r="4.5" fill="#4C1D95"/>
        <circle cx="30" cy="55" r="4.5" fill="#4C1D95"/>
      `;
    } else if (shapeType === 'pentagon') {
      shapeSvg = `
        <polygon points="100,25 175,80 145,165 55,165 25,80" fill="#FEF9C3" stroke="#CA8A04" stroke-width="3.5"/>
      `;
    } else if (shapeType === 'triangle') {
      shapeSvg = `
        <polygon points="100,28 175,155 25,155" fill="#CCFBF1" stroke="#0D9488" stroke-width="3.5"/>
        <circle cx="100" cy="28" r="4" fill="#115E59"/>
        <circle cx="175" cy="155" r="4" fill="#115E59"/>
        <circle cx="25" cy="155" r="4" fill="#115E59"/>
      `;
    } else if (shapeType === 'circle_vs_polygon') {
      shapeSvg = `
        <circle cx="55" cy="90" r="42" fill="#FEE2E2" stroke="#EF4444" stroke-width="3"/>
        <polygon points="145,50 185,130 105,130" fill="#DCFCE7" stroke="#16A34A" stroke-width="3"/>
      `;
    }

    return `
      <div class="q-visual-wrapper">
        <svg viewBox="0 0 200 180" width="${size}" height="${size * 0.9}" class="q-visual-svg">
          ${shapeSvg}
        </svg>
      </div>
    `;
  },

  // 6. Shapes with Dimensions (Perimeter and Area)
  renderDimensionedShape(type, dims = {}, unit = 'cm', caption = '') {
    let svgContent = '';

    if (type === 'rectangle') {
      const len = dims.length !== undefined ? dims.length : 7;
      const wid = dims.width !== undefined ? dims.width : 4;
      const lenLabel = len === '?' ? `? ${unit}` : `${len} ${unit}`;
      const widLabel = wid === '?' ? `? ${unit}` : `${wid} ${unit}`;

      svgContent = `
        <rect x="40" y="35" width="180" height="90" fill="#DBEAFE" stroke="#2563EB" stroke-width="3"/>
        <line x1="40" y1="20" x2="220" y2="20" stroke="#1E40AF" stroke-width="2" marker-start="url(#arr)" marker-end="url(#arr)"/>
        <text x="130" y="15" font-size="13" font-weight="bold" fill="#1E40AF" text-anchor="middle">${lenLabel}</text>
        <line x1="22" y1="35" x2="22" y2="125" stroke="#1E40AF" stroke-width="2"/>
        <text x="16" y="85" font-size="13" font-weight="bold" fill="#1E40AF" text-anchor="middle" transform="rotate(-90 16 85)">${widLabel}</text>
      `;
    } else if (type === 'square') {
      const side = dims.side !== undefined ? dims.side : 6;
      const sideText = side === '?' ? `? ${unit}` : `${side} ${unit}`;

      svgContent = `
        <rect x="75" y="32" width="110" height="110" fill="#FCE7F3" stroke="#DB2777" stroke-width="3"/>
        <text x="130" y="22" font-size="13" font-weight="bold" fill="#9D174D" text-anchor="middle">${sideText}</text>
        <text x="130" y="160" font-size="13" font-weight="bold" fill="#9D174D" text-anchor="middle">${sideText}</text>
      `;
    } else if (type === 'triangle') {
      const { a = 5, b = 6, c = 7 } = dims;
      svgContent = `
        <polygon points="130,25 210,135 50,135" fill="#CCFBF1" stroke="#0D9488" stroke-width="3"/>
        <text x="80" y="75" font-size="12" font-weight="bold" fill="#0F766E" text-anchor="middle">${a} ${unit}</text>
        <text x="180" y="75" font-size="12" font-weight="bold" fill="#0F766E" text-anchor="middle">${b} ${unit}</text>
        <text x="130" y="155" font-size="12" font-weight="bold" fill="#0F766E" text-anchor="middle">${c} ${unit}</text>
      `;
    } else if (type === 'polygon') {
      const sides = dims.sides || [3, 4, 3, 4];
      svgContent = `
        <polygon points="50,30 200,30 170,120 40,120" fill="#EDE9FE" stroke="#7C3AED" stroke-width="3"/>
        <text x="125" y="20" font-size="12" font-weight="bold" fill="#6D28D9" text-anchor="middle">${sides[0]} ${unit}</text>
        <text x="195" y="80" font-size="12" font-weight="bold" fill="#6D28D9" text-anchor="middle">${sides[1]} ${unit}</text>
        <text x="105" y="140" font-size="12" font-weight="bold" fill="#6D28D9" text-anchor="middle">${sides[2]} ${unit}</text>
        <text x="30" y="80" font-size="12" font-weight="bold" fill="#6D28D9" text-anchor="middle">${sides[3]} ${unit}</text>
      `;
    }

    return `
      <div class="q-visual-wrapper">
        <svg viewBox="0 0 260 170" width="230" height="150" class="q-visual-svg">
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1E40AF"/>
            </marker>
          </defs>
          ${svgContent}
        </svg>
      </div>
    `;
  },

  // 6b. Composite L-Shaped Figure (Decomposition into Rectangles A and B)
  renderLShape(dims = { a_area: 15, b_area: 10, unit: 'cm²' }, caption = '') {
    return `
      <div class="q-visual-wrapper">
        <svg viewBox="0 0 240 180" width="210" height="155" class="q-visual-svg">
          <!-- Part A (Top/Left) -->
          <rect x="40" y="20" width="70" height="130" fill="#DBEAFE" stroke="#2563EB" stroke-width="2.5"/>
          <!-- Part B (Right) -->
          <rect x="110" y="80" width="90" height="70" fill="#EDE9FE" stroke="#7C3AED" stroke-width="2.5"/>
          <!-- Dividing dashed line -->
          <line x1="110" y1="80" x2="110" y2="150" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="4"/>
        </svg>
      </div>
    `;
  },

  // 7. Grid Area (Unit Squares)
  renderGridArea(rows = 3, cols = 5, color = '#3B82F6', caption = '') {
    const cellSize = 26;
    const totalW = cols * cellSize;
    const totalH = rows * cellSize;

    return `
      <div class="q-visual-wrapper">
        <div style="background: white; padding: 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
          <svg width="${totalW + 2}" height="${totalH + 2}" viewBox="0 0 ${totalW + 2} ${totalH + 2}">
            ${Array.from({ length: rows }).map((_, r) => {
              return Array.from({ length: cols }).map((_, c) => {
                const x = c * cellSize + 1;
                const y = r * cellSize + 1;
                return `
                  <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#DBEAFE" stroke="#2563EB" stroke-width="1.2"/>
                `;
              }).join('');
            }).join('')}
          </svg>
        </div>
      </div>
    `;
  },

  // 7b. Dual Grid Area (Comparing two rectangles with same area)
  renderDualGridArea(r1 = 3, c1 = 4, r2 = 2, c2 = 6, label1 = '', label2 = '', caption = '') {
    const cs = 18;

    return `
      <div class="q-visual-wrapper">
        <div style="display: flex; gap: 16px; align-items: flex-end; justify-content: center; background: white; padding: 12px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
          <!-- Rect A -->
          <div style="text-align: center;">
            <svg width="${c1 * cs + 2}" height="${r1 * cs + 2}" viewBox="0 0 ${c1 * cs + 2} ${r1 * cs + 2}">
              ${Array.from({ length: r1 }).map((_, r) => Array.from({ length: c1 }).map((_, c) => `
                <rect x="${c * cs + 1}" y="${r * cs + 1}" width="${cs}" height="${cs}" fill="#DBEAFE" stroke="#2563EB" stroke-width="1"/>
              `).join('')).join('')}
            </svg>
          </div>
          <!-- Rect B -->
          <div style="text-align: center;">
            <svg width="${c2 * cs + 2}" height="${r2 * cs + 2}" viewBox="0 0 ${c2 * cs + 2} ${r2 * cs + 2}">
              ${Array.from({ length: r2 }).map((_, r) => Array.from({ length: c2 }).map((_, c) => `
                <rect x="${c * cs + 1}" y="${r * cs + 1}" width="${cs}" height="${cs}" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1"/>
              `).join('')).join('')}
            </svg>
          </div>
        </div>
      </div>
    `;
  },

  // 8. Metric Ruler
  renderRuler(objLengthCm, objName = 'Pencil', emoji = '✏️', isMm = false, startCm = 0) {
    const pxPerUnit = isMm ? 3.2 : 24;
    const startX = 16 + (startCm * pxPerUnit);
    const objWidth = objLengthCm * pxPerUnit;
    const endX = startX + objWidth;
    const unitLabel = isMm ? 'mm' : 'cm';
    const totalUnits = isMm ? 60 : 12;
    const totalW = totalUnits * pxPerUnit + 40;

    let ticksSvg = '';
    for (let i = 0; i <= totalUnits; i++) {
      const x = 16 + i * pxPerUnit;
      const isMajor = isMm ? (i % 10 === 0) : true;
      const tickH = isMajor ? 20 : (isMm && i % 5 === 0 ? 12 : 7);
      const val = isMm ? i : i;

      ticksSvg += `<line x1="${x}" y1="4" x2="${x}" y2="${4 + tickH}" stroke="#854D0E" stroke-width="${isMajor ? 1.8 : 1}"/>`;
      if (isMajor) {
        ticksSvg += `<text x="${x}" y="38" font-size="11" font-weight="bold" fill="#713F12" text-anchor="middle">${val}</text>`;
      }
    }

    return `
      <div class="q-visual-wrapper">
        <div class="q-ruler-stage" style="overflow-x: auto; max-width: 100%;">
          <svg viewBox="0 0 ${totalW} 95" width="${Math.min(totalW, 380)}" height="95" class="q-ruler-svg">
            <!-- Object being measured -->
            <rect x="${startX}" y="6" width="${objWidth}" height="28" rx="5" fill="#EF4444" stroke="#B91C1C" stroke-width="1.5"/>
            <!-- Start & End indicator dotted lines -->
            <line x1="${startX}" y1="34" x2="${startX}" y2="48" stroke="#DC2626" stroke-width="2" stroke-dasharray="3"/>
            <line x1="${endX}" y1="34" x2="${endX}" y2="48" stroke="#DC2626" stroke-width="2" stroke-dasharray="3"/>
            <!-- Object icon only (no text) -->
            <text x="${startX + objWidth / 2}" y="24" font-size="16" text-anchor="middle">${emoji}</text>

            <!-- Yellow Ruler Body -->
            <g transform="translate(0, 48)">
              <rect x="0" y="0" width="${totalW}" height="42" rx="4" fill="#FDE047" stroke="#CA8A04" stroke-width="2"/>
              ${ticksSvg}
              <text x="${totalW - 8}" y="36" font-size="11" font-weight="bold" fill="#854D0E" text-anchor="end">${unitLabel}</text>
            </g>
          </svg>
        </div>
      </div>
    `;
  },

  // 9. Line Plot with 'X' Marks and Key
  renderLinePlot(title = '', xValues = [1, 2, 3, 4, 5], counts = [2, 3, 1, 5, 2], xLabel = '', caption = '', keyText = '') {
    const startX = 40;
    const stepX = 50;
    const baseY = 135;
    const displayKey = keyText || 'Key: ✗ = 1';

    let pointsSvg = '';
    xValues.forEach((val, idx) => {
      const cx = startX + idx * stepX;
      pointsSvg += `<line x1="${cx}" y1="${baseY - 6}" x2="${cx}" y2="${baseY + 6}" stroke="#1E293B" stroke-width="2.5"/>`;
      pointsSvg += `<text x="${cx}" y="${baseY + 22}" font-size="13" font-weight="bold" fill="#1E293B" text-anchor="middle">${val}</text>`;

      const count = counts[idx] || 0;
      for (let k = 0; k < count; k++) {
        const y = baseY - 16 - (k * 22);
        pointsSvg += `
          <text x="${cx}" y="${y}" font-size="17" font-weight="900" fill="#DC2626" text-anchor="middle">✗</text>
        `;
      }
    });

    const totalW = startX + xValues.length * stepX + 30;

    return `
      <div class="q-visual-wrapper">
        <div style="font-size:11px; font-weight:bold; color:#4338CA; background:#EEF2FF; border:1px solid #C7D2FE; padding:3px 8px; border-radius:6px; margin-bottom:6px; display:inline-block;">
          🔑 ${displayKey}
        </div>
        <svg viewBox="0 0 ${totalW} 175" width="${Math.min(totalW, 400)}" height="155" class="q-visual-svg">
          <line x1="15" y1="${baseY}" x2="${totalW - 15}" y2="${baseY}" stroke="#1E293B" stroke-width="3"/>
          <polygon points="10,${baseY} 18,${baseY - 5} 18,${baseY + 5}" fill="#1E293B"/>
          <polygon points="${totalW - 10},${baseY} ${totalW - 18},${baseY - 5} ${totalW - 18},${baseY + 5}" fill="#1E293B"/>
          ${pointsSvg}
          ${xLabel ? `<text x="${totalW / 2}" y="${baseY + 36}" font-size="11" font-weight="600" fill="#64748B" text-anchor="middle">${xLabel}</text>` : ''}
        </svg>
      </div>
    `;
  },

  // 10. Authentic School-Grade SVG Bar Graph with Vertical Y-Axis Scale
  renderBarGraph(data = [{ label: 'Reading', val: 7 }, { label: 'Math', val: 10 }, { label: 'Art', val: 4 }], title = '', scale = 2, maxVal = null, caption = '', showValues = false) {
    const highestVal = Math.max(...data.map(d => d.val));
    const axisMax = maxVal || (Math.ceil(highestVal / scale) * scale + scale);

    const svgW = 340;
    const svgH = 200;
    const chartLeft = 40;
    const chartRight = svgW - 20;
    const chartTop = 24;
    const chartBottom = svgH - 40;
    const chartHeight = chartBottom - chartTop;
    const chartWidth = chartRight - chartLeft;

    // Y-Axis Ticks & Grid Lines
    let yTicksSvg = '';
    const numSteps = Math.round(axisMax / scale);
    for (let i = 0; i <= numSteps; i++) {
      const val = i * scale;
      const y = chartBottom - (val / axisMax) * chartHeight;
      yTicksSvg += `
        <line x1="${chartLeft - 4}" y1="${y}" x2="${chartRight}" stroke="${i === 0 ? '#334155' : '#E2E8F0'}" stroke-width="${i === 0 ? 2 : 1}" />
        <text x="${chartLeft - 8}" y="${y + 4}" font-size="10" font-weight="bold" fill="#475569" text-anchor="end">${val}</text>
      `;
    }

    // Bars
    const barWidth = Math.min(36, (chartWidth / data.length) * 0.55);
    const colStep = chartWidth / data.length;
    let barsSvg = '';
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

    data.forEach((d, idx) => {
      const cx = chartLeft + (idx + 0.5) * colStep;
      const x = cx - barWidth / 2;
      const barH = (d.val / axisMax) * chartHeight;
      const y = chartBottom - barH;
      const barColor = colors[idx % colors.length];

      barsSvg += `
        <rect x="${x}" y="${y}" width="${barWidth}" height="${barH}" fill="${barColor}" rx="3" stroke="#1E293B" stroke-width="1.2"/>
        ${showValues ? `<text x="${cx}" y="${y - 4}" font-size="11" font-weight="bold" fill="#1E293B" text-anchor="middle">${d.val}</text>` : ''}
        <text x="${cx}" y="${chartBottom + 16}" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">${d.label}</text>
      `;
    });

    return `
      <div class="q-visual-wrapper">
        <div style="font-size:10px; font-weight:600; color:#6366F1; margin-bottom:4px;">Scale = ${scale}</div>
        <svg viewBox="0 0 ${svgW} ${svgH}" width="320" height="190" class="q-visual-svg" style="background:white; border-radius:10px; border:1px solid #E2E8F0; padding:4px;">
          ${yTicksSvg}
          <line x1="${chartLeft}" y1="${chartTop - 6}" x2="${chartLeft}" y2="${chartBottom}" stroke="#334155" stroke-width="2"/>
          <polygon points="${chartLeft},${chartTop - 12} ${chartLeft - 4},${chartTop - 5} ${chartLeft + 4},${chartTop - 5}" fill="#334155"/>
          ${barsSvg}
        </svg>
      </div>
    `;
  },

  // 11. Graduated Liquid Beaker (Capacity: mL & Liters)
  renderBeaker(fillMl = 400, maxMl = 500, caption = '') {
    const fillRatio = Math.min(fillMl / maxMl, 1.0);
    const liquidH = fillRatio * 125;
    const liquidY = 145 - liquidH;

    const numTicks = 5;
    let ticksSvg = '';
    for (let i = 1; i <= numTicks; i++) {
      const mlVal = (maxMl / numTicks) * i;
      const y = 145 - (i / numTicks) * 125;
      ticksSvg += `
        <line x1="28" y1="${y}" x2="48" y2="${y}" stroke="#475569" stroke-width="1.8"/>
        <text x="24" y="${y + 4}" font-size="10" font-weight="bold" fill="#334155" text-anchor="end">${mlVal}</text>
      `;
    }

    return `
      <div class="q-visual-wrapper">
        <svg viewBox="0 0 170 175" width="150" height="155" class="q-visual-svg">
          <rect x="30" y="${liquidY}" width="90" height="${liquidH}" fill="#38BDF8" opacity="0.8" rx="2"/>
          <ellipse cx="75" cy="${liquidY}" rx="45" ry="4" fill="#0284C7" opacity="0.7"/>
          <path d="M25,10 L30,145 A10,10 0 0,0 40,155 L110,155 A10,10 0 0,0 120,145 L125,10" fill="none" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
          <path d="M20,10 L30,10 M120,10 L130,10" stroke="#334155" stroke-width="3"/>
          ${ticksSvg}
          <text x="132" y="152" font-size="11" font-weight="bold" fill="#0284C7">mL</text>
        </svg>
      </div>
    `;
  },

  // 12. Place Value House (Single Number - pure digits without revealing place names)
  renderPlaceValueCard(num = 745210, highlightDigit = 4, caption = '') {
    const s = String(num);

    return `
      <div class="q-visual-wrapper">
        <div class="q-pv-table">
          ${s.split('').map((digit) => {
            const isTarget = highlightDigit !== null && digit === String(highlightDigit);
            return `
              <div class="q-pv-col ${isTarget ? 'is-target-digit' : ''}">
                <div class="q-pv-digit">${digit}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // 12b. Place Value Comparison Card
  renderPlaceValueComparison(num1 = 3450, num2 = 3250, highlightPlace = '', caption = '') {
    const card1 = this.renderPlaceValueCard(num1, null, '');
    const card2 = this.renderPlaceValueCard(num2, null, '');

    return `
      <div class="q-visual-wrapper">
        <div style="display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; align-items: center; background: white; padding: 10px; border-radius: 12px; border: 1px solid #E2E8F0;">
          <div style="text-align: center;">
            ${card1}
          </div>
          <div style="font-size: 20px; font-weight: 900; color: #6366F1; align-self: center;">VS</div>
          <div style="text-align: center;">
            ${card2}
          </div>
        </div>
      </div>
    `;
  },

  // 13. Sequential Pattern
  renderPattern(items = ['30', '40', '50', '60', '❓', '❓'], caption = '') {
    return `
      <div class="q-visual-wrapper">
        <div style="display: flex; gap: 6px; align-items: center; justify-content: center; flex-wrap: wrap; background: white; padding: 10px 14px; border-radius: 12px; box-shadow: 0 2px 6px rgba(0,0,0,0.05); border: 1px solid #E2E8F0;">
          ${items.map(item => {
            const isMystery = item === '❓' || item === '?' || item === '__';
            return `
              <div style="min-width: 42px; height: 42px; padding: 0 8px; display: flex; align-items: center; justify-content: center; font-size: ${isMystery ? '20px' : '16px'}; font-weight: bold; border-radius: 10px; background: ${isMystery ? '#FEF3C7' : '#F1F5F9'}; border: 2px ${isMystery ? 'dashed #D97706' : 'solid #CBD5E1'}; color: ${isMystery ? '#B45309' : '#1E293B'};">
                ${item}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  // 14. Fact Family Triangle
  renderFactFamilyTriangle(top = 35, left = 7, right = '❓', caption = '') {
    return `
      <div class="q-visual-wrapper">
        <svg viewBox="0 0 220 190" width="180" height="160" class="q-visual-svg">
          <polygon points="110,25 200,165 20,165" fill="#EEF2FF" stroke="#4F46E5" stroke-width="3"/>
          <text x="55" y="90" font-size="14" font-weight="bold" fill="#6366F1" text-anchor="middle">÷</text>
          <text x="165" y="90" font-size="14" font-weight="bold" fill="#6366F1" text-anchor="middle">÷</text>
          <text x="110" y="155" font-size="14" font-weight="bold" fill="#6366F1" text-anchor="middle">×</text>

          <circle cx="110" cy="38" r="22" fill="#4F46E5"/>
          <text x="110" y="44" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">${top}</text>

          <circle cx="38" cy="155" r="20" fill="#2563EB"/>
          <text x="38" y="161" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle">${left}</text>

          <circle cx="182" cy="155" r="20" fill="${right === '❓' ? '#D97706' : '#7C3AED'}"/>
          <text x="182" y="161" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">${right}</text>
        </svg>
      </div>
    `;
  },

  // 13. Primary 1 Ten-Frame (2x5 Grid of Counters)
  renderTenFrame(count = 3, total = 10, color = '#2563EB') {
    let cellsSvg = '';
    const cols = 5;
    const rows = Math.ceil(total / cols);
    const boxSize = 38;
    const gap = 6;
    const startX = 16;
    const startY = 16;

    for (let i = 0; i < total; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;
      const x = startX + c * (boxSize + gap);
      const y = startY + r * (boxSize + gap);
      const isFilled = i < count;

      cellsSvg += `
        <rect x="${x}" y="${y}" width="${boxSize}" height="${boxSize}" rx="8" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2"/>
        ${isFilled ? `
          <circle cx="${x + boxSize / 2}" cy="${y + boxSize / 2}" r="13" fill="${color}"/>
          <circle cx="${x + boxSize / 2 - 4}" cy="${y + boxSize / 2 - 4}" r="3.5" fill="#FFFFFF" opacity="0.6"/>
        ` : `
          <circle cx="${x + boxSize / 2}" cy="${y + boxSize / 2}" r="8" fill="none" stroke="#CBD5E1" stroke-dasharray="3 3"/>
        `}
      `;
    }

    const totalW = startX * 2 + cols * (boxSize + gap) - gap;
    const totalH = startY * 2 + rows * (boxSize + gap) - gap;

    return `
      <div class="q-visual-wrapper q-visual-ten-frame">
        <svg viewBox="0 0 ${totalW} ${totalH}" width="260" height="${rows === 1 ? '75' : '120'}" class="q-visual-svg">
          <rect x="6" y="6" width="${totalW - 12}" height="${totalH - 12}" rx="14" fill="#FFFFFF" stroke="#64748B" stroke-width="3"/>
          ${cellsSvg}
        </svg>
      </div>
    `;
  },

  // 14. Primary 1 Cute Counters (Fruits, Animals, Candies, Toys)
  renderCuteCounters(count = 4, emoji = '🍎', maxPerRow = 5) {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(`
        <div class="cute-counter-bubble animate-pop" style="animation-delay: ${i * 0.08}s">
          <span class="counter-emoji">${emoji}</span>
          <span class="counter-index-badge">${i + 1}</span>
        </div>
      `);
    }

    return `
      <div class="q-visual-wrapper q-visual-cute-counters">
        <div class="cute-counters-grid" style="grid-template-columns: repeat(${Math.min(count, maxPerRow)}, 1fr)">
          ${items.join('')}
        </div>
      </div>
    `;
  },

  // 15. Primary 1 Number Bonds (Whole & Parts)
  renderNumberBond(whole = 5, part1 = 3, part2 = 2, missing = 'part2') {
    return `
      <div class="q-visual-wrapper q-visual-number-bond">
        <svg viewBox="0 0 240 180" width="220" height="160" class="q-visual-svg">
          <!-- Connection lines -->
          <line x1="120" y1="50" x2="60" y2="135" stroke="#6366F1" stroke-width="4" stroke-linecap="round"/>
          <line x1="120" y1="50" x2="180" y2="135" stroke="#6366F1" stroke-width="4" stroke-linecap="round"/>

          <!-- Whole Circle (Top) -->
          <circle cx="120" cy="50" r="32" fill="#4F46E5" stroke="#312E81" stroke-width="3"/>
          <text x="120" y="58" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">
            ${missing === 'whole' ? '?' : whole}
          </text>
          <text x="120" y="24" font-size="11" font-weight="700" fill="#4F46E5" text-anchor="middle">Whole (الكل)</text>

          <!-- Part 1 Circle (Bottom Left) -->
          <circle cx="60" cy="135" r="28" fill="#10B981" stroke="#065F46" stroke-width="3"/>
          <text x="60" y="143" font-size="20" font-weight="800" fill="#FFFFFF" text-anchor="middle">
            ${missing === 'part1' ? '?' : part1}
          </text>
          <text x="60" y="174" font-size="10" font-weight="700" fill="#059669" text-anchor="middle">Part (جزء)</text>

          <!-- Part 2 Circle (Bottom Right) -->
          <circle cx="180" cy="135" r="28" fill="${missing === 'part2' ? '#F59E0B' : '#3B82F6'}" stroke="${missing === 'part2' ? '#B45309' : '#1D4ED8'}" stroke-width="3"/>
          <text x="180" y="143" font-size="20" font-weight="800" fill="#FFFFFF" text-anchor="middle">
            ${missing === 'part2' ? '?' : part2}
          </text>
          <text x="180" y="174" font-size="10" font-weight="700" fill="#D97706" text-anchor="middle">Part (جزء)</text>
        </svg>
      </div>
    `;
  },

  // 16. Primary 1 Spatial Position Visual (Top/Bottom, Front/Behind, Left/Right)
  renderSpatialScene(position = 'top', targetEmoji = '🐱', baseEmoji = '📦') {
    let layoutHtml = '';
    if (position === 'top' || position === 'above') {
      layoutHtml = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <div class="spatial-item target-item" style="font-size:46px;">${targetEmoji}</div>
          <div class="spatial-item base-item" style="font-size:52px;">${baseEmoji}</div>
        </div>
      `;
    } else if (position === 'bottom' || position === 'under' || position === 'below') {
      layoutHtml = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
          <div class="spatial-item base-item" style="font-size:52px;">${baseEmoji}</div>
          <div class="spatial-item target-item" style="font-size:46px;">${targetEmoji}</div>
        </div>
      `;
    } else if (position === 'left') {
      layoutHtml = `
        <div style="display:flex; flex-direction:row; align-items:center; gap:16px;">
          <div class="spatial-item target-item" style="font-size:46px;">${targetEmoji}</div>
          <div class="spatial-item base-item" style="font-size:52px;">${baseEmoji}</div>
        </div>
      `;
    } else { // right
      layoutHtml = `
        <div style="display:flex; flex-direction:row; align-items:center; gap:16px;">
          <div class="spatial-item base-item" style="font-size:52px;">${baseEmoji}</div>
          <div class="spatial-item target-item" style="font-size:46px;">${targetEmoji}</div>
        </div>
      `;
    }

    return `
      <div class="q-visual-wrapper q-visual-spatial">
        <div class="spatial-box-card">
          ${layoutHtml}
        </div>
      </div>
    `;
  },

  // 17. Primary 1 Length Comparison on a Grid
  renderLengthComparison(item1Emoji = '✏️', len1 = 5, item2Emoji = '🖍️', len2 = 3) {
    const maxLen = Math.max(len1, len2, 6);
    const unitW = 28;
    const startX = 40;

    let gridLinesSvg = '';
    for (let u = 0; u <= maxLen; u++) {
      const x = startX + u * unitW;
      gridLinesSvg += `
        <line x1="${x}" y1="20" x2="${x}" y2="105" stroke="#E2E8F0" stroke-width="1.5" stroke-dasharray="2 2"/>
        <text x="${x}" y="122" font-size="11" font-weight="700" fill="#94A3B8" text-anchor="middle">${u}</text>
      `;
    }

    const bar1W = len1 * unitW;
    const bar2W = len2 * unitW;

    return `
      <div class="q-visual-wrapper q-visual-length-comp">
        <svg viewBox="0 0 ${startX + maxLen * unitW + 30} 135" width="280" height="135" class="q-visual-svg">
          ${gridLinesSvg}
          <!-- Baseline -->
          <line x1="${startX}" y1="105" x2="${startX + maxLen * unitW}" y2="105" stroke="#64748B" stroke-width="2"/>
          <line x1="${startX}" y1="15" x2="${startX}" y2="105" stroke="#EF4444" stroke-width="2.5"/>

          <!-- Item 1 Bar -->
          <text x="18" y="47" font-size="22" text-anchor="middle">${item1Emoji}</text>
          <rect x="${startX}" y="32" width="${bar1W}" height="20" rx="6" fill="#3B82F6"/>
          <text x="${startX + bar1W / 2}" y="47" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">${len1} units</text>

          <!-- Item 2 Bar -->
          <text x="18" y="85" font-size="22" text-anchor="middle">${item2Emoji}</text>
          <rect x="${startX}" y="70" width="${bar2W}" height="20" rx="6" fill="#10B981"/>
          <text x="${startX + bar2W / 2}" y="85" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">${len2} units</text>
        </svg>
      </div>
    `;
  }
};

window.QuestionVisuals = QuestionVisuals;


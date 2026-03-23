(function () {
  // ── Konstanten (skaliert 800/680) ─────────────────────────────
  var W=820, H=800, CX=400, CY=400;
  var R=247, R2=376;
  var r=188, r1=66, HUB=59;
  var ECC = R - r;          // 59 px  Bahnradius ISTQB-Zentrum
  var K   = ECC / r;        // ~0.314 Eigenrotations-Verhaeltnis

  var BG = '#f0ece6';

  // SDLC-Farben (normal / aktiv)
  var SC  = ['#b3cdb6', '#c7ddc9'];
  var SCA = ['#8abe95', '#a5d4a8'];

  // ISTQB-Farben fuer Segmente 0,2,3,4,5 (normal / aktiv)
  var TC  = ['#a5bfce', '#bad1dc'];
  var TCA = ['#72a8c0', '#93c6d4'];

  // T2-Bernstein-Farben (normal / aktiv)
  var T2N = '#c8a96a';
  var T2L = '#ddc48a';
  var T2A = '#b8922e';
  var T2AL= '#cca84e';

  var SDLC_NUMS = ['Phase 1','Phase 2','Phase 3','Phase 4','Phase 5','Phase 6'];
  var SDLC_LINES = [
    ['Anforderungen'], ['Design'], ['Implemen-','tierung'],
    ['Integration'],   ['Test'],   ['Betrieb &','Wartung']
  ];
  var SDLC_FLAT = [
    'Anforderungen','Design','Implementierung',
    'Integration','Test','Betrieb & Wartung'
  ];

  var ISTQB_NUMS = ['T 1','T 2','T 3','T 4','T 5','T 6'];
  var ISTQB_LINES = [
    ['Testplanung'],
    ['Test-','\u00FCberwachung','& -steuerung'],
    ['Test-','analyse'],
    ['Test-','design'],
    ['Test-','realisierung'],
    ['Testdurch-','f\u00FChrung &','Testabschluss']
  ];
  var ISTQB_FLAT = [
    'Testplanung',
    'Test\u00FCberwachung & -steuerung',
    'Testanalyse','Testdesign','Testrealisierung',
    'Testdurchf\u00FChrung & Testabschluss'
  ];

  // ── Zustand ───────────────────────────────────────────────────
  var alpha      = 0;
  var playing    = true;
  var speedLevel = 3;
  var showTrace  = false;
  var trace      = [];
  var MAX_TRACE  = 5000;
  var SPEEDS     = [0.0018,0.0035,0.006,0.010,0.015,0.022,0.032,0.046];
  var SPEED_LABELS = ['\u215Bx','\u00BCx','\u00BDx','1x','\u00BDx','2x','3x','5x'];
  SPEED_LABELS     = ['1/8x','1/4x','1/2x','1x','3/2x','2x','3x','5x'];

  var canvas = document.getElementById('c');
  var ctx    = canvas.getContext('2d');
  var infoEl = document.getElementById('info');

  // ── Hilfsgeometrie ────────────────────────────────────────────
  function polar(cx, cy, rad, a) {
    return { x: cx + rad * Math.sin(a), y: cy - rad * Math.cos(a) };
  }
  function ca(a) { return a - Math.PI / 2; }

  function annSector(cx, cy, rIn, rOut, a1, a2) {
    ctx.beginPath();
    ctx.arc(cx, cy, rOut, ca(a1), ca(a2), false);
    ctx.arc(cx, cy, rIn,  ca(a2), ca(a1), true);
    ctx.closePath();
  }

  function multiText(lines, x, y, lineH) {
    var off = -(lines.length - 1) * lineH / 2;
    for (var i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], x, y + off + i * lineH);
    }
  }

  function segIdx(angleRad) {
    var deg = ((angleRad * 180 / Math.PI) % 360 + 360) % 360;
    return Math.floor((deg + 30) / 60) % 6;
  }

  // T2-Farbe abhaengig von Aktivitaet und Zustand
  function istqbFill(i, active) {
    if (i === 1) return active ? T2A  : T2N;
    return active ? TCA[i % 2] : TC[i % 2];
  }

  // ── Zeichenroutinen ───────────────────────────────────────────

  function drawDotGrid() {
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(0,0,0,0.022)';
    for (var x = 5; x < W; x += 26) {
      for (var y = 5; y < H; y += 26) {
        ctx.beginPath(); ctx.arc(x, y, 1, 0, Math.PI*2); ctx.fill();
      }
    }
  }

  function drawSDLC(actSeg) {
    var seg = Math.PI / 3;
    for (var i = 0; i < 6; i++) {
      var a1 = -Math.PI/6 + i * seg, a2 = a1 + seg;
      var active = (i === actSeg);
      annSector(CX, CY, R, R2, a1, a2);
      ctx.fillStyle = active ? SCA[i%2] : SC[i%2];
      if (active) { ctx.shadowColor = SCA[i%2]; ctx.shadowBlur = 14; }
      ctx.fill(); ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.94)'; ctx.lineWidth = 1.8; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(CX, CY, R-0.5, 0, Math.PI*2);
    ctx.fillStyle = BG; ctx.fill();
  }

  function drawSDLCLabels(actSeg) {
    var seg = Math.PI/3, rL = 312;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '20px Georgia, serif';
    for (var i = 0; i < 6; i++) {
      var p = polar(CX, CY, rL, i * seg), active = (i === actSeg);
      var lines = SDLC_LINES[i];
      ctx.fillStyle = active ? '#1a4a30' : '#4e6060';
      ctx.fillText(SDLC_NUMS[i], p.x, p.y - 20 - (lines.length-1)*11);
      ctx.fillStyle = active ? '#112b1a' : '#283535';
      multiText(lines, p.x, p.y+1, 22);
    }
  }

  function drawISTQB(icx, icy, wRot, actSeg) {
    var seg = Math.PI / 3;
    for (var i = 0; i < 6; i++) {
      var a1 = wRot - Math.PI/6 + i*seg, a2 = a1 + seg;
      var active = (i === actSeg);
      annSector(icx, icy, r1, r, a1, a2);
      ctx.fillStyle = istqbFill(i, active);
      if (active) {
        ctx.shadowColor = istqbFill(i, true); ctx.shadowBlur = 14;
      }
      ctx.fill(); ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.94)'; ctx.lineWidth = 1.8; ctx.stroke();
    }
    // Innenloch
    ctx.beginPath(); ctx.arc(icx, icy, r1-0.5, 0, Math.PI*2);
    ctx.fillStyle = BG; ctx.fill();
    // Hub
    ctx.beginPath(); ctx.arc(icx, icy, HUB, 0, Math.PI*2);
    ctx.fillStyle = '#dce8ee'; ctx.fill();
    // T2-Querschnittsring in Bernstein
    ctx.save();
    ctx.beginPath(); ctx.arc(icx, icy, r+9, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(200,169,106,0.50)';
    ctx.lineWidth = 1.8; ctx.setLineDash([5, 4]); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();
  }

  function drawISTQBLabels(icx, icy, wRot, actSeg) {
    var seg = Math.PI/3, rL = 129;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '20px Georgia, serif';
    for (var i = 0; i < 6; i++) {
      var p = polar(icx, icy, rL, wRot + i*seg);
      var active = (i === actSeg), isT2 = (i === 1);
      var lines = ISTQB_LINES[i];
      ctx.fillStyle = active ? (isT2 ? '#5a3a00' : '#0e2e42') : (isT2 ? '#7a5518' : '#4e6060');
      ctx.fillText(ISTQB_NUMS[i], p.x, p.y - 20 - (lines.length-1)*11);
      ctx.fillStyle = active ? (isT2 ? '#3e2400' : '#071e2e') : (isT2 ? '#7a5518' : '#283535');
      multiText(lines, p.x, p.y+1, 22);
    }
  }

  function drawMechanics(icx, icy) {
    // Bahnkreis
    ctx.save();
    ctx.beginPath(); ctx.arc(CX, CY, ECC, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(78,96,96,0.16)'; ctx.lineWidth = 1;
    ctx.setLineDash([4,3]); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
    // Speiche
    var cp = polar(CX, CY, R, alpha);
    ctx.save();
    ctx.beginPath(); ctx.moveTo(icx, icy); ctx.lineTo(cp.x, cp.y);
    ctx.strokeStyle = 'rgba(78,96,96,0.20)'; ctx.lineWidth = 1;
    ctx.setLineDash([3,3]); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
    // Kontaktpunkt
    ctx.beginPath(); ctx.arc(cp.x, cp.y, 6.5, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(78,96,96,0.18)'; ctx.fill();
    ctx.beginPath(); ctx.arc(cp.x, cp.y, 4, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(78,96,96,0.62)'; ctx.fill();
  }

  function drawTrace() {
    if (trace.length < 2) return;
    var n = trace.length;
    ctx.save(); ctx.lineWidth = 1; ctx.lineCap = 'round';
    for (var i = 1; i < n; i++) {
      var t = i / n;
      ctx.strokeStyle = 'rgba(100,160,180,' + (0.05 + t*0.30) + ')';
      ctx.beginPath();
      ctx.moveTo(trace[i-1].x, trace[i-1].y);
      ctx.lineTo(trace[i].x,   trace[i].y);
      ctx.stroke();
    }
    ctx.restore();
  }

  function collectTrace(icx, icy, wRot) {
    var p = polar(icx, icy, r, wRot);
    trace.push({ x: p.x, y: p.y });
    if (trace.length > MAX_TRACE) trace.shift();
  }

  function updateInfo(aS, aT) {
    var isT2  = (aT === 1);
    var tCls  = isT2 ? 't t2c' : 't';
    infoEl.innerHTML =
      '<span class="' + tCls + '">' + ISTQB_NUMS[aT] + ' &middot; ' + ISTQB_FLAT[aT] + '</span>' +
      '<span class="arr">&harr;</span>' +
      '<span class="s">Phase ' + (aS+1) + ' &middot; ' + SDLC_FLAT[aS] + '</span>';
    if (isT2) {
      infoEl.classList.add('t2-active');
    } else {
      infoEl.classList.remove('t2-active');
    }
  }

  function draw() {
    var wRot     = K * alpha;
    var icx      = CX + ECC * Math.sin(alpha);
    var icy      = CY - ECC * Math.cos(alpha);
    var actSdlc  = segIdx(alpha);
    var actIstqb = segIdx(alpha - wRot);
    if (showTrace) collectTrace(icx, icy, wRot);
    drawDotGrid();
    drawSDLC(actSdlc);
    drawMechanics(icx, icy);
    drawISTQB(icx, icy, wRot, actIstqb);
    drawSDLCLabels(actSdlc);
    drawISTQBLabels(icx, icy, wRot, actIstqb);
    if (showTrace) drawTrace();
    updateInfo(actSdlc, actIstqb);
  }

  function loop() {
    if (playing) alpha += SPEEDS[speedLevel - 1];
    draw();
    requestAnimationFrame(loop);
  }

  // ── Steuerung ─────────────────────────────────────────────────
  document.getElementById('btn-play').addEventListener('click', function () {
    playing = !playing;
    this.textContent = playing ? '\u23F8\uFE0E Pause' : '\u25B6\uFE0E Abspielen';
  });
  document.getElementById('btn-reset').addEventListener('click', function () {
    alpha = 0; trace = []; draw();
  });
  document.getElementById('speed').addEventListener('input', function () {
    speedLevel = parseInt(this.value, 10);
    document.getElementById('speed-label').textContent = SPEED_LABELS[speedLevel-1] || '';
  });
  document.getElementById('trace').addEventListener('change', function () {
    showTrace = this.checked;
    if (!showTrace) trace = [];
  });

  document.getElementById('speed-label').textContent = SPEED_LABELS[speedLevel-1];
  requestAnimationFrame(loop);
})();

(function () {
  // ── Konstanten (skaliert 800/680) ─────────────────────────────
  var W=820, H=800, CX=400, CY=400;
  var R=247, R2=376;
  var r=188, r1=66, HUB=59;
  var ECC = R - r;   // 59
  var K   = ECC / r; // ~0.314

  // Startposition: alpha = 0
  // ISTQB-Zentrum: (400, 341), wRot = 0
  // Kontaktpunkt:  (400, 153) = 12 Uhr
  // Aktiv: SDLC-Seg 0 (Anforderungen), ISTQB-Seg 0 (Testplanung)
  var ALPHA = 0;

  var BG  = '#f0ece6';
  var SC  = ['#b3cdb6', '#c7ddc9'];
  var SCA = ['#8abe95', '#a5d4a8'];
  var TC  = ['#a5bfce', '#bad1dc'];
  var TCA = ['#72a8c0', '#93c6d4'];
  var T2N = '#c8a96a';
  var T2A = '#b8922e';

  var SDLC_NUMS  = ['Phase 1','Phase 2','Phase 3','Phase 4','Phase 5','Phase 6'];
  var SDLC_LINES = [
    ['Anforderungen'],['Design'],['Implemen-','tierung'],
    ['Integration'],  ['Test'],  ['Betrieb &','Wartung']
  ];

  var ISTQB_NUMS  = ['T 1','T 2','T 3','T 4','T 5','T 6'];
  var ISTQB_LINES = [
    ['Testplanung'],
    ['Test-','\u00FCberwachung','& -steuerung'],
    ['Test-','analyse'],
    ['Test-','design'],
    ['Test-','realisierung'],
    ['Testdurch-','f\u00FChrung &','Testabschluss']
  ];

  var canvas = document.getElementById('c');
  var ctx    = canvas.getContext('2d');

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

  function istqbFill(i, active) {
    if (i === 1) return active ? T2A : T2N;
    return active ? TCA[i % 2] : TC[i % 2];
  }

  // ── Zeichenroutinen ───────────────────────────────────────────

  function drawDotGrid() {
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(0,0,0,0.022)';
    for (var x = 5; x < W; x += 26)
      for (var y = 5; y < H; y += 26) {
        ctx.beginPath(); ctx.arc(x, y, 1, 0, Math.PI*2); ctx.fill();
      }
  }

  function drawSDLC(actSeg) {
    var seg = Math.PI / 3;
    for (var i = 0; i < 6; i++) {
      var a1 = -Math.PI/6 + i*seg, a2 = a1 + seg, active = (i === actSeg);
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
      var p = polar(CX, CY, rL, i*seg), active = (i === actSeg), lines = SDLC_LINES[i];
      ctx.fillStyle = active ? '#1a4a30' : '#4e6060';
      ctx.fillText(SDLC_NUMS[i], p.x, p.y - 20 - (lines.length-1)*11);
      ctx.fillStyle = active ? '#112b1a' : '#283535';
      multiText(lines, p.x, p.y+1, 22);
    }
  }

  function drawISTQB(icx, icy, wRot, actSeg) {
    var seg = Math.PI / 3;
    for (var i = 0; i < 6; i++) {
      var a1 = wRot - Math.PI/6 + i*seg, a2 = a1 + seg, active = (i === actSeg);
      annSector(icx, icy, r1, r, a1, a2);
      ctx.fillStyle = istqbFill(i, active);
      if (active) { ctx.shadowColor = istqbFill(i, true); ctx.shadowBlur = 14; }
      ctx.fill(); ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.94)'; ctx.lineWidth = 1.8; ctx.stroke();
    }
    ctx.beginPath(); ctx.arc(icx, icy, r1-0.5, 0, Math.PI*2);
    ctx.fillStyle = BG; ctx.fill();
    ctx.beginPath(); ctx.arc(icx, icy, HUB, 0, Math.PI*2);
    ctx.fillStyle = '#dce8ee'; ctx.fill();
    // T2-Querschnittsring
    ctx.save();
    ctx.beginPath(); ctx.arc(icx, icy, r+9, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(200,169,106,0.50)';
    ctx.lineWidth = 1.8; ctx.setLineDash([5,4]); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();
  }

  function drawISTQBLabels(icx, icy, wRot, actSeg) {
    var seg = Math.PI/3, rL = 129;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '20px Georgia, serif';
    for (var i = 0; i < 6; i++) {
      var p = polar(icx, icy, rL, wRot + i*seg);
      var active = (i === actSeg), isT2 = (i === 1), lines = ISTQB_LINES[i];
      ctx.fillStyle = active ? (isT2 ? '#5a3a00' : '#0e2e42') : (isT2 ? '#7a5518' : '#4e6060');
      ctx.fillText(ISTQB_NUMS[i], p.x, p.y - 20 - (lines.length-1)*11);
      ctx.fillStyle = active ? (isT2 ? '#3e2400' : '#071e2e') : (isT2 ? '#7a5518' : '#283535');
      multiText(lines, p.x, p.y+1, 22);
    }
  }

  function drawMechanics(icx, icy) {
    // Bahnkreis des ISTQB-Zentrums
    ctx.save();
    ctx.beginPath(); ctx.arc(CX, CY, ECC, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(78,96,96,0.16)'; ctx.lineWidth = 1;
    ctx.setLineDash([4,3]); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
    // Speiche
    var cp = polar(CX, CY, R, ALPHA);
    ctx.save();
    ctx.beginPath(); ctx.moveTo(icx, icy); ctx.lineTo(cp.x, cp.y);
    ctx.strokeStyle = 'rgba(78,96,96,0.20)'; ctx.lineWidth = 1;
    ctx.setLineDash([3,3]); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
    // Kontaktpunkt
    ctx.beginPath(); ctx.arc(cp.x, cp.y, 6.5, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(78,96,96,0.18)'; ctx.fill();
    ctx.beginPath(); ctx.arc(cp.x, cp.y, 4, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(78,96,96,0.62)'; ctx.fill();
    // Pfeil von Beschriftung zum Kontaktpunkt
    var labelX = 818, labelY = 24;
    var ax1 = 520, ay1 = 50;
    var dx = cp.x - ax1, dy = cp.y - ay1;
    var len = Math.sqrt(dx*dx + dy*dy);
    var ux = dx/len, uy = dy/len;
    var arrLen = 8, arrW = 4;
    var stopDist = arrLen + 3;
    var cpBefore = cp.x - ux * stopDist;
    var cpBeforeY = cp.y - uy * stopDist;
    ctx.save();
    ctx.strokeStyle = 'rgba(78,96,96,0.45)';
    ctx.lineWidth = 0.8;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(ax1, ay1);
    ctx.lineTo(cpBefore, cpBeforeY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(cp.x, cp.y);
    ctx.lineTo(cp.x - ux*arrLen + uy*arrW, cp.y - uy*arrLen - ux*arrW);
    ctx.lineTo(cp.x - ux*arrLen - uy*arrW, cp.y - uy*arrLen + ux*arrW);
    ctx.closePath();
    ctx.fillStyle = 'rgba(78,96,96,0.45)';
    ctx.fill();
    ctx.restore();
    // Beschriftung Kontaktpunkt (außerhalb des äußeren Kreises, zwischen Phase 2 und rechter Textbox)
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    ctx.font = '20px Georgia, serif';
    ctx.fillStyle = 'rgba(78,96,96,0.48)';
    ctx.fillText('Kontaktpunkt', labelX, labelY - 12);
    ctx.fillStyle = 'rgba(78,96,96,0.34)';
    ctx.fillText('Anforderungen \u2194 Testplanung', labelX, labelY + 12);
  }

  // ── Einmalige Darstellung bei alpha = 0 ───────────────────────
  var wRot     = K * ALPHA;                       // = 0
  var icx      = CX + ECC * Math.sin(ALPHA);      // = 340
  var icy      = CY - ECC * Math.cos(ALPHA);      // = 290
  var actSdlc  = segIdx(ALPHA);                   // = 0 (Anforderungen)
  var actIstqb = segIdx(ALPHA - wRot);            // = 0 (Testplanung)

  drawDotGrid();
  drawSDLC(actSdlc);
  drawMechanics(icx, icy);
  drawISTQB(icx, icy, wRot, actIstqb);
  drawSDLCLabels(actSdlc);
  drawISTQBLabels(icx, icy, wRot, actIstqb);

})();

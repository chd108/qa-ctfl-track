(function () {
  // ── Konstanten ────────────────────────────────────────────────
  var W=820, H=800, CX=400, CY=400;
  var R=247, R2=376;
  var r=188, r1=66, HUB=59;
  var ECC = R - r;   // 59
  var K   = ECC / r; // ~0.314
  var ALPHA = 0;

  var BG  = '#f0ece6';
  var SC  = ['#b3cdb6', '#c7ddc9'];
  var SCA = ['#8abe95', '#a5d4a8'];
  var TC  = ['#a5bfce', '#bad1dc'];
  var TCA = ['#72a8c0', '#93c6d4'];
  var T2N = '#c8a96a';
  var T2A = '#b8922e';

  var FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';
  /** Einheitliche Schriftgröße für SDLC-Bögen und ISTQB-Ring-Labels (px) */
  var LABEL_FONT_PX = 17;

  // ── Äußerer Ring: Gebogene Beschriftung ───────────────────────
  // rOuter = Englisch (außen), rInner = Deutsch ISO 12207 (innen)
  // null = kein innerer Bogen (Sprachen identisch oder kein DE-Standard)
  var SDLC_OUTER = [
    'Requirements',
    'Design',
    'Implementation',
    'Integration',
    'Testing',
    'Operations \u0026 Maintenance'
  ];
  var SDLC_INNER = [
    'Anforderungsanalyse',
    'Systementwurf',
    'Implementierung',
    null,
    'Test',
    'Betrieb und Wartung'
  ];
  var N_SDLC = SDLC_OUTER.length;

  // ── Innerer Kreis: Aktivitäten (CTFL v4.0.2), Anzahl aus Daten ─
  var ISTQB_LINES = [
    ['Testplanung'],
    ['Test-','\u00FCberwachung','& -steuerung'],
    ['Test-','analyse'],
    ['Test-','entwurf'],
    ['Test-','realisierung'],
    ['Testdurch-','f\u00FChrung'],
    ['Test-','abschluss']
  ];
  var N_ISTQB = ISTQB_LINES.length;
  var ISTQB_NUMS = [];
  for (var ni = 0; ni < N_ISTQB; ni++) {
    ISTQB_NUMS.push(String(ni + 1));
  }

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

  /**
   * Zeichnet einen String gebogen entlang eines Kreisbogens.
   *
   * centerAngle : Mittelpunktwinkel des Segments (0 = 12 Uhr, im UZS positiv)
   * cw = true   → Uhrzeigersinn (obere Hälfte): Köpfe nach außen, liest sich links→rechts
   * cw = false  → Gegenuhrzeigersinn (untere Hälfte): Köpfe nach innen, von unten lesbar
   */
  function drawArcString(text, cx, cy, radius, centerAngle, cw) {
    var widths = [], totalWidth = 0;
    var spacing = 0.8; // leichtes Letter-Spacing für Bögen
    for (var i = 0; i < text.length; i++) {
      var w = ctx.measureText(text[i]).width + spacing;
      widths.push(w);
      totalWidth += w;
    }
    var totalSpan = totalWidth / radius;

    ctx.save();
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';

    if (cw) {
      // Uhrzeigersinn: linkes Zeichen zuerst, Winkel steigt
      var a = centerAngle - totalSpan / 2;
      for (var i = 0; i < text.length; i++) {
        var charA = a + widths[i] / (2 * radius);
        ctx.save();
        ctx.translate(cx + radius * Math.sin(charA), cy - radius * Math.cos(charA));
        ctx.rotate(charA);
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
        a += widths[i] / radius;
      }
    } else {
      // Gegenuhrzeigersinn: Zeichen werden von rechts nach links platziert
      // sodass der Text von außen (unten) links→rechts lesbar ist
      var a = centerAngle + totalSpan / 2;
      for (var i = 0; i < text.length; i++) {
        var charA = a - widths[i] / (2 * radius);
        ctx.save();
        ctx.translate(cx + radius * Math.sin(charA), cy - radius * Math.cos(charA));
        ctx.rotate(charA + Math.PI);
        ctx.fillText(text[i], 0, 0);
        ctx.restore();
        a -= widths[i] / radius;
      }
    }
    ctx.restore();
  }

  function segIdxSDLC(angleRad) {
    var segDeg = 360 / N_SDLC;
    var deg    = ((angleRad * 180 / Math.PI) % 360 + 360) % 360;
    return Math.floor((deg + segDeg / 2) / segDeg) % N_SDLC;
  }

  function segIdxISTQB(angleRad) {
    var segDeg = 360 / N_ISTQB;
    var deg    = ((angleRad * 180 / Math.PI) % 360 + 360) % 360;
    return Math.floor((deg + segDeg / 2) / segDeg) % N_ISTQB;
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
    var seg = 2 * Math.PI / N_SDLC;
    for (var i = 0; i < N_SDLC; i++) {
      var a1 = -seg / 2 + i * seg, a2 = a1 + seg, active = (i === actSeg);
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
    var seg    = 2 * Math.PI / N_SDLC;
    var rOuter = 326;  // Englisch  — nach innen (+ Phase-Bogen gleich weit)
    var rInner = 282;  // Deutsch   — nahe innerem Rand
    var rPhase = rOuter + 24;  // „Phase X:“ mit Abstand zum englischen Bogen
    var integAccent = '#8a6a2e';  // Phase 4 (Integration) — Akzentfarbe

    for (var i = 0; i < N_SDLC; i++) {
      var centerAngle = i * seg;
      var active = (i === actSeg);

      // Obere Hälfte (|norm| ≤ 90°) → CW, untere Hälfte → CCW
      var norm = centerAngle > Math.PI ? centerAngle - 2 * Math.PI : centerAngle;
      var cw   = Math.abs(norm) <= Math.PI / 2;

      // CCW: Radien tauschen, damit „Phase X:“ radial weiter außen liegt als Englisch
      var rPh = cw ? rPhase : rOuter;
      var rEn = cw ? rOuter : rPhase;

      // Phase-Zeile und englischer Begriff: gleiche Farblogik (Integration = Akzent)
      var phaseEnFill = (i === 3) ? integAccent : (active ? '#1a4a30' : '#4e6060');
      ctx.font = LABEL_FONT_PX + 'px ' + FONT;
      ctx.fillStyle = phaseEnFill;
      drawArcString('Phase ' + (i + 1) + ':', CX, CY, rPh, centerAngle, cw);
      drawArcString(SDLC_OUTER[i], CX, CY, rEn, centerAngle, cw);

      // Deutscher Begriff (innerer Bogen, fett) — nur wenn vorhanden
      if (SDLC_INNER[i]) {
        ctx.font = 'bold ' + LABEL_FONT_PX + 'px ' + FONT;
        ctx.fillStyle = active ? '#112b1a' : '#283535';
        drawArcString(SDLC_INNER[i], CX, CY, rInner, centerAngle, cw);
      }
    }
  }

  function drawISTQB(icx, icy, wRot, actSeg) {
    var seg = 2 * Math.PI / N_ISTQB;
    for (var i = 0; i < N_ISTQB; i++) {
      var a1 = wRot - Math.PI / N_ISTQB + i * seg, a2 = a1 + seg, active = (i === actSeg);
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
    // T2-Querschnittsring (gestrichelt)
    ctx.save();
    ctx.beginPath(); ctx.arc(icx, icy, r+9, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(200,169,106,0.50)';
    ctx.lineWidth = 1.8; ctx.setLineDash([5,4]); ctx.stroke();
    ctx.setLineDash([]); ctx.restore();
  }

  function drawISTQBLabels(icx, icy, wRot, actSeg) {
    var seg = 2 * Math.PI / N_ISTQB, rL = 129, lineH = 15;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    for (var i = 0; i < N_ISTQB; i++) {
      var p      = polar(icx, icy, rL, wRot + i * seg);
      var active = (i === actSeg), isT2 = (i === 1), lines = ISTQB_LINES[i];
      ctx.font      = LABEL_FONT_PX + 'px ' + FONT;
      ctx.fillStyle = active ? (isT2 ? '#3e2400' : '#071e2e') : (isT2 ? '#7a5518' : '#283535');
      var numY = p.y - LABEL_FONT_PX - (lines.length - 1) * 6.5;
      ctx.fillText(ISTQB_NUMS[i], p.x, numY);
      multiText(lines, p.x, p.y + 1, lineH);
    }
  }

  function drawMechanics(icx, icy) {
    ctx.save();
    ctx.beginPath(); ctx.arc(CX, CY, ECC, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(78,96,96,0.16)'; ctx.lineWidth = 1;
    ctx.setLineDash([4,3]); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
    var cp = polar(CX, CY, R, ALPHA);
    ctx.save();
    ctx.beginPath(); ctx.moveTo(icx, icy); ctx.lineTo(cp.x, cp.y);
    ctx.strokeStyle = 'rgba(78,96,96,0.20)'; ctx.lineWidth = 1;
    ctx.setLineDash([3,3]); ctx.stroke(); ctx.setLineDash([]); ctx.restore();
    ctx.beginPath(); ctx.arc(cp.x, cp.y, 6.5, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(78,96,96,0.18)'; ctx.fill();
    ctx.beginPath(); ctx.arc(cp.x, cp.y, 4, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(78,96,96,0.62)'; ctx.fill();
    var labelX = 818, labelY = 24;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.font = '14px ' + FONT;
    var labelPad = 8;
    var maxLabelW = Math.max(
      ctx.measureText('Kontaktpunkt - Start').width,
      ctx.measureText('Anforderungsanalyse \u2194 Testplanung').width
    );
    var ax1 = labelX - maxLabelW - labelPad;
    var ay1 = labelY;
    var dx = cp.x - ax1, dy = cp.y - ay1;
    var len = Math.sqrt(dx*dx + dy*dy);
    var ux = dx/len, uy = dy/len;
    var arrLen = 8, arrW = 4, stopDist = arrLen + 3;
    ctx.save();
    ctx.strokeStyle = 'rgba(78,96,96,0.45)'; ctx.lineWidth = 0.8;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(ax1, ay1);
    ctx.lineTo(cp.x - ux * stopDist, cp.y - uy * stopDist);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(cp.x, cp.y);
    ctx.lineTo(cp.x - ux*arrLen + uy*arrW, cp.y - uy*arrLen - ux*arrW);
    ctx.lineTo(cp.x - ux*arrLen - uy*arrW, cp.y - uy*arrLen + ux*arrW);
    ctx.closePath();
    ctx.fillStyle = 'rgba(78,96,96,0.45)'; ctx.fill();
    ctx.restore();
    ctx.fillStyle = 'rgba(78,96,96,0.45)';
    var labelLeft = labelX - maxLabelW;
    ctx.textAlign = 'left';
    ctx.fillText('Kontaktpunkt - Start', labelLeft, labelY - 12);
    ctx.textAlign = 'right';
    ctx.fillText('Anforderungsanalyse \u2194 Testplanung', labelX, labelY + 12);
  }

  // ── Einmalige Darstellung bei alpha = 0 ───────────────────────
  var wRot     = K * ALPHA;
  var icx      = CX + ECC * Math.sin(ALPHA);
  var icy      = CY - ECC * Math.cos(ALPHA);
  var actSdlc  = segIdxSDLC(ALPHA);
  var actIstqb = segIdxISTQB(ALPHA - wRot);

  drawDotGrid();
  drawSDLC(actSdlc);
  drawMechanics(icx, icy);
  drawISTQB(icx, icy, wRot, actIstqb);
  drawSDLCLabels(actSdlc);
  drawISTQBLabels(icx, icy, wRot, actIstqb);

})();

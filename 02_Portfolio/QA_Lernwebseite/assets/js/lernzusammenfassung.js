/*
 * lernzusammenfassung.js
 * Kapitel-Akkordeon für 07-lernzusammenfassung.html
 * Voraussetzung: DOM mit .chapter-card und
 * details.lz-acc Elementen geladen.
 */
(function () {
  function openAncestorsAndScroll(el, stopRoot) {
    if (!el || !stopRoot) return;
    var n = el;
    while (n && n !== stopRoot) {
      if (n.tagName === 'DETAILS') n.open = true;
      n = n.parentElement;
    }
    requestAnimationFrame(function () {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  function onChapterHash() {
    var raw = (location.hash || '').slice(1);
    if (!raw) return;
    var id;
    try { id = decodeURIComponent(raw); } catch (e) { return; }
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    var card = el.closest('.chapter-card');
    if (!card) {
      requestAnimationFrame(function () {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    var accRoot = el.closest('.lz-acc-root');
    var stopRoot = (accRoot && card.contains(accRoot))
      ? accRoot : card;
    openAncestorsAndScroll(el, stopRoot);
  }
  window.addEventListener('hashchange', onChapterHash);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onChapterHash);
  } else {
    onChapterHash();
  }
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('.chapter-card details')
      .forEach(function (d) {
        d.dataset.lzPrintOpen = d.open ? '1' : '0';
        d.open = true;
      });
  });
  window.addEventListener('afterprint', function () {
    document.querySelectorAll('.chapter-card details')
      .forEach(function (d) {
        if (d.dataset.lzPrintOpen === '0') d.open = false;
        delete d.dataset.lzPrintOpen;
      });
  });
})();

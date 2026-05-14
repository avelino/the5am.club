(function () {
  'use strict';

  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function readState() {
    try {
      var v = localStorage.getItem('theme');
      return (v === 'light' || v === 'dark') ? v : 'auto';
    } catch (e) {
      return 'auto';
    }
  }

  function applyState(state) {
    root.setAttribute('data-theme', state);
    if (btn) {
      btn.setAttribute('data-theme-state', state);
      var resolved = state === 'auto' ? (media.matches ? 'dark' : 'light') : state;
      btn.setAttribute('aria-label', 'Theme: ' + state + ' (currently ' + resolved + ')');
    }
    try {
      if (state === 'auto') localStorage.removeItem('theme');
      else localStorage.setItem('theme', state);
    } catch (e) {}
  }

  applyState(readState());

  if (btn) {
    btn.addEventListener('click', function () {
      var cur = btn.getAttribute('data-theme-state') || 'auto';
      var next = cur === 'auto' ? 'light' : cur === 'light' ? 'dark' : 'auto';
      applyState(next);
    });
  }

  if (media.addEventListener) {
    media.addEventListener('change', function () {
      if (readState() === 'auto') applyState('auto');
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length <= 1) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });
})();

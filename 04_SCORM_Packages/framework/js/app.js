/* Medical Informatics SCORM framework — app.js
 * Loads lesson data, renders the Frozen Header, Navigation and Progress components
 * and each screen's content blocks.
 * Content lives in data/*.json; this file holds no lesson content.
 * FROZEN COMPONENT: change only with approval (SCORM_Architecture_FROZEN.md).
 */
(function (global) {
  'use strict';

  var content = null;
  var questions = {};
  var audioManifest = {};
  var screens = [];
  var index = 0;

  function $(id) { return document.getElementById(id); }
  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'className') { node.className = attrs[k]; } else { node.setAttribute(k, attrs[k]); }
    });
    if (html !== undefined) { node.innerHTML = html; }
    return node;
  }
  function text(tag, attrs, t) { var n = el(tag, attrs); n.textContent = t; return n; }
  function announce(msg) { var live = $('mi-live'); live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 50); }

  function loadJSON(path) {
    return global.fetch(path, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) { throw new Error(path + ' ' + r.status); }
      return r.json();
    });
  }

  /* ---------- Frozen Header Component: renderHeader(weekNumber, weeklyTitle) ---------- */
  function renderHeader(weekNumber, weeklyTitle) {
    var h = $('mi-header');
    h.textContent = '';
    h.appendChild(text('p', { className: 'mi-header__module' }, 'Medical Informatics'));
    var title = el('p', { className: 'mi-header__title' });
    title.appendChild(text('span', { className: 'mi-header__week' }, 'Week ' + weekNumber));
    title.appendChild(text('span', { className: 'mi-header__sep' }, ' · '));
    title.appendChild(text('span', { className: 'mi-header__name' }, weeklyTitle));
    h.appendChild(title);
    document.title = 'Week ' + weekNumber + ' · ' + weeklyTitle + ' — Medical Informatics';
  }

  /* ---------- Progress Component ---------- */
  function renderProgress() {
    var p = $('mi-progress');
    var s = MIProgress.summary();
    var pct = Math.round((s.visited / s.total) * 100);
    p.innerHTML = '';
    var label = text('p', { className: 'mi-progress__label' },
      'Screen ' + (index + 1) + ' of ' + screens.length + ' · ' + s.visited + ' viewed' + (s.complete ? ' · Lesson complete' : ''));
    var bar = el('div', { className: 'mi-progress__bar', role: 'progressbar', 'aria-label': 'Screens viewed',
      'aria-valuemin': '0', 'aria-valuemax': String(s.total), 'aria-valuenow': String(s.visited) });
    var fill = el('div', { className: 'mi-progress__fill' });
    fill.style.width = pct + '%';
    bar.appendChild(fill);
    p.appendChild(label);
    p.appendChild(bar);
  }

  /* ---------- Navigation Component (contents menu + back/next) ---------- */
  function renderMenu() {
    var m = $('mi-menu');
    m.textContent = '';
    m.appendChild(text('h2', { className: 'mi-menu__title' }, 'Lesson contents'));
    content.sections.forEach(function (sec, si) {
      m.appendChild(text('h3', { className: 'mi-menu__section' }, 'Part ' + (si + 1) + ' · ' + sec.title + ' (' + sec.minutes + ' min)'));
      var ul = el('ul', { className: 'mi-menu__list' });
      screens.forEach(function (scr, i) {
        if (scr.section !== sec.id) { return; }
        var li = el('li');
        var b = el('button', { type: 'button', className: 'mi-menu__link' + (i === index ? ' is-current' : '') });
        if (i === index) { b.setAttribute('aria-current', 'page'); }
        var seen = MIProgress.isVisited(scr.id);
        b.appendChild(text('span', { className: 'mi-menu__tick', 'aria-hidden': 'true' }, seen ? '✓' : '○'));
        b.appendChild(text('span', {}, scr.title));
        b.appendChild(text('span', { className: 'mi-sr-only' }, seen ? ' (viewed)' : ' (not yet viewed)'));
        b.addEventListener('click', function () { toggleMenu(false); go(i); });
        li.appendChild(b);
        ul.appendChild(li);
      });
      m.appendChild(ul);
    });
    var s = MIProgress.summary();
    var req = el('div', { className: 'mi-menu__req' });
    req.appendChild(text('h3', { className: 'mi-menu__section' }, 'To complete this lesson'));
    var ul2 = el('ul', { className: 'mi-menu__list' });
    ul2.appendChild(text('li', {}, (s.visited >= s.total ? '✓ ' : '○ ') + 'View every screen (' + s.visited + ' of ' + s.total + ')'));
    s.required.forEach(function (r) { ul2.appendChild(text('li', {}, (r.done ? '✓ ' : '○ ') + r.label)); });
    req.appendChild(ul2);
    req.appendChild(text('p', { className: 'mi-hint' }, 'Listening to narration is optional.'));
    m.appendChild(req);
  }

  function toggleMenu(force) {
    var m = $('mi-menu');
    var btn = $('mi-menu-btn');
    var open = force !== undefined ? force : m.hasAttribute('hidden');
    if (open) {
      renderMenu();
      m.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
      var first = m.querySelector('.is-current') || m.querySelector('button');
      if (first) { first.focus(); }
    } else {
      m.setAttribute('hidden', 'hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  function renderNav() {
    var n = $('mi-nav');
    n.textContent = '';
    var back = text('button', { type: 'button', className: 'mi-btn', id: 'mi-back' }, '← Back');
    var menu = text('button', { type: 'button', className: 'mi-btn mi-btn--quiet', id: 'mi-menu-btn', 'aria-expanded': 'false', 'aria-controls': 'mi-menu' }, 'Contents');
    var next = text('button', { type: 'button', className: 'mi-btn mi-btn--primary', id: 'mi-next' }, 'Next →');
    back.addEventListener('click', function () { go(index - 1); });
    next.addEventListener('click', function () { go(index + 1); });
    menu.addEventListener('click', function () { toggleMenu(); });
    n.appendChild(back); n.appendChild(menu); n.appendChild(next);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('mi-menu').hasAttribute('hidden')) { toggleMenu(false); menu.focus(); }
    });
  }

  function updateNav() {
    $('mi-back').disabled = index === 0;
    var next = $('mi-next');
    next.disabled = index === screens.length - 1;
    next.textContent = index === screens.length - 1 ? 'End of lesson' : 'Next →';
  }

  /* ---------- Content blocks ---------- */
  var blockRenderers = {
    html: function (b, parent) { parent.appendChild(el('div', { className: 'mi-block' + (b.className ? ' ' + b.className : '') }, b.html)); },
    callout: function (b, parent) {
      var c = el('aside', { className: 'mi-callout mi-callout--' + (b.variant || 'info') });
      if (b.title) { c.appendChild(text('p', { className: 'mi-callout__title' }, b.title)); }
      c.appendChild(el('div', {}, b.html));
      parent.appendChild(c);
    },
    table: function (b, parent) {
      var wrap = el('div', { className: 'mi-table-wrap', tabindex: '0', role: 'region', 'aria-label': b.caption });
      var t = el('table', { className: 'mi-table' });
      t.appendChild(text('caption', {}, b.caption));
      var thead = el('thead'); var tr = el('tr');
      b.head.forEach(function (h) { tr.appendChild(el('th', { scope: 'col' }, h)); });
      thead.appendChild(tr); t.appendChild(thead);
      var tbody = el('tbody');
      b.rows.forEach(function (r) {
        var row = el('tr');
        r.forEach(function (cell, ci) { row.appendChild(el(ci === 0 && b.rowHeaders ? 'th' : 'td', ci === 0 && b.rowHeaders ? { scope: 'row' } : {}, cell)); });
        tbody.appendChild(row);
      });
      t.appendChild(tbody);
      wrap.appendChild(t);
      parent.appendChild(wrap);
    },
    sources: function (b, parent) {
      var s = el('div', { className: 'mi-sources' });
      s.appendChild(text('p', { className: 'mi-sources__title' }, b.title || 'Sources'));
      var ul = el('ul');
      b.items.forEach(function (it) {
        var li = el('li');
        li.appendChild(document.createTextNode(it.text + ' '));
        if (it.url) {
          var a = text('a', { href: it.url, target: '_blank', rel: 'noopener' }, it.linkText || 'Open source');
          a.appendChild(text('span', { className: 'mi-sr-only' }, ' (opens in a new tab)'));
          li.appendChild(a);
        }
        ul.appendChild(li);
      });
      s.appendChild(ul);
      parent.appendChild(s);
    },
    response: function (b, parent) {
      var v = MIProgress.getResponse(b.ref);
      var msg = (v === undefined || v === '') ? b.empty : b.template.replace('{value}', String(v));
      parent.appendChild(el('p', { className: 'mi-callout mi-callout--note' }, msg));
    },
    completion: function (b, parent) {
      var box = el('div', { className: 'mi-callout mi-completion', 'aria-live': 'polite' });
      function draw() {
        var s = MIProgress.summary();
        box.innerHTML = '';
        box.appendChild(text('p', { className: 'mi-callout__title' }, s.complete ? 'Lesson complete' : 'Before this lesson is complete'));
        var ul = el('ul');
        ul.appendChild(text('li', {}, (s.visited >= s.total ? '✓ ' : '○ ') + 'View every screen (' + s.visited + ' of ' + s.total + ')'));
        s.required.forEach(function (r) { ul.appendChild(text('li', {}, (r.done ? '✓ ' : '○ ') + r.label)); });
        box.appendChild(ul);
        box.appendChild(text('p', { className: 'mi-hint' }, 'Use Contents to return to any screen. Listening to narration is optional.'));
      }
      draw();
      MIProgress.onChange(function () { if (document.body.contains(box)) { draw(); } });
      parent.appendChild(box);
    },
    interaction: function (b, parent) {
      var q = questions[b.ref];
      if (!q) { parent.appendChild(text('p', { className: 'mi-error' }, 'Missing interaction: ' + b.ref)); return; }
      q.id = b.ref;
      MIAssessment.render(q, parent);
    }
  };

  function renderScreen() {
    var scr = screens[index];
    var main = $('mi-main');
    MIAudio.stop();
    main.textContent = '';
    var sec = content.sections.filter(function (s) { return s.id === scr.section; })[0];
    var si = content.sections.indexOf(sec);
    main.appendChild(text('p', { className: 'mi-section-label' }, 'Part ' + (si + 1) + ' of ' + content.sections.length + ' · ' + sec.title));
    var h = text('h1', { className: 'mi-screen-title', id: 'mi-screen-title', tabindex: '-1' }, scr.title);
    main.appendChild(h);
    MIAudio.render(main, scr.id, audioManifest[scr.id]);
    (scr.blocks || []).forEach(function (b) {
      var fn = blockRenderers[b.type];
      if (fn) { fn(b, main); } else { main.appendChild(text('p', { className: 'mi-error' }, 'Unknown block: ' + b.type)); }
    });
    main.appendChild(text('p', { className: 'mi-screen-id' }, scr.id));
    MIProgress.visit(scr.id);
    renderProgress();
    updateNav();
  }

  function go(i) {
    if (i < 0 || i >= screens.length) { return; }
    index = i;
    renderScreen();
    var h = $('mi-screen-title');
    if (h) { h.focus(); }
    global.scrollTo(0, 0);
    announce('Screen ' + (index + 1) + ' of ' + screens.length + ': ' + screens[index].title);
  }

  function fail(err) {
    $('mi-main').innerHTML = '<p class="mi-error">The lesson could not be loaded. Please close and reopen it. If the problem continues, contact your lecturer.</p>';
    if (global.console) { global.console.error(err); }
  }

  function start() {
    Promise.all([loadJSON('data/content.json'), loadJSON('data/questions.json'), loadJSON('data/audio_manifest.json')])
      .then(function (data) {
        content = data[0]; questions = data[1]; audioManifest = data[2];
        screens = content.screens;
        var lesson = content.lesson;
        MIScorm.init('MI_W' + lesson.weekNumber);
        renderHeader(lesson.weekNumber, lesson.weeklyTitle);
        var resume = MIProgress.load(screens.map(function (s) { return s.id; }), content.completion);
        renderNav();
        MIProgress.onChange(function () { renderProgress(); if (!$('mi-menu').hasAttribute('hidden')) { renderMenu(); } });
        var startAt = 0;
        if (resume.location) {
          screens.forEach(function (s, i) { if (s.id === resume.location) { startAt = i; } });
        }
        index = startAt;
        renderScreen();
        if (resume.resumed) { announce('Welcome back. You are on screen ' + (index + 1) + '.'); }
      })
      .catch(fail);

    var closed = false;
    function close() { if (!closed) { closed = true; try { MIProgress.finish(); } catch (e) { /* ignore */ } } }
    global.addEventListener('pagehide', close);
    global.addEventListener('beforeunload', close);
  }

  global.MIApp = { renderHeader: renderHeader, go: function (i) { go(i); } };
  document.addEventListener('DOMContentLoaded', start);
}(window));

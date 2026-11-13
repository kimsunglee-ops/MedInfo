/* Medical Informatics SCORM framework — assessment.js
 * Interactions, knowledge checks and the formative quiz.
 * Frozen Student Response Capture Architecture: every response is stored through
 * MIProgress under the interaction id; quiz scores go to cmi.core.score.raw.
 * Types: predict, shortanswer, single, order, classify, annotate, reflection, acknowledge, quiz.
 * FROZEN COMPONENT: change only with approval (SCORM_Architecture_FROZEN.md).
 */
(function (global) {
  'use strict';

  var uid = 0;

  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'className') { node.className = attrs[k]; } else { node.setAttribute(k, attrs[k]); }
    });
    if (html !== undefined) { node.innerHTML = html; }
    return node;
  }
  function text(tag, attrs, t) { var n = el(tag, attrs); n.textContent = t; return n; }
  function nextId(prefix) { uid += 1; return prefix + '-' + uid; }

  /* Deterministic shuffle so a resumed attempt shows the same order. */
  function shuffle(list, seedText) {
    var seed = 0;
    for (var i = 0; i < seedText.length; i += 1) { seed = (seed * 31 + seedText.charCodeAt(i)) % 2147483647; }
    function rnd() { seed = (seed * 48271) % 2147483647; return seed / 2147483647; }
    var a = list.slice();
    for (var j = a.length - 1; j > 0; j -= 1) {
      var k = Math.floor(rnd() * (j + 1));
      var t = a[j]; a[j] = a[k]; a[k] = t;
    }
    return a;
  }

  function feedbackBox() { return el('div', { className: 'mi-feedback', 'aria-live': 'polite' }); }

  function showFeedback(box, ok, html) {
    box.className = 'mi-feedback ' + (ok === true ? 'mi-feedback--correct' : ok === false ? 'mi-feedback--incorrect' : 'mi-feedback--neutral');
    var label = ok === true ? 'Correct. ' : ok === false ? 'Not quite. ' : '';
    box.innerHTML = (label ? '<strong>' + label + '</strong>' : '') + html;
  }

  function button(label, cls) { return text('button', { type: 'button', className: 'mi-btn ' + (cls || '') }, label); }

  function textarea(id, label, value, max) {
    var wrap = el('div', { className: 'mi-field' });
    wrap.appendChild(text('label', { 'for': id }, label));
    var ta = el('textarea', { id: id, rows: '3', maxlength: String(max || 250) });
    ta.value = value || '';
    wrap.appendChild(ta);
    wrap.appendChild(text('p', { className: 'mi-hint' }, 'Up to ' + (max || 250) + ' characters. Saved automatically.'));
    return { wrap: wrap, input: ta };
  }

  function autosave(input, key) {
    var timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { MIProgress.setResponse(key, input.value); }, 600);
    });
    input.addEventListener('blur', function () { MIProgress.setResponse(key, input.value); });
  }

  /* ---------- single choice (MCQ, true/false) ---------- */
  function renderSingle(q, parent, opts) {
    opts = opts || {};
    var fs = el('fieldset', { className: 'mi-q' });
    fs.appendChild(el('legend', {}, q.prompt));
    var name = nextId('opt');
    var options = q.shuffle && opts.seed ? shuffle(q.options, opts.seed) : q.options;
    options.forEach(function (o) {
      var id = nextId('o');
      var row = el('div', { className: 'mi-option' });
      var input = el('input', { type: 'radio', name: name, id: id, value: o.id });
      if (opts.value === o.id) { input.checked = true; }
      row.appendChild(input);
      row.appendChild(el('label', { 'for': id }, o.text));
      fs.appendChild(row);
    });
    parent.appendChild(fs);
    return {
      value: function () { var c = fs.querySelector('input:checked'); return c ? c.value : null; },
      disable: function () { Array.prototype.forEach.call(fs.querySelectorAll('input'), function (i) { i.disabled = true; }); },
      score: function (v) { return v === q.answer ? 1 : 0; },
      describe: function (v) {
        var o = q.options.filter(function (x) { return x.id === v; })[0];
        return o ? o.text : 'No answer';
      },
      correctText: function () { return q.options.filter(function (x) { return x.id === q.answer; })[0].text; }
    };
  }

  /* ---------- ordering (select a step number for each item) ---------- */
  function renderOrder(q, parent, opts) {
    opts = opts || {};
    var fs = el('fieldset', { className: 'mi-q mi-order' });
    fs.appendChild(el('legend', {}, q.prompt));
    fs.appendChild(text('p', { className: 'mi-hint' }, 'Choose a step number for each item. Use each number once.'));
    var selects = [];
    var saved = opts.value || null;
    q.items.forEach(function (it) {
      var id = nextId('ord');
      var row = el('div', { className: 'mi-order__row' });
      var sel = el('select', { id: id });
      sel.appendChild(text('option', { value: '' }, 'Step…'));
      for (var n = 1; n <= q.items.length; n += 1) { sel.appendChild(text('option', { value: String(n) }, 'Step ' + n)); }
      if (saved) { var pos = saved.indexOf(it.id); if (pos >= 0) { sel.value = String(pos + 1); } }
      sel.setAttribute('data-item', it.id);
      row.appendChild(sel);
      row.appendChild(el('label', { 'for': id }, it.text));
      fs.appendChild(row);
      selects.push(sel);
    });
    parent.appendChild(fs);
    return {
      value: function () {
        var seq = [];
        var seen = {};
        for (var i = 0; i < selects.length; i += 1) {
          var v = selects[i].value;
          if (!v || seen[v]) { return null; }
          seen[v] = true;
          seq[Number(v) - 1] = selects[i].getAttribute('data-item');
        }
        return seq;
      },
      disable: function () { selects.forEach(function (s) { s.disabled = true; }); },
      score: function (v) {
        if (!v) { return 0; }
        var right = 0;
        q.correct.forEach(function (id, i) { if (v[i] === id) { right += 1; } });
        return right / q.correct.length;
      },
      describe: function (v) {
        if (!v) { return 'No answer'; }
        return v.map(function (id) { return q.items.filter(function (x) { return x.id === id; })[0].text; }).join(' → ');
      },
      correctText: function () {
        return q.correct.map(function (id) { return q.items.filter(function (x) { return x.id === id; })[0].text; }).join(' → ');
      }
    };
  }

  function standaloneCheck(q, parent, builder) {
    var saved = MIProgress.getResponse(q.id);
    var widget = builder(q, parent, { value: saved, seed: q.id });
    var fb = feedbackBox();
    var check = button('Check answer');
    check.addEventListener('click', function () {
      var v = widget.value();
      if (v === null) { showFeedback(fb, null, q.type === 'order' ? 'Give every item a different step number first.' : 'Choose an answer first.'); return; }
      MIProgress.setResponse(q.id, v);
      var ok = widget.score(v) === 1;
      showFeedback(fb, ok, ok ? q.feedbackCorrect : q.feedbackIncorrect);
    });
    parent.appendChild(check);
    parent.appendChild(fb);
  }

  /* ---------- interaction renderers ---------- */
  var renderers = {
    predict: function (q, parent) {
      var id = nextId('pred');
      var wrap = el('div', { className: 'mi-field mi-field--inline' });
      wrap.appendChild(el('label', { 'for': id }, q.prompt));
      var input = el('input', { type: 'number', id: id, min: '0', max: '99', inputmode: 'numeric' });
      var saved = MIProgress.getResponse(q.id);
      if (saved !== undefined) { input.value = saved; }
      wrap.appendChild(input);
      parent.appendChild(wrap);
      var fb = feedbackBox();
      var save = button('Save my estimate');
      save.addEventListener('click', function () {
        if (input.value === '') { showFeedback(fb, null, 'Enter a number first.'); return; }
        MIProgress.setResponse(q.id, Number(input.value));
        showFeedback(fb, null, q.feedback);
      });
      parent.appendChild(save);
      parent.appendChild(fb);
      if (saved !== undefined) { showFeedback(fb, null, q.feedback); }
    },

    shortanswer: function (q, parent) {
      var t = textarea(nextId('sa'), q.prompt, MIProgress.getResponse(q.id), q.maxLength);
      parent.appendChild(t.wrap);
      autosave(t.input, q.id);
      var fb = feedbackBox();
      var check = button('Check my answer');
      check.addEventListener('click', function () {
        if (!t.input.value.trim()) { showFeedback(fb, null, 'Write your answer first.'); return; }
        MIProgress.setResponse(q.id, t.input.value);
        showFeedback(fb, null, '<strong>Expected answer:</strong> ' + q.expected + '<br>' + q.feedback);
      });
      parent.appendChild(check);
      parent.appendChild(fb);
    },

    single: function (q, parent) { standaloneCheck(q, parent, renderSingle); },

    order: function (q, parent) { standaloneCheck(q, parent, renderOrder); },

    classify: function (q, parent) {
      var fs = el('fieldset', { className: 'mi-q mi-classify' });
      fs.appendChild(el('legend', {}, q.prompt));
      var saved = MIProgress.getResponse(q.id) || {};
      var rows = [];
      q.items.forEach(function (it) {
        var id = nextId('cl');
        var row = el('div', { className: 'mi-classify__row' });
        row.appendChild(el('label', { 'for': id, className: 'mi-classify__item' }, it.text));
        var sel = el('select', { id: id });
        sel.appendChild(text('option', { value: '' }, 'Choose…'));
        (q.shuffleCategories ? shuffle(q.categories, q.id) : q.categories).forEach(function (c) {
          sel.appendChild(text('option', { value: c }, c));
        });
        if (saved[it.id]) { sel.value = saved[it.id]; }
        row.appendChild(sel);
        var fb = el('p', { className: 'mi-classify__fb', 'aria-live': 'polite' });
        row.appendChild(fb);
        fs.appendChild(row);
        rows.push({ item: it, select: sel, fb: fb });
      });
      parent.appendChild(fs);
      var summary = feedbackBox();
      var check = button('Check answers');
      check.addEventListener('click', function () {
        var answers = {};
        var missing = 0;
        var right = 0;
        rows.forEach(function (r) {
          answers[r.item.id] = r.select.value;
          if (!r.select.value) { missing += 1; r.fb.textContent = ''; return; }
          var ok = r.select.value === r.item.answer;
          if (ok) { right += 1; }
          r.fb.className = 'mi-classify__fb ' + (ok ? 'is-correct' : 'is-incorrect');
          r.fb.innerHTML = '<strong>' + (ok ? 'Correct' : 'Not quite — ' + r.item.answer) + '.</strong> ' + r.item.feedback;
        });
        MIProgress.setResponse(q.id, answers);
        if (missing) { showFeedback(summary, null, missing + ' item(s) still need an answer. Feedback is shown for the ones you completed.'); return; }
        showFeedback(summary, right === rows.length ? true : null, right + ' of ' + rows.length + ' correct. ' + (q.summary || ''));
      });
      parent.appendChild(check);
      parent.appendChild(summary);
    },

    annotate: function (q, parent) {
      parent.appendChild(el('p', { className: 'mi-prompt' }, q.prompt));
      var saved = MIProgress.getResponse(q.id) || {};
      var inputs = [];
      q.fields.forEach(function (f) {
        var t = textarea(nextId('an'), f.label, saved[f.id], q.maxLength);
        parent.appendChild(t.wrap);
        inputs.push({ id: f.id, input: t.input });
        t.input.addEventListener('blur', store);
      });
      function store() {
        var out = {};
        inputs.forEach(function (x) { out[x.id] = x.input.value; });
        MIProgress.setResponse(q.id, out);
      }
      var fb = feedbackBox();
      var reveal = button('Compare with the model answer');
      reveal.addEventListener('click', function () {
        var any = inputs.some(function (x) { return x.input.value.trim(); });
        if (!any) { showFeedback(fb, null, 'Complete at least one callout first, then compare.'); return; }
        store();
        var list = '<ul>' + q.model.map(function (m) { return '<li><strong>' + m.label + ':</strong> ' + m.text + '</li>'; }).join('') + '</ul>';
        showFeedback(fb, null, '<strong>Model answer.</strong>' + list);
      });
      parent.appendChild(reveal);
      parent.appendChild(fb);
    },

    reflection: function (q, parent) {
      var t = textarea(nextId('rf'), q.prompt, MIProgress.getResponse(q.id), q.maxLength);
      parent.appendChild(t.wrap);
      autosave(t.input, q.id);
      if (q.note) { parent.appendChild(el('p', { className: 'mi-hint' }, q.note)); }
    },

    acknowledge: function (q, parent) {
      var id = nextId('ack');
      var wrap = el('div', { className: 'mi-ack' });
      var box = el('input', { type: 'checkbox', id: id });
      box.checked = MIProgress.isDone(q.id);
      wrap.appendChild(box);
      wrap.appendChild(el('label', { 'for': id }, q.label));
      parent.appendChild(wrap);
      var fb = feedbackBox();
      parent.appendChild(fb);
      box.addEventListener('change', function () {
        if (box.checked) {
          MIProgress.markDone(q.id);
          showFeedback(fb, null, 'Thank you. Your acknowledgement has been recorded.');
        } else {
          box.checked = true;   // acknowledgement cannot be withdrawn once recorded
          showFeedback(fb, null, 'Your acknowledgement is already recorded.');
        }
      });
    },

    quiz: function (q, parent) { renderQuiz(q, parent); }
  };

  /* ---------- formative quiz ---------- */
  function renderQuiz(q, parent) {
    var area = el('div', { className: 'mi-quiz', tabindex: '-1' });
    parent.appendChild(area);

    function attemptsUsed() { return MIProgress.quiz().n || 0; }

    function intro() {
      var used = attemptsUsed();
      var info = el('div', { className: 'mi-quiz__info' });
      info.appendChild(el('p', {}, q.intro));
      info.appendChild(text('p', { className: 'mi-quiz__attempts' },
        'Attempts used: ' + used + ' of ' + q.maxAttempts + (used ? '. Best score: ' + MIProgress.quiz().b + '%.' : '.')));
      return info;
    }

    function showForm() {
      area.textContent = '';
      area.appendChild(intro());
      var attemptNo = attemptsUsed() + 1;
      var widgets = [];
      var form = el('form', { className: 'mi-quiz__form', novalidate: 'novalidate' });
      q.items.forEach(function (item, i) {
        var block = el('div', { className: 'mi-quiz__item' });
        block.appendChild(text('h3', { className: 'mi-quiz__num' }, 'Question ' + (i + 1)));
        var builder = item.type === 'order' ? renderOrder : renderSingle;
        widgets.push({ item: item, w: builder(item, block, { seed: q.id + ':' + item.id + ':' + attemptNo }) });
        form.appendChild(block);
      });
      var msg = feedbackBox();
      var submit = el('button', { type: 'submit', className: 'mi-btn mi-btn--primary' });
      submit.textContent = 'Submit attempt ' + attemptNo;
      form.appendChild(msg);
      form.appendChild(submit);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var missing = [];
        var responses = {};
        widgets.forEach(function (x, i) {
          var v = x.w.value();
          if (v === null) { missing.push(i + 1); }
          responses[x.item.id] = v;
        });
        if (missing.length) {
          showFeedback(msg, null, 'Please answer question' + (missing.length > 1 ? 's ' : ' ') + missing.join(', ') + ' before submitting.');
          return;
        }
        var total = 0;
        widgets.forEach(function (x) { total += x.w.score(responses[x.item.id]); });
        var pct = Math.round((total / widgets.length) * 100);
        MIProgress.recordQuizAttempt(pct, responses);
        showResults(responses, pct);
        area.focus();
      });
      area.appendChild(form);
    }

    function showResults(responses, pct) {
      area.textContent = '';
      area.appendChild(intro());
      area.appendChild(el('p', { className: 'mi-quiz__score', role: 'status' },
        '<strong>Score for this attempt: ' + pct + '%.</strong> This quiz is formative and ungraded.'));
      q.items.forEach(function (item, i) {
        var tmp = el('div');
        var w = (item.type === 'order' ? renderOrder : renderSingle)(item, tmp, {});
        var v = responses[item.id];
        var s = w.score(v);
        var ok = s === 1;
        var block = el('div', { className: 'mi-quiz__result ' + (ok ? 'is-correct' : 'is-incorrect') });
        block.appendChild(text('h3', { className: 'mi-quiz__num' }, 'Question ' + (i + 1) + (ok ? ' — correct' : s > 0 ? ' — partly correct' : ' — incorrect')));
        block.appendChild(el('p', { className: 'mi-quiz__stem' }, item.prompt));
        block.appendChild(el('p', {}, '<strong>Your answer:</strong> ' + w.describe(v)));
        block.appendChild(el('p', {}, '<strong>Correct answer:</strong> ' + w.correctText()));
        block.appendChild(el('p', {}, (ok ? item.feedbackCorrect : item.feedbackIncorrect)));
        block.appendChild(el('p', { className: 'mi-quiz__explain' }, '<strong>Why:</strong> ' + item.explanation));
        if (!ok && item.type === 'single' && item.rationale && item.rationale[v]) {
          block.appendChild(el('p', { className: 'mi-quiz__explain' }, '<strong>About your choice:</strong> ' + item.rationale[v]));
        }
        area.appendChild(block);
      });
      if (attemptsUsed() < q.maxAttempts) {
        var again = button('Start attempt ' + (attemptsUsed() + 1), 'mi-btn--primary');
        again.addEventListener('click', function () { showForm(); area.focus(); });
        area.appendChild(again);
      } else {
        area.appendChild(text('p', { className: 'mi-hint' }, 'You have used all attempts. Your best score has been recorded.'));
      }
    }

    var last = MIProgress.quiz().last;
    if (attemptsUsed() > 0 && last) { showResults(last, MIProgress.quiz().s); } else { showForm(); }
  }

  var MIAssessment = {
    render: function (q, parent) {
      var fn = renderers[q.type];
      if (!fn) { parent.appendChild(text('p', { className: 'mi-error' }, 'Unknown interaction type: ' + q.type)); return; }
      var wrap = el('div', { className: 'mi-interaction mi-interaction--' + q.type, 'data-id': q.id });
      if (q.title) { wrap.appendChild(text('h3', { className: 'mi-interaction__title' }, q.title)); }
      fn(q, wrap);
      parent.appendChild(wrap);
    }
  };

  global.MIAssessment = MIAssessment;
}(window));

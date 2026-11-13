/* Medical Informatics SCORM framework — progress.js
 * Progress, resume, response capture and completion.
 * Stores learner state in cmi.suspend_data (SCORM 1.2 limit: 4096 characters).
 * Completion follows the rules in content.json ("completion"); audio is never required.
 * FROZEN COMPONENT: change only with approval (SCORM_Architecture_FROZEN.md).
 */
(function (global) {
  'use strict';

  var SUSPEND_LIMIT = 4096;
  var screens = [];
  var rules = { requireAllScreens: true, required: [] };
  var state = { v: 1, vis: [], r: {}, d: [], q: {}, au: {} };
  var location = '';
  var completed = false;
  var listeners = [];
  var startTime = Date.now();

  function indexOf(id) {
    for (var i = 0; i < screens.length; i += 1) { if (screens[i] === id) { return i; } }
    return -1;
  }

  function serialise() {
    var json = JSON.stringify(state);
    if (json.length <= SUSPEND_LIMIT) { return json; }
    /* Guard: shorten free-text responses, longest first, until the data fits. */
    var copy = JSON.parse(json);
    var keys = Object.keys(copy.r).filter(function (k) { return typeof copy.r[k] === 'string'; })
      .sort(function (a, b) { return copy.r[b].length - copy.r[a].length; });
    for (var i = 0; i < keys.length && JSON.stringify(copy).length > SUSPEND_LIMIT; i += 1) {
      copy.r[keys[i]] = copy.r[keys[i]].slice(0, 80);
    }
    if (global.console) { global.console.warn('MIProgress: suspend_data near limit; long responses shortened.'); }
    return JSON.stringify(copy).slice(0, SUSPEND_LIMIT);
  }

  function notify() {
    listeners.forEach(function (fn) { try { fn(MIProgress.summary()); } catch (e) { /* ignore */ } });
  }

  var MIProgress = {
    load: function (screenIds, completionRules) {
      screens = screenIds.slice();
      if (completionRules) { rules = completionRules; }
      var raw = MIScorm.get('cmi.suspend_data');
      if (raw) {
        try {
          var parsed = JSON.parse(raw);
          if (parsed && parsed.v === 1) { state = parsed; }
        } catch (e) { /* corrupted data: start fresh but keep LMS status */ }
      }
      ['vis', 'd'].forEach(function (k) { if (!Array.isArray(state[k])) { state[k] = []; } });
      ['r', 'q', 'au'].forEach(function (k) { if (!state[k] || typeof state[k] !== 'object') { state[k] = {}; } });

      location = MIScorm.get('cmi.core.lesson_location');
      if (indexOf(location) < 0) { location = ''; }

      var status = MIScorm.get('cmi.core.lesson_status');
      completed = (status === 'completed' || status === 'passed');
      if (!completed) {
        MIScorm.set('cmi.core.lesson_status', 'incomplete');
      }
      MIScorm.set('cmi.core.exit', 'suspend');
      MIScorm.commit();
      return { resumed: MIScorm.get('cmi.core.entry') === 'resume' && location !== '', location: location };
    },

    onChange: function (fn) { listeners.push(fn); },

    location: function () { return location; },

    visit: function (id) {
      var i = indexOf(id);
      if (i < 0) { return; }
      location = id;
      if (state.vis.indexOf(i) < 0) { state.vis.push(i); state.vis.sort(function (a, b) { return a - b; }); }
      MIProgress.save();
    },

    isVisited: function (id) { return state.vis.indexOf(indexOf(id)) >= 0; },

    getResponse: function (key) { return state.r[key]; },

    setResponse: function (key, value, deferSave) {
      state.r[key] = value;
      if (!deferSave) { MIProgress.save(); }
    },

    markDone: function (id) {
      if (state.d.indexOf(id) < 0) { state.d.push(id); }
      MIProgress.save();
    },

    isDone: function (id) { return state.d.indexOf(id) >= 0; },

    quiz: function () { return state.q; },

    recordQuizAttempt: function (scorePct, responses) {
      var q = state.q;
      q.n = (q.n || 0) + 1;
      q.s = scorePct;
      q.b = Math.max(q.b || 0, scorePct);
      q.last = responses;
      MIScorm.set('cmi.core.score.min', '0');
      MIScorm.set('cmi.core.score.max', '100');
      MIScorm.set('cmi.core.score.raw', String(q.b));
      MIProgress.markDone(rules.quizId || 'quiz');
    },

    audio: function (screenId, event) {
      /* 1 = audio_started, 2 = audio_completed. Never affects completion. */
      var current = state.au[screenId] || 0;
      var next = event === 'completed' ? 2 : 1;
      if (next > current) { state.au[screenId] = next; MIProgress.save(); }
    },

    summary: function () {
      var visited = state.vis.length;
      var req = (rules.required || []).map(function (r) {
        return { id: r.id, label: r.label, done: state.d.indexOf(r.id) >= 0 };
      });
      var screensOk = !rules.requireAllScreens || visited >= screens.length;
      var reqOk = req.every(function (r) { return r.done; });
      return { visited: visited, total: screens.length, required: req, complete: screensOk && reqOk, alreadyCompleted: completed };
    },

    save: function () {
      MIScorm.set('cmi.suspend_data', serialise());
      if (location) { MIScorm.set('cmi.core.lesson_location', location); }
      var s = MIProgress.summary();
      if (s.complete && !completed) {
        completed = true;
        MIScorm.set('cmi.core.lesson_status', 'completed');
      }
      MIScorm.commit();
      notify();
    },

    finish: function () {
      MIScorm.set('cmi.core.session_time', MIScorm.formatTime(Date.now() - startTime));
      MIScorm.set('cmi.core.exit', 'suspend');
      MIProgress.save();
      MIScorm.finish();
    }
  };

  global.MIProgress = MIProgress;
}(window));

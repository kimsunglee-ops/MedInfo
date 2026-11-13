/* Medical Informatics SCORM framework — scorm.js
 * SCORM 1.2 runtime wrapper. Finds the LMS API; falls back to a local
 * preview store (localStorage) when no LMS is present.
 * FROZEN COMPONENT: change only with approval (SCORM_Architecture_FROZEN.md).
 */
(function (global) {
  'use strict';

  var api = null;
  var mode = 'none';          // 'lms' | 'preview'
  var initialised = false;
  var finished = false;
  var previewKey = null;
  var previewData = {};

  function findAPI(win) {
    var hops = 0;
    try {
      while (win && !win.API && win.parent && win.parent !== win && hops < 10) {
        hops += 1;
        win = win.parent;
      }
      return (win && win.API) ? win.API : null;
    } catch (e) {
      return null;            // cross-origin frame: stop searching this chain
    }
  }

  function locateAPI() {
    var found = findAPI(global);
    if (!found) {
      try { if (global.opener) { found = findAPI(global.opener); } } catch (e) { /* ignore */ }
    }
    if (!found) {
      try { if (global.top && global.top.opener) { found = findAPI(global.top.opener); } } catch (e2) { /* ignore */ }
    }
    return found;
  }

  function previewLoad() {
    try {
      var raw = global.localStorage.getItem(previewKey);
      previewData = raw ? JSON.parse(raw) : {};
    } catch (e) { previewData = {}; }
  }

  function previewSave() {
    try { global.localStorage.setItem(previewKey, JSON.stringify(previewData)); } catch (e) { /* storage unavailable */ }
  }

  var MIScorm = {
    init: function (lessonId) {
      if (initialised) { return mode; }
      api = locateAPI();
      if (api) {
        var ok = String(api.LMSInitialize('')) === 'true';
        mode = ok ? 'lms' : 'preview';
        if (!ok) { api = null; }
      } else {
        mode = 'preview';
      }
      if (mode === 'preview') {
        previewKey = 'mi-scorm-preview-' + lessonId;
        previewLoad();
        previewData['cmi.core.entry'] = previewData['cmi.core.lesson_location'] ? 'resume' : 'ab-initio';
      }
      initialised = true;
      return mode;
    },

    mode: function () { return mode; },

    get: function (key) {
      if (!initialised) { return ''; }
      if (mode === 'lms') {
        var v = api.LMSGetValue(key);
        return v === null || v === undefined ? '' : String(v);
      }
      return previewData[key] !== undefined ? String(previewData[key]) : '';
    },

    set: function (key, value) {
      if (!initialised || finished) { return false; }
      if (mode === 'lms') {
        return String(api.LMSSetValue(key, String(value))) === 'true';
      }
      previewData[key] = String(value);
      return true;
    },

    commit: function () {
      if (!initialised || finished) { return false; }
      if (mode === 'lms') { return String(api.LMSCommit('')) === 'true'; }
      previewSave();
      return true;
    },

    lastError: function () {
      if (mode !== 'lms') { return ''; }
      var code = api.LMSGetLastError();
      return code && String(code) !== '0' ? code + ' ' + api.LMSGetErrorString(code) : '';
    },

    finish: function () {
      if (!initialised || finished) { return; }
      MIScorm.commit();
      if (mode === 'lms') { api.LMSFinish(''); }
      finished = true;
    },

    /* SCORM 1.2 CMITimespan: HHHH:MM:SS.SS */
    formatTime: function (ms) {
      var total = Math.max(0, Math.round(ms / 10)) / 100;
      var h = Math.floor(total / 3600);
      var m = Math.floor((total % 3600) / 60);
      var s = (total % 60).toFixed(2);
      function pad(n, w) { n = String(n); while (n.length < w) { n = '0' + n; } return n; }
      return pad(h, 4) + ':' + pad(m, 2) + ':' + pad(s, 5);
    }
  };

  global.MIScorm = MIScorm;
}(window));

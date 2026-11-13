/* Medical Informatics SCORM framework — audio.js
 * Frozen Audio Control Component (Master Specification §18–§22).
 * Rendering rule: narration_enabled → render component → determine state.
 *   State A: audio available   State B: audio file missing   State C: audio error
 * The component never disappears when an MP3 is missing, and audio never blocks navigation.
 * FROZEN COMPONENT: change only with approval (SCORM_Architecture_FROZEN.md).
 */
(function (global) {
  'use strict';

  var current = null;   // the playing <audio>, stopped when the screen changes

  function el(tag, attrs, text) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'className') { node.className = attrs[k]; } else { node.setAttribute(k, attrs[k]); }
    });
    if (text !== undefined) { node.textContent = text; }
    return node;
  }

  function fmt(sec) {
    if (!isFinite(sec) || sec < 0) { return '--:--'; }
    var m = Math.floor(sec / 60);
    var s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function fillTranscript(box, entry) {
    function show(text) {
      box.textContent = '';
      String(text).split(/\n\s*\n/).forEach(function (para) {
        if (para.trim()) { box.appendChild(el('p', {}, para.trim())); }
      });
    }
    if (entry.transcript_text) { show(entry.transcript_text); return; }
    if (!entry.transcript || !global.fetch) { show('Transcript not available.'); return; }
    global.fetch(entry.transcript).then(function (res) {
      if (!res.ok) { throw new Error(res.status); }
      return res.text();
    }).then(show).catch(function () { show('Transcript could not be loaded.'); });
  }

  var MIAudio = {
    stop: function () {
      if (current) { try { current.pause(); } catch (e) { /* ignore */ } current = null; }
    },

    render: function (container, screenId, entry) {
      if (!entry || entry.narration_enabled !== true) { return null; }

      var root = el('section', { className: 'mi-audio', 'aria-label': 'Lecturer narration' });
      root.appendChild(el('p', { className: 'mi-audio__label' }, 'LECTURER NARRATION'));
      var status = el('p', { className: 'mi-audio__status', 'aria-live': 'polite' }, 'Checking narration…');
      root.appendChild(status);

      var controls = el('div', { className: 'mi-audio__controls' });
      var play = el('button', { type: 'button', className: 'mi-btn mi-audio__play', 'aria-label': 'Play narration', disabled: 'disabled' }, 'Play');
      var seek = el('input', { type: 'range', min: '0', max: '100', step: '1', value: '0', className: 'mi-audio__seek', 'aria-label': 'Narration position', disabled: 'disabled' });
      var time = el('span', { className: 'mi-audio__time' }, '0:00 / --:--');
      var volLabel = el('label', { className: 'mi-audio__volume' });
      volLabel.appendChild(document.createTextNode('Volume '));
      var vol = el('input', { type: 'range', min: '0', max: '1', step: '0.1', value: '1', 'aria-label': 'Narration volume', disabled: 'disabled' });
      volLabel.appendChild(vol);
      controls.appendChild(play); controls.appendChild(seek); controls.appendChild(time); controls.appendChild(volLabel);
      root.appendChild(controls);

      var tId = 'mi-transcript-' + screenId;
      var toggle = el('button', { type: 'button', className: 'mi-btn mi-btn--quiet mi-audio__transcript-toggle', 'aria-expanded': 'false', 'aria-controls': tId }, 'Show transcript');
      var box = el('div', { className: 'mi-audio__transcript', id: tId, hidden: 'hidden' });
      toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        if (!open && !box.hasChildNodes()) { fillTranscript(box, entry); }
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        toggle.textContent = open ? 'Show transcript' : 'Hide transcript';
        if (open) { box.setAttribute('hidden', 'hidden'); } else { box.removeAttribute('hidden'); }
      });
      root.appendChild(toggle);
      root.appendChild(box);
      container.appendChild(root);

      function setState(name) {
        root.setAttribute('data-state', name);
        if (name === 'A') {
          status.textContent = 'Narration available.';
          [play, seek, vol].forEach(function (c) { c.removeAttribute('disabled'); });
        } else if (name === 'B') {
          status.textContent = 'Narration will be available here.';
        } else {
          status.textContent = 'Narration is currently unavailable. You may continue with the text content.';
        }
      }

      if (!entry.audio) { setState('B'); return root; }
      /* Manifest says missing: show State B at once, but still probe the path so an
         MP3 added later is picked up without a manifest edit. */
      if (entry.status !== 'ready') { setState('B'); }

      var audio = new Audio();
      audio.preload = 'metadata';
      var settled = false;
      audio.addEventListener('loadedmetadata', function () {
        settled = true;
        setState('A');
        time.textContent = '0:00 / ' + fmt(audio.duration);
      });
      audio.addEventListener('error', function () {
        if (settled && root.getAttribute('data-state') === 'A') { setState('C'); return; }
        settled = true;
        setState(entry.status === 'ready' ? 'C' : 'B');
      });
      audio.addEventListener('timeupdate', function () {
        if (audio.duration) { seek.value = String(Math.round((audio.currentTime / audio.duration) * 100)); }
        time.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
      });
      audio.addEventListener('play', function () {
        play.textContent = 'Pause'; play.setAttribute('aria-label', 'Pause narration');
        if (global.MIProgress) { global.MIProgress.audio(screenId, 'started'); }
      });
      audio.addEventListener('pause', function () {
        play.textContent = 'Play'; play.setAttribute('aria-label', 'Play narration');
      });
      audio.addEventListener('ended', function () {
        if (global.MIProgress) { global.MIProgress.audio(screenId, 'completed'); }
      });
      play.addEventListener('click', function () {
        if (audio.paused) {
          MIAudio.stop();
          current = audio;
          var p = audio.play();
          if (p && p.catch) { p.catch(function () { setState('C'); }); }
        } else { audio.pause(); }
      });
      seek.addEventListener('input', function () {
        if (audio.duration) { audio.currentTime = (Number(seek.value) / 100) * audio.duration; }
      });
      vol.addEventListener('input', function () { audio.volume = Number(vol.value); });

      audio.src = entry.audio;   // relative path, e.g. audio/week01/W01_S01.mp3
      return root;
    }
  };

  global.MIAudio = MIAudio;
}(window));

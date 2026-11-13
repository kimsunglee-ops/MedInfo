# Week 01 SCORM package — Medical Informatics

**Lesson:** Week 01 · Introduction to Medical Informatics and the Healthcare Information Ecosystem
**Package:** `W01_SCORM_v0.1` (draft for lecturer review; not yet Brightspace-tested)
**Standard:** SCORM 1.2 · single SCO · launch file `index.html`
**Curriculum source:** `01_Approved_10_Week_Syllabus_v0.2.2.md` (content v0.2.5, working draft) · storyboard `W01_Stage_B_OAL_Storyboard_v0.1.md` (v0.1.1, approved gate B) · quiz `W01_Stage_C_Formative_Quiz_v0.1.md` (v0.1.1, approved gate C)
**Architecture:** gold-standard week (Master Specification §41); see `00_Project_Governance/SCORM_Architecture_FROZEN.md`

All patients, places, identifiers and results are fictional.

## Package structure

```text
imsmanifest.xml          SCORM 1.2 manifest (ZIP root)
index.html               launch file
css/styles.css           frozen visual design system
js/scorm.js              SCORM 1.2 API wrapper (preview mode without an LMS)
js/progress.js           progress, resume, response capture, completion
js/audio.js              frozen audio control component
js/assessment.js         interactions and formative quiz
js/app.js                header, navigation, progress bar, screen rendering
data/content.json        screens and content blocks
data/questions.json      interactions and quiz items
data/audio_manifest.json narration settings per screen (transcript text embedded at build)
transcripts/week01/      narration transcripts (W01_Sxx.txt)
audio/week01/            narration MP3s (none yet)
README.md, CHANGELOG.md
```

## Completion rules (Master Specification §27)

The lesson reports `cmi.core.lesson_status = completed` when **all** of these are met:

1. Every screen (W01_S01–W01_S24) has been viewed.
2. The module rules on patient information and AI are acknowledged (W01_S20).
3. At least one attempt of the formative quiz is submitted (W01_S22).

Until then the status is `incomplete`. Listening to narration is **not** required. There is no pass mark (`passed`/`failed` are not used).

## Tracking

| Data | SCORM 1.2 element |
|---|---|
| Current screen (bookmark) | `cmi.core.lesson_location` (screen ID) |
| Viewed screens, responses, quiz attempts, audio started/completed | `cmi.suspend_data` (JSON; free-text capacity 1,950 characters, well under the 4,096 limit) |
| Quiz score (best attempt, %) | `cmi.core.score.raw` (min 0, max 100) |
| Completion | `cmi.core.lesson_status` |
| Resume | `cmi.core.exit = suspend` |
| Session time | `cmi.core.session_time` |

Activity completion, knowledge-check performance, quiz score and audio completion are recorded separately (§15, §21). Audio never affects completion.

## Quiz

8 items, formative and ungraded, 2 attempts, feedback and correct answers after each attempt, options shuffled per attempt (except Q3, ordering). Q3 earns partial credit by position. Settings follow the Stage C quiz document. Deliver the quiz **either** in this package **or** as the Brightspace quiz object named in the Stage C document, not both.

## Screen map and narration inventory (§20, §37)

| Screen ID | Storyboard ID | Title | Narration | Script | Audio | Transcript | QA |
|---|---|---|---|---|---|---|---|
| W01_S01 | W1-LO1-S1 | Welcome to Week 01 | Yes | Draft | Missing | Ready | Pending |
| W01_S02 | W1-LO1-S2 | Meet Patient A | Yes | Draft | Missing | Ready | Pending |
| W01_S03 | W1-LO1-S3 | What do you already know? | No | — | — | — | — |
| W01_S04 | W1-LO2-S1 | What medical informatics is | Yes | Draft | Missing | Ready | Pending |
| W01_S05 | W1-LO2-S2 | Data, information and knowledge | Yes | Draft | Missing | Ready | Pending |
| W01_S06 | W1-LO2-S3 | Sort the laboratory examples | No | — | — | — | — |
| W01_S07 | W1-LO2-S4 | Same item, different category? | Yes | Draft | Missing | Ready | Pending |
| W01_S08 | W1-LO2-S5 | Summary: data, information and knowledge | No | — | — | — | — |
| W01_S09 | W1-LO3-S1 | From order to action: the journey of a test | Yes | Draft | Missing | Ready | Pending |
| W01_S10 | W1-LO3-S2 | Hand-offs | Yes | Draft | Missing | Ready | Pending |
| W01_S11 | W1-LO3-S3 | Worked example: from collection to laboratory receipt | Yes | Draft | Missing | Ready | Pending |
| W01_S12 | W1-LO3-S4 | Your turn: the report reaches the doctor | No | — | — | — | — |
| W01_S13 | W1-LO3-S5 | Three types of information risk | Yes | Draft | Missing | Ready | Pending |
| W01_S14 | W1-LO4-S1 | Singapore's health information landscape | Yes | Draft | Missing | Ready | Pending |
| W01_S15 | W1-LO4-S2 | Reading: what the NEHR holds | No | — | — | — | — |
| W01_S16 | W1-LO4-S3 | Match each organisation to its role | No | — | — | — | — |
| W01_S17 | W1-LO4-S4 | Summary: who does what | No | — | — | — | — |
| W01_S18 | W1-LO5-S1 | Confidentiality, integrity and availability | Yes | Draft | Missing | Ready | Pending |
| W01_S19 | W1-LO5-S2 | Which property is at risk? | No | — | — | — | — |
| W01_S20 | W1-LO5-S3 | Module rules: patient information and AI | Yes | Draft | Missing | Ready | Pending |
| W01_S21 | W1-LO5-S4 | Summary: looking after patient information | No | — | — | — | — |
| W01_S22 | W1-LO6-S1 | Formative quiz | No | — | — | — | — |
| W01_S23 | W1-LO6-S2 | Prepare for the practical | No | — | — | — | — |
| W01_S24 | W1-LO6-S3 | Week summary and look ahead | No | — | — | — | — |

Scripts are drafts written from the storyboard's narration key points (≈1,900 words, ≈14 minutes). They need lecturer review; the storyboard planned about 30 minutes, so microlectures may be extended.

## Adding narration (§23)

1. Record or generate the MP3 for a screen.
2. Save it as `weeks/week01/audio/week01/W01_Sxx.mp3` (same ID as the transcript).
3. Update the transcript if the spoken words changed.
4. Rebuild: `python3 tools/build_scorm.py week01`. The build marks the screen's audio `ready` automatically.
5. Run audio QA. No screen changes are needed.

## Preview

Data files load with `fetch`, so open the package through a web server, not as a local file:

```bash
cd 04_SCORM_Packages/build/week01_scorm && python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`. Without an LMS the package runs in preview mode and saves progress in the browser.

# A-Senior 2027 CE Portal

Course reference for A-Senior Coach Educators, built on the A-Youth CE Portal pattern.

## Pages

| Page | Source |
| --- | --- |
| Home | A-Senior Course Guide 2027 (Final) |
| Competencies | Course Guide section 6, competency connections from the Oct 26 briefs |
| Assignments | A Senior Assignments and Rubrics (Oct 26, 2026) |
| Rubrics | A Senior Assignments and Rubrics (Oct 26, 2026) |
| Assessment | Assessment Philosophy, Learning & Development Framework; Course Guide sections 4 and 9 |
| Schedule | Orientation deck (Oct 27, 2026) dates; Course Guide 7.2 descriptions |
| IPM Narrative | Course Guide 7.1 and 7.2; orientation deck slide 12 |
| IPM 2 | A-Youth IPM 2 Student Coach Preview, Preparation and CE Guide decks, rewritten for A-Senior |
| IPM 1, IPM 3, CE Facilitation | Placeholders |
| Groups | Orientation deck (groups, course team, question workflow); educator names to follow |

All content lives in `data.js` or in the page files. Edit `data.js` once and every page updates.

## Deploy

1. Create a new private GitHub repo and upload everything in this folder.
2. In Netlify, add a new site from that repo. The build command and publish folder come from `netlify.toml`.
3. Optional: switch on the nightly schedule sync. See `SETUP-SCHEDULE-SYNC.md`. Until `SHEET_CSV_URL` is set, the schedule shows the dates already in `data.js`.

The service worker cache is `as-ce-portal-v2` in `sw.js`. Bump the version when you change a page so phones pick up the new copy.

The USSF Unity font files are not included. Drop them into `/fonts` (see `fonts/README.txt`).

# Daily schedule sync - setup

The schedule page rebuilds from the master calendar once a day. Three one-time steps.

## 1. Publish the schedule tab as CSV

In the master calendar Google Sheet:

1. **File → Share → Publish to web**
2. Under **Link**, select the **final working schedule tab** (not "Entire document")
3. Choose **Comma-separated values (.csv)**
4. **Publish**, then copy the URL

## 2. Create a build hook in Netlify

1. **Site configuration → Build & deploy → Build hooks → Add build hook**
2. Name it `daily-schedule-sync`, branch `main`
3. **Save**, then copy the URL

## 3. Add both as environment variables

**Site configuration → Environment variables → Add a variable**

| Key | Value |
|---|---|
| `SHEET_CSV_URL` | the published CSV URL from step 1 |
| `BUILD_HOOK_URL` | the build hook URL from step 2 |

Redeploy once so the settings take effect.

---

## How it runs

- `netlify/functions/daily-rebuild.mts` fires at **06:00 UTC daily** (about 1am ET in summer, 2am ET in winter) and calls the build hook.
- The build runs `npm run build`, which executes `scripts/sync-schedule.mjs`.
- That script fetches the CSV, parses it, and rewrites the `ROWS` array in `data.js`.
- The site publishes with the current schedule.

Neither URL ever reaches the browser. Both URLs exist only as build-time environment variables.

## Updating sooner than tomorrow

**Deploys → Trigger deploy → Deploy site.** Takes under a minute.

## Changing the frequency

Edit the `schedule` value in `netlify/functions/daily-rebuild.mts`:

| Frequency | Cron |
|---|---|
| Every 6 hours | `0 */6 * * *` |
| Daily 06:00 UTC (current) | `0 6 * * *` |
| Weekdays only | `0 6 * * 1-5` |
| Weekly, Mondays | `0 6 * * 1` |

## If the sheet is unreachable

The build logs a warning and keeps the schedule already in `data.js`. A sheet problem never breaks a deploy or empties the page.

## Which columns are read

`Group`, `Date`, `Time`, `Meeting/Module Name`, `Duration`, `Core Competency`, `Integrated Competencies`, `Primary Assignment Connection`, `Facilitator`.

The header row is found automatically, so merged title rows above it are fine. Rows without both a date and a meeting name are skipped. Dates convert to `Mon, DD, YYYY`; `EST`/`CST`/`PST` become `ET`/`CT`/`PT`. To label College and Pro rows, add their dates to `GROUP_SPLIT` in `scripts/sync-schedule.mjs`.

---

# Adding the portal to a home screen

The site installs as an app. No app store, no download.

## iPhone / iPad

1. Open the A-Senior portal URL in **Safari** (this does not work in Chrome on iOS)
2. Tap the **Share** button (square with an arrow, at the bottom)
3. Scroll and tap **Add to Home Screen**
4. The name shows as **AS CE Portal**, then tap **Add**

The crest appears on the home screen and the site opens full screen, without Safari's address bar.

## Android

1. Open the site in **Chrome**
2. Tap the **three-dot menu**
3. Tap **Install app** or **Add to Home screen**
4. Confirm

Chrome often shows an install banner automatically after a couple of visits.

## Desktop (Chrome or Edge)

An install icon appears at the right of the address bar. Click it to run the portal in its own window.

## What CEs get

- Full-screen, no browser chrome
- Works offline for any page already visited, useful in facilities with poor wifi
- Long-pressing the icon on Android offers shortcuts straight to Rubrics, IPM 2 and Schedule
- Updates arrive automatically; there is nothing to reinstall

## A note on the password

If you password protect the site at the Netlify level, some devices will ask for the password again when the app is opened after a long gap. The repeat prompt is expected.

// Build-time schedule sync.
// Reads the master calendar from a published-CSV URL held in the
// SHEET_CSV_URL environment variable (server-side only; never shipped to the browser)
// and rewrites the ROWS array inside data.js.
//
// If the variable is unset or the fetch fails, the existing ROWS array is left
// untouched so the site always deploys with a working schedule.

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DATA_FILE = resolve('data.js');

// ---------- CSV parsing ----------
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else q = false;
      } else field += c;
    } else {
      if (c === '"') q = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c !== '\r') field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(x => x.trim()));
}

const MONTHS = {
  january: 'Jan', february: 'Feb', march: 'Mar', april: 'Apr', may: 'May', june: 'Jun',
  july: 'Jul', august: 'Aug', september: 'Sep', october: 'Oct', november: 'Nov', december: 'Dec'
};

function normDate(s) {
  const m = (s || '').match(/([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/);
  if (!m) return (s || '').trim();
  const mon = MONTHS[m[1].toLowerCase()] || m[1].slice(0, 3);
  return `${mon}, ${String(m[2]).padStart(2, '0')}, ${m[3]}`;
}

function normTime(s) {
  return (s || '').trim()
    .replace(/\bEST\b/g, 'ET').replace(/\bCST\b/g, 'CT').replace(/\bPST\b/g, 'PT');
}

// Group annotations for in-person meetings that split by group (College / Pro).
// Add entries here as 'Mon, DD, YYYY': 'College group' when the sheet carries them.
const GROUP_SPLIT = {};

function rowsFromSheet(text) {
  const grid = parseCSV(text);
  let h = -1;
  for (let i = 0; i < Math.min(grid.length, 15); i++) {
    const joined = grid[i].join('|').toLowerCase();
    if (joined.includes('meeting/module name') && joined.includes('facilitator')) { h = i; break; }
  }
  if (h === -1) throw new Error('Could not find the header row in the published sheet.');

  const head = grid[h].map(x => x.trim().toLowerCase());
  const col = n => head.findIndex(x => x.startsWith(n));
  const iG = col('group'), iD = col('date'), iT = col('time'), iN = col('meeting/module'),
        iDur = col('duration'), iC = col('core competency'), iI = col('integrated'),
        iA = col('primary assignment'), iF = col('facilitator');

  const out = [];
  for (let i = h + 1; i < grid.length; i++) {
    const r = grid[i];
    const name = (r[iN] || '').trim();
    const date = (r[iD] || '').trim();
    if (!name || !date) continue;
    const row = {
      grp: (r[iG] || '').trim() || 'Course',
      date: normDate(date),
      time: normTime(r[iT]),
      name,
      dur: (r[iDur] || '').trim(),
      core: (r[iC] || '').trim(),
      int: (r[iI] || '').trim(),
      asg: (r[iA] || '').trim(),
      fac: (r[iF] || '').trim()
    };
    if (GROUP_SPLIT[row.date]) row.coh = GROUP_SPLIT[row.date];
    out.push(row);
  }
  if (!out.length) throw new Error('No schedule rows found in the published sheet.');
  return out;
}

// ---------- replace the ROWS array in data.js ----------
function writeRows(rows) {
  const src = readFileSync(DATA_FILE, 'utf8');
  const start = src.indexOf('const ROWS');
  if (start === -1) throw new Error('ROWS array not found in data.js');
  let i = src.indexOf('=', start) + 1, depth = 0, started = false, j = i;
  while (j < src.length) {
    const ch = src[j];
    if (ch === '[' || ch === '{') { depth++; started = true; }
    else if (ch === ']' || ch === '}') depth--;
    else if (ch === ';' && started && depth === 0) break;
    j++;
  }
  const next = `const ROWS = ${JSON.stringify(rows)};`;
  writeFileSync(DATA_FILE, src.slice(0, start) + next + src.slice(j + 1), 'utf8');
}

// ---------- main ----------
const url = process.env.SHEET_CSV_URL;
if (!url) {
  console.log('[sync-schedule] SHEET_CSV_URL not set. Keeping the schedule already in data.js.');
  process.exit(0);
}

try {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const rows = rowsFromSheet(await res.text());
  writeRows(rows);
  console.log(`[sync-schedule] Updated schedule with ${rows.length} sessions from the master calendar.`);
} catch (err) {
  console.warn(`[sync-schedule] Could not refresh the schedule (${err.message}). Keeping the existing data.`);
  process.exit(0); // never fail the build over this
}

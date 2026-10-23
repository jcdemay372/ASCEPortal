// Scheduled function: triggers a site rebuild once per day so the schedule
// page picks up the latest master calendar.
//
// Requires one environment variable in Netlify:
//   BUILD_HOOK_URL  - the build hook created under Site settings > Build & deploy > Build hooks
//
// The rebuild runs `npm run build`, which executes scripts/sync-schedule.mjs
// and writes the current schedule into data.js before the site is published.

import type { Config } from '@netlify/functions';

export default async () => {
  const hook = process.env.BUILD_HOOK_URL;

  if (!hook) {
    console.error('[daily-rebuild] BUILD_HOOK_URL is not set. Nothing to trigger.');
    return new Response('BUILD_HOOK_URL not configured', { status: 500 });
  }

  try {
    const res = await fetch(hook, { method: 'POST' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    console.log('[daily-rebuild] Rebuild triggered.');
    return new Response('Rebuild triggered', { status: 200 });
  } catch (err) {
    console.error(`[daily-rebuild] Failed to trigger rebuild: ${(err as Error).message}`);
    return new Response('Failed to trigger rebuild', { status: 500 });
  }
};

// 06:00 UTC daily (about 1am ET in summer, 2am ET in winter)
export const config: Config = {
  schedule: '0 6 * * *'
};

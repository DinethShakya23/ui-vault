// Captures screenshots for every entry and url-based reference in data/list.yml.
//   node scripts/capture.mjs                 capture missing or older than --max-age days (default 30)
//   node scripts/capture.mjs --force         recapture everything
//   node scripts/capture.mjs --only mui-com  capture specific slugs (comma separated)
//   node scripts/capture.mjs --concurrency 4
import fs from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';
import {
  SHOTS_DIR, THUMBS_DIR, loadData, captureJobs, shotFile, thumbFile, exists, readManifest, writeManifest,
} from './lib.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : def; };

const FORCE = flag('force');
const ONLY = opt('only', '') ? new Set(opt('only').split(',')) : null;
const MAX_AGE_DAYS = Number(opt('max-age', 30));
const CONCURRENCY = Number(opt('concurrency', 4));
const VIEWPORT = { width: 1440, height: 900 };
const SHOT_WIDTH = 1280;
const THUMB_WIDTH = 480;

// Hide common cookie / consent banners and chat widgets so they don't cover the UI.
const HIDE_CSS = `
  [id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i],
  [id*="onetrust" i], [class*="onetrust" i], #CybotCookiebotDialog, .cc-window, .fc-consent-root,
  [id*="intercom" i], [class*="intercom" i], [id*="crisp" i], #hubspot-messages-iframe-container,
  [aria-label*="cookie" i][role="dialog"] { display: none !important; visibility: hidden !important; }
  *, *::before, *::after { caret-color: transparent !important; }
`;

fs.mkdirSync(SHOTS_DIR, { recursive: true });
fs.mkdirSync(THUMBS_DIR, { recursive: true });

const manifest = readManifest();
const now = Date.now();
const jobs = captureJobs(loadData()).filter((j) => {
  if (ONLY) return ONLY.has(j.slug);
  if (FORCE) return true;
  const m = manifest[j.slug];
  if (!m || !exists(shotFile(j.slug))) return true;
  if (m.url !== j.url) return true; // target changed
  return (now - Date.parse(m.captured)) / 86400000 > MAX_AGE_DAYS;
});

console.log(`${jobs.length} page(s) to capture`);
if (!jobs.length) process.exit(0);

const browser = await chromium.launch();
const failures = [];

async function capture(job) {
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
    colorScheme: job.theme === 'dark' ? 'dark' : 'light',
    reducedMotion: 'no-preference',
    locale: 'en-US',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 awesome-ui-stack-screenshot-bot',
  });
  const page = await context.newPage();
  try {
    try {
      await page.goto(job.url, { waitUntil: 'networkidle', timeout: 45000 });
    } catch {
      await page.goto(job.url, { waitUntil: 'load', timeout: 45000 });
    }
    await page.addStyleTag({ content: HIDE_CSS }).catch(() => {});
    if (job.scroll) await page.evaluate((y) => window.scrollTo(0, y), job.scroll);
    await page.waitForTimeout(2500 + (job.wait || 0)); // let fonts, images and intro animations settle
    const png = await page.screenshot({ type: 'png' });
    await sharp(png).resize({ width: SHOT_WIDTH }).webp({ quality: 80 }).toFile(shotFile(job.slug));
    await sharp(png).resize({ width: THUMB_WIDTH }).webp({ quality: 72 }).toFile(thumbFile(job.slug));
    manifest[job.slug] = { url: job.url, captured: new Date().toISOString().slice(0, 10) };
    console.log(`  ✓ ${job.slug}`);
  } catch (err) {
    failures.push({ ...job, error: err.message.split('\n')[0] });
    console.log(`  ✗ ${job.slug} — ${err.message.split('\n')[0]}`);
  } finally {
    await context.close();
  }
}

// Simple worker pool
const queue = [...jobs];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) await capture(queue.shift());
}));

await browser.close();
writeManifest(manifest);

console.log(`\nDone: ${jobs.length - failures.length} captured, ${failures.length} failed`);
if (failures.length) {
  const report = failures.map((f) => `- \`${f.slug}\` ${f.url} — ${f.error}`).join('\n');
  fs.writeFileSync('capture-failures.md', `## Screenshot failures\n\n${report}\n`);
}

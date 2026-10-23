// Shared helpers for build.mjs and capture.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DATA_FILE = path.join(ROOT, 'data', 'list.yml');
export const SHOTS_DIR = path.join(ROOT, 'assets', 'shots');
export const THUMBS_DIR = path.join(ROOT, 'assets', 'thumbs');
export const REFS_DIR = path.join(ROOT, 'refs');
export const BOARD_DIR = path.join(REFS_DIR, 'board');
export const GALLERY_DIR = path.join(ROOT, 'gallery');
export const MANIFEST = path.join(SHOTS_DIR, 'manifest.json');

export const IMAGE_EXT = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif'];
export const VIDEO_EXT = ['.mp4', '.webm', '.mov'];

export const TAG_EMOJI = {
  free: '🆓', paid: '💎', react: '⚛️', vue: '🟢', svelte: '🧡', angular: '🅰️', any: '🌐',
};

export function loadData() {
  return YAML.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

// Slug derived from a URL, so the same page always maps to the same screenshot.
export function slugForUrl(url) {
  const u = new URL(url);
  const host = u.hostname.replace(/^www\./, '');
  return slugify(host + u.pathname + u.hash) || slugify(host);
}

export function itemSlug(item) {
  return slugForUrl(item.url);
}

export function readManifest() {
  try { return JSON.parse(fs.readFileSync(MANIFEST, 'utf8')); } catch { return {}; }
}

export function writeManifest(m) {
  fs.mkdirSync(SHOTS_DIR, { recursive: true });
  const sorted = Object.fromEntries(Object.entries(m).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(MANIFEST, JSON.stringify(sorted, null, 2) + '\n');
}

export const shotFile = (slug) => path.join(SHOTS_DIR, `${slug}.webp`);
export const thumbFile = (slug) => path.join(THUMBS_DIR, `${slug}.webp`);
export const exists = (p) => { try { fs.accessSync(p); return true; } catch { return false; } };

// Every page that should be screenshotted: main shots + url-based refs.
export function captureJobs(data) {
  const jobs = new Map();
  for (const item of allItems(data)) {
    if (!item.noshot) {
      const target = item.shot || item.url;
      jobs.set(itemSlug(item), { slug: itemSlug(item), url: target, theme: item.theme, wait: item.wait, scroll: item.scroll, name: item.name });
    }
    for (const ref of item.refs || []) {
      if (ref.url) {
        const slug = slugForUrl(ref.url);
        if (!jobs.has(slug)) jobs.set(slug, { slug, url: ref.url, theme: ref.theme || item.theme, wait: ref.wait, scroll: ref.scroll, name: `${item.name} — ${ref.title || ref.url}` });
      }
    }
  }
  return [...jobs.values()];
}

export function* allItems(data) {
  for (const section of data.sections) for (const group of section.groups) for (const item of group.items) yield item;
}

// Files a contributor dropped into refs/<slug>/
export function folderRefs(slug) {
  const dir = path.join(REFS_DIR, slug);
  if (!exists(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => !f.startsWith('.') && [...IMAGE_EXT, ...VIDEO_EXT].includes(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => ({ title: titleFromFile(f), file: `${slug}/${f}` }));
}

export function titleFromFile(f) {
  const base = path.basename(f, path.extname(f)).replace(/^\d+[-_ ]*/, '');
  const t = base.replace(/[-_]+/g, ' ').trim();
  return t ? t[0].toUpperCase() + t.slice(1) : f;
}

# Contributing

Thanks for helping keep this list useful. There are three ways to contribute — pick whichever fits.

| I want to… | Do this |
|---|---|
| Add a library / tool | Add an entry to [`data/list.yml`](data/list.yml) |
| Add references for an existing entry | Drop files into `refs/<slug>/` or add `refs:` to the entry |
| Share any other reference (layout, animation, palette, product screen…) | Drop files into [`refs/board/`](refs/board) |

You never edit `README.md` or `gallery/` by hand — they are regenerated automatically on `main`, and screenshots are captured for you.

---

## Adding an entry

Add it to the most specific section in `data/list.yml`:

```yaml
- name: Magic UI
  url: https://magicui.design
  desc: 150+ animated components for shadcn projects.
  tags: [free, paid, react]
```

- `desc` — under ~15 words, factual, no marketing language, ends with a period.
- `tags` — `free` 🆓 · `paid` 💎 · `react` ⚛️ · `vue` 🟢 · `svelte` 🧡 · `angular` 🅰️ · `any` 🌐
- The project must be **actively maintained** (release or meaningful commit in the last 12 months) with real documentation.
- Link to the official site, not a blog post or aggregator.

### Tuning the screenshot (optional)

| Field | Use it when |
|---|---|
| `shot: <url>` | The homepage is a plain marketing page — point to a demo or components page instead |
| `theme: dark` | The site looks better (or only exists) in dark mode |
| `scroll: 800` | You want to skip the hero and show the components below |
| `wait: 3000` | Intro animations need longer to settle |
| `noshot: true` | A screenshot adds nothing (pure docs, specs) |

---

## Adding references

References can be **anything that helps someone picture the result**: component pages, real apps built with the library, animation GIFs, short screen recordings, layout ideas, Dribbble shots, CodePens.

**Option A — drop files in a folder.** Find the entry's slug:

```bash
npm install
npm run slugs gsap        # → gsap-com   GSAP
```

then add files to `refs/gsap-com/`. Supported: `png jpg webp gif svg avif` (shown inline) and `mp4 webm mov` (linked). The file name becomes the caption — `01-scroll-story.webp` → “Scroll story” (leading numbers control the order).

**Option B — declare them in `data/list.yml`.** Mix and match:

```yaml
  refs:
    - title: Component showcase
      url: https://magicui.design/docs/components   # screenshot captured automatically
    - title: Pricing page built with it
      file: magicui-design/pricing.webp              # file you added under refs/
      source: https://example.com/pricing            # optional credit link
    - title: Launch video
      link: https://www.youtube.com/watch?v=...      # linked, not embedded
```

## Reference board

For references not tied to one library, add files to `refs/board/`. Subfolders become headings on the [board](gallery/board.md):

```
refs/board/
  dashboards/analytics-dark.webp
  landing-pages/bento-hero.png
  motion/magnetic-button.gif
  captions.yml            # optional
```

`captions.yml` lets you set a title and credit the source:

```yaml
dashboards/analytics-dark.webp:
  title: Dark analytics dashboard
  source: https://dribbble.com/shots/...
```

### Rules for reference files

- **Only share what you're allowed to share** — your own work, or public pages with a `source` credit. No paid/private content or leaked designs.
- Keep files light: images ≤ 1 MB (WebP preferred, ~1280px wide), GIFs ≤ 5 MB, videos ≤ 10 MB.
- No personal data visible in screenshots (emails, names, dashboards with real customer data).

---

## Running locally (optional)

```bash
npm install
npx playwright install chromium
npm run capture -- --only gsap-com   # capture specific slugs
npm run build                        # regenerate README.md and gallery/
```

`npm run capture` only captures what's missing or older than 30 days; add `--force` to redo everything.

## Removing entries

Open a PR if a project is archived, deprecated or renamed — include a link showing the change. Project owners can request a screenshot change or removal via an issue.

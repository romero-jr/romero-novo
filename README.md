# Novo Community Prototypes

Three working prototypes of net-new community marketing programs for [Novo](https://novo.co), built ahead of a conversation with the team. Each is a single, self-contained HTML page you can open and use directly.

**Live site:** `https://<your-username>.github.io/<repo-name>/`

## The prototypes

| Page | What it is | Focus |
|------|------------|-------|
| `index.html` | Cover page linking the three prototypes | — |
| `data.json` | Shared content for all three pages (stats, quiz, winners) | — |
| `novo-smb-pulse-report.html` | Quarterly research brief on the state of independent business, with an animated confidence-index chart and community quotes | Acquisition |
| `novo-banking-health-check.html` | Five-question self-assessment that scores a banking setup 0–100 and returns tailored recommendations | Conversion |
| `novo-100.html` | Annual recognition program — nomination form, voting stage, and a searchable winners showcase | Advocacy |

All data and names are placeholders, clearly labeled as sample data.

## Built with

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no external dependencies
- Content is **data-driven**: each page renders itself from `data.json`, so updating figures, quiz copy, or the winners list means editing one file, not the markup
- The Novo logo is inlined as SVG; brand color is indigo `#3D44E3`
- Responsive down to 375px and respects `prefers-reduced-motion`

## Editing content

All the editable content lives in `data.json` — the Pulse Report stats and chart, the Health Check questions and scoring, and the Novo 100 winners. Change a value there and every page picks it up on next load. No markup edits needed.

## Running locally

Because the pages load `data.json` with `fetch()`, they need to be served over HTTP — opening a file directly with `file://` won't work (browsers block local fetches). From the project folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. (GitHub Pages serves over HTTP automatically, so no extra step once it's deployed.)

## Hosting on GitHub Pages

1. Push all four `.html` files to the repository (root, or a `/docs` folder).
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select your branch (e.g. `main`) and `/ (root)`.
4. GitHub publishes the site at the URL shown; `index.html` loads as the landing page.

> Filenames are case-sensitive on GitHub Pages — keep them exactly as listed above.

---

Community marketing prototypes — Miguel Romero · 2026

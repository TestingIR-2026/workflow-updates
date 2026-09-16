# Workflow updates — September 2026 (static design export)

A static export of a Claude design, ready to host on GitHub Pages. `index.html`
is a landing page linking to all seven interactive screens.

## Deploy to GitHub Pages

1. Create a new GitHub repository (public is simplest; private works too but
   viewers then need repo access).
2. Upload **the contents of this folder** to the repo root — so `index.html`
   and `.nojekyll` sit at the top level, not inside a subfolder. (On github.com:
   "Add file" → "Upload files", then drag everything in.)
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose the `main` branch and the `/ (root)` folder, and **Save**.
5. Wait ~1 minute. Your site appears at
   `https://<your-username>.github.io/<repo-name>/` — share that link.

## Don't remove these

- `.nojekyll` — required. GitHub Pages runs Jekyll by default, which ignores the
  `_ds/` folder (it starts with an underscore). Without this file every page
  loads unstyled and broken.
- `_ds/`, `support.js`, `assets/` — the design-system bundle, runtime, and
  images every screen depends on.

## Screens

- entity-automation.dc.html
- inspire-agent.dc.html
- trigger.dc.html
- switch.dc.html
- user-assignment.dc.html
- workflow-settings.dc.html
- panel-shell.dc.html

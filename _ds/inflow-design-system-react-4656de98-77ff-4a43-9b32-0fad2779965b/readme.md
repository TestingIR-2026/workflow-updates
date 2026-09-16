# Inriver Design System

The design language and component library for **Inriver** — a Product
Information Management (PIM) platform. Inriver helps commerce teams collect,
enrich, govern and syndicate product information across many sales channels
(web stores, marketplaces, print, retail partners). This system is the visual
and interaction foundation for the Inriver app ("inFlow") and for any
prototype, mock, deck or production surface built in the brand.

It is a **Material Design 3 / MUI v6-derived** system (generated from *MUI for
Figma v6.1.0*) that Inriver has customised heavily: a deep-water navy primary,
a light-blue application canvas, Inter throughout, Material Icons, and a large
set of product-specific tokens (grid row states, completeness highlights,
diff colours, an AI chat panel).

---

## Source & how this was built

Rebuilt from the official repository:

- **GitHub:** `inriver-ux-team/REACT-Inflow-design-system` (branch `main`).
  The source is a real **React + MUI v6 + Storybook** library:
  `src/theme/theme.ts` (the MUI theme), `src/components/**` (TSX wrappers over
  MUI), `public/ds/inriver-design-tokens.css` (the single token source),
  `public/ds/inriver-theme.js` (the portable theme options), the custom
  `public/ds/Inriver*.jsx` shell components, and one preview HTML per component.

Because this environment renders **React only (no npm / no MUI bundle)**, the
components here are faithful, self-contained re-implementations that read the
**exact same tokens** and mirror the real components' names, props and specs.
For production, use the real repo's MUI components + `inriver-theme.js`
directly (copied into this project as `inriver-theme.js` for reference).

Font substitution: **none.** Inter is the real brand font; its variable
binaries are in `fonts/`.

---

## Content fundamentals

- **Voice — plain, calm, operational.** The product is a workhorse for busy
  merchandisers; copy is direct and unshowy: "New product", "Approve &
  publish", "12 products are missing mandatory attributes."
- **Casing — buttons capitalise, everything else sentence case.** The MUI
  button style is `textTransform: capitalize` ("New product" → "New Product"
  visually); menu items, tabs, dialog titles and body copy stay sentence case.
  The only all-caps are the INRIVER wordmark and style-driven overlines.
- **Person — second person for actions, third for system state.** "Ask about
  this product" vs. "AI can make mistakes. Check important info." Avoid "we".
- **Numbers are concrete.** Completeness is a %, channels a count, selection a
  count ("2 selected", "1,284 products"). Product data is the hero.
- **Domain vocabulary.** Products, attributes, channels, syndication,
  completeness, enrichment, mandatory attributes, approval/publish workflow,
  DAM/media, variants, environments. Prefer these exact words.
- **Empty & error states help, not joke.** State what's missing and the next
  action ("Import failed — the CSV had 4 malformed rows").
- **Emoji — never.** Use Material Icons instead.

---

## Visual foundations

- **Colour.** Primary is deep-water navy `--color-primary-main #0b2d6e` (links,
  active tab/nav, headings, filled buttons) with `--palette-primary-dark
  #003687` for hover. Secondary/navigation is near-black navy `#22243d` (the
  rail, tonal surfaces). The application canvas is a distinctive pale blue
  `--custom-background #ebf1fc`; content sits on white. Semantics: error
  `#ba1a1a`, warning is an **orange** `#ff6424` (not amber), info `#0057cf`,
  success green `#2c9b4b`. A large custom palette drives grid row states
  (hover `#f1f6fe`, selected navy-8%, mandatory `#c9dcff`) and highlight/diff
  colours (yellow/green/red). Toasts use the soft tint versions as their fill.
- **Type.** Inter, variable, 300–700. MUI scale: h6 page title is **700** at
  22px; body 16/14/12; label 14/500 for buttons/tabs/chips. Body-medium (14px)
  is the table/form workhorse. Never below 12px.
- **Spacing.** Strict **8px grid** (`--spacing-1…12`). Component geometry is
  exact and off-grid where the Figma says so — buttons 40px (small 30, xs 20),
  chips 32 (sm 24 / lg 40), fields 56 (sm 40), tabs pill min 26, page header
  76, grid rows 32/40/48 by density. Copy exact values; never round.
- **Radius.** 4px fields/menus, **5px buttons/cards/paper**, 8px chips/toasts,
  10px nav items & tabs, 28px dialogs, full pill for icon buttons and chips.
- **Elevation & cards.** Two-layer Material shadows exist (`--elevation-1…3`)
  for buttons/menus/dialogs — **but cards default to a 1px
  `--color-outline-variant #c2c6d8` border and NO shadow** (`variant="elevated"`
  opts into shadow). Border-not-shadow is a signature.
- **Backgrounds.** Flat colour only — pale-blue canvas, white surfaces. No
  gradients, hero photos or textures in chrome. Imagery = product media/DAM
  and the supplied empty-state illustrations.
- **Motion.** Restrained, functional — 0.15–0.2s ease on background/border/
  shadow and the floating-label lift; spinners/indeterminate bars loop;
  nothing bounces.
- **States.** Hover = a translucent state layer (primary-8% on light, white-8%
  on the navy rail) or the row-hover blue `#f1f6fe`; focus/pressed deepen to
  12%. Disabled = 38% opacity. Selected chips/tabs/nav fill with the pale
  primary tab `#c3defe` / a white pill on the rail.
- **Layout.** An 80px navy `InriverAppNav` rail (or the collapsible 240↔56px
  `InriverNavRail`), a white global header, a pale-blue page-header band, then
  the working area on the canvas. The AI assistant docks in a `RightPanel`.

---

## Iconography

- **Material Icons / Material Symbols Outlined** is the one icon system. In
  HTML load
  `https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined`
  and render `<span class="material-icons-outlined">inventory_2</span>`; the
  components take Material ligature names (`icon="more_vert"`, `startIcon="add"`).
- Icons are outlined by default, ~20–22px in chrome, `currentColor`.
- **No emoji, no Unicode-glyph icons, no hand-drawn SVG icon substitutes.**
  Flag a gap instead of inventing one.
- `assets/` ships the real brand marks and illustrations — use them, never
  redraw: `inriver-logo-dark.png` (INRIVER wordmark), `inriver-mark-ir.svg`
  (the IR mark, render white on navy), `empty-search-results.png`,
  `empty-general-files.png`, `empty-media.png` (the only approved empty-state
  art), and `assets/icons/conversion-path.svg`.

---

## What's in here (index)

Root
- `styles.css` — **the entry point consumers link** (`@import`s the tokens).
- `inriver-design-tokens.css` — the single source of truth: `@font-face`, base
  element styles, 579 tokens, `--iv-*` / `--custom-*` aliases, and typography
  utility classes. No component CSS classes (MUI + custom React own those).
- `inriver-theme.js` — the portable MUI `createTheme` options object, for
  production React handoff (see the file header).
- `fonts/` — Inter variable binaries. `assets/` — logo, IR mark, illustrations.

Components (`components/<group>/`) — React primitives on
`window.InriverDesignSystem_4656de`:
- **core** — Button, IconButton, Chip, Avatar (+AvatarGroup), Badge, Divider
- **forms** — TextField, Select, Checkbox, Radio, Switch, Slider
- **feedback** — Toast (covers alerts), Dialog, Tooltip, Progress, Skeleton
- **navigation** — InriverTabs (+InriverTabPanel), Breadcrumbs, Menu,
  Pagination, InriverStepper
- **display** — Card, DataTable, Accordion, InriverDataTableRow (+InriverCell)
- **layout** — InriverGlobalHeader, InriverPageHeader, InriverAppNav
  (+Placeholder), InriverNavRail
- **panels** — RightPanel, ChatPanel, DetailPanel (+DetailPanelSection)

UI kit (`ui_kits/inriver-app/`) — interactive PIM recreation: login → product
table → product detail, with the AI assistant docked in a RightPanel.

Specimen cards (`guidelines/`) — colour, type, spacing/radius/elevation and
brand cards that populate the Design System tab.

`SKILL.md` — portable Agent-Skill front-matter for using this system elsewhere.

---

## Using it

1. Link `styles.css` for tokens, fonts and base type.
2. For React, load `_ds_bundle.js` and pull components from
   `window.InriverDesignSystem_4656de`; load Material Icons from the CDN.
3. Use `--color-*`, `--text-*`, `--radius-*`, `--spacing-*` (and `--iv-*` /
   `--custom-*`) tokens — never raw hex. Cards get borders, not shadows. Icons
   from Material only. Use `Toast` for every alert/notification. Wrap
   `ChatPanel`/`DetailPanel` in a `RightPanel`. Flag anything the system
   doesn't cover with a `// REVIEW` note.

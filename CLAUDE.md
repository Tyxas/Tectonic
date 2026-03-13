# TECTONIC — Šokių Rūbai · Antigravity Project

## Project Overview

**Client:** Tectonic
**Type:** E-shop / Landing page — dance costume webshop
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
**CMS:** Optional — WordPress headless or Sanity.io for product management
**Hosting:** Vercel (frontend)
**Design source:** Google Stitch MCP → extracted HTML/CSS → converted to Next.js components

---

## Brand Identity (STRICT — do not deviate)

```
Brand name:    TECTONIC (stylized: TEC·TONIC)
Tagline:       "Designed to move."
Language:      Lithuanian (LT) primary, English secondary

Colors:
  --black:       #050505   → page background
  --off-black:   #0E0E0E   → card backgrounds
  --panel:       #141414   → elevated surfaces
  --border:      #1E1E1E   → default borders
  --border2:     #2A2A2A   → hover borders
  --cyan:        #00E5FF   → primary accent (CTAs, prices, highlights)
  --pink:        #FF2D6B   → secondary accent (tags, hover, accents)
  --white:       #F0EEE8   → body text (warm white, NOT pure #FFFFFF)
  --muted:       #888888   → secondary text

Fonts:
  Display:  Barlow Condensed 900 — headlines, product names
  UI/Mono:  Space Mono 400/700 — labels, tags, prices, nav
  Body:     Barlow 300/400/500 — descriptions, prose

Logo mark: TEC·TONIC (middle dot separator in cyan)
```

---

## Dance Culture Context

Tectonic (Tecktonik / Electro Dance) — French street dance born in Paris 2002.
Key aesthetic: neon colors, tight-fitting clothing, rapid arm movements, electro house music.
Target audience: Lithuanian dancers — recreational AND competitive, teens to adults.

This informs ALL design decisions: dark, electric, kinetic, angular.

---

## Site Architecture

```
/ (Landing page)           — Hero, products teaser, CTA
/kolekcija/                — Full product catalog
/kolekcija/[slug]/         — Individual product page
/individualus/             — Custom orders page + form
/apie/                     — Brand story
/kontaktai/                — Contact page
```

---

## Design System Rules (ENFORCED)

1. Background is always dark. No white pages. bg-[#050505] minimum.
2. Grid overlay — subtle 60px grid in cyan at 2.5% opacity on all hero sections.
3. Typography is CONDENSED and UPPERCASE for all headlines.
4. Borders are 1px solid, not rounded. No border-radius on cards.
5. CTAs — primary: cyan bg + black text. Secondary: ghost border + muted text.
6. Prices in cyan. Tags: cyan (new), pink border (custom), pink fill (sale).
7. Placeholders — geometric SVG art until real product photos arrive.
8. NO drop shadows. Use borders and background contrast instead.
9. Marquee strip between major sections — scrolling dance keywords.
10. Mobile: single column, hamburger nav, same dark aesthetic.

---

## Google Stitch MCP Integration

This project uses Google Stitch MCP to generate UI screens with AI,
then pulls them into the codebase via stitch-mcp CLI.

Workflow:
  1. Design screens in Google Stitch (stitch.withgoogle.com)
  2. stitch-mcp extracts HTML/CSS via API
  3. Claude Code converts Stitch HTML to Next.js components
  4. Tailwind classes replace inline styles
  5. Real product data wired in

See STITCH.md for full setup guide.

---

## Key Files

```
antigravity/Tectonic/
├── CLAUDE.md              ← You are here
├── AGENTS.md              ← AI rules and component contracts
├── TASKS.md               ← Sprint board
├── PROMPTS.md             ← Ready-to-paste Claude Code prompts
├── SKILLS.md              ← Skill definitions for Claude Code
├── STITCH.md              ← Google Stitch MCP full setup guide
├── lib-content.ts         ← All Lithuanian UI strings
├── lib-products.ts        ← Product catalog data
├── tailwind.config.ts     ← Brand tokens
└── env.example.txt        ← Environment variables
```

---

## Status

- [x] Phase 0 — Brand identity defined
- [x] Phase 0 — Landing page HTML prototype (tectonic-landing.html)
- [ ] Phase 1 — Next.js project bootstrap
- [ ] Phase 2 — Component library (NavBar, Footer, ProductCard)
- [ ] Phase 3 — Landing page converted to Next.js
- [ ] Phase 4 — Product catalog page
- [ ] Phase 5 — Individual product pages
- [ ] Phase 6 — Custom order form + email
- [ ] Phase 7 — CMS integration
- [ ] Phase 8 — Deploy to Vercel

---
name: tectonic-webshop
description: >
  Build, extend, and maintain the TECTONIC šokių rūbai webshop — a dark-themed,
  editorial dance costume brand site built with Next.js 14, TypeScript, and Tailwind CSS.
  Use this skill whenever working on any part of the TECTONIC project: adding pages,
  creating components, styling UI, updating content, building the shop, handling forms,
  exporting to Figma, or deploying. Triggers on any mention of TECTONIC, šokių rūbai,
  dance costumes, the landing page, the webshop, Figma export, or any of the route paths
  (parduotuve, uzsakymas, apie). Also triggers when the user says "add a product", "fix
  the hero", "update the copy", "build the shop page", or anything implying work on this
  project's frontend.
---

# TECTONIC Webshop Skill

## Project Identity

**TECTONIC** — Lithuanian dance costume brand. Electro Dance / Tectonic style.
Dark editorial aesthetic. Lithuanian UI. Next.js 14 + TypeScript + Tailwind.

Always read `CLAUDE.md` and `AGENTS.md` before making any changes.

---

## Quickstart

```bash
# In project root
npm run dev          # localhost:3000
npm run build        # production build check
npm run lint         # ESLint
```

---

## Design Tokens (non-negotiable)

```css
--black:    #050505   /* page bg */
--panel:    #141414   /* cards */
--border:   #1E1E1E   /* borders */
--cyan:     #00E5FF   /* primary accent */
--pink:     #FF2D6B   /* secondary accent */
--white:    #F0EEE8   /* body text */
--muted:    #888888   /* secondary text */
```

Fonts: `Barlow Condensed 900` (headlines) · `Space Mono` (UI labels) · `Barlow 300` (body)

---

## Workflow: Building a New Component

1. Check `AGENTS.md` for the component contract
2. Check `lib/content.ts` for existing strings (add new ones if needed)
3. Create file in the correct `src/components/` subfolder
4. Use CSS tokens (no hardcoded hex values in JSX)
5. No border-radius on cards, buttons, or inputs
6. Test on 375px mobile and 1440px desktop

---

## Workflow: Adding a Product

1. Open `src/lib/products.ts`
2. Add entry following the `Product` interface
3. Assign `placeholderVariant: 1–6` (cycles through geometric SVG styles)
4. Tag: `'new' | 'custom' | 'sale' | undefined`
5. `<ProductCard />` picks it up automatically

---

## Workflow: Updating Lithuanian Text

1. Open `src/lib/content.ts`
2. Find the relevant `CONTENT` key
3. Update the string
4. Never put Lithuanian text directly in JSX

---

## Workflow: Figma Export

The master prototype is `tectonic-landing.html`.

### Method 1 — HTML to Figma plugin (recommended)
1. Open `tectonic-landing.html` in Chrome (via `file://` or localhost)
2. Install [HTML to Figma](https://chrome.google.com/webstore/detail/html-to-figma/ccnkfmkafeaehmfpmlmkoahgijfbmpjh)
3. Click extension → "Import current page" → open in Figma
4. Frame size: 1440px, rename each section frame

### Method 2 — Manual Figma recreation
Use the design tokens and component contracts in `AGENTS.md` to build from scratch.
Section order: Nav → Hero → Marquee → Products → Custom → Social → Story → CTA → Footer

### Figma Colour Styles to create:
| Style name       | Hex value |
|------------------|-----------|
| Brand/Black      | #050505   |
| Brand/OffBlack   | #0E0E0E   |
| Brand/Panel      | #141414   |
| Brand/Border     | #1E1E1E   |
| Brand/Border2    | #2A2A2A   |
| Brand/Cyan       | #00E5FF   |
| Brand/Pink       | #FF2D6B   |
| Text/Primary     | #F0EEE8   |
| Text/Muted       | #888888   |

### Figma Text Styles to create:
| Style name         | Font                    | Size | Weight | Tracking |
|--------------------|-------------------------|------|--------|----------|
| Heading/Display    | Barlow Condensed        | 120px| 900    | -0.01em  |
| Heading/H1         | Barlow Condensed        | 72px | 900    | -0.01em  |
| Heading/H2         | Barlow Condensed        | 56px | 900    | -0.01em  |
| Heading/H3         | Barlow Condensed        | 24px | 700    | 0.03em   |
| UI/Label           | Space Mono              | 10px | 400    | 0.2em    |
| UI/Micro           | Space Mono              | 9px  | 400    | 0.15em   |
| UI/Button          | Space Mono              | 12px | 700    | 0.1em    |
| Body/Regular       | Barlow                  | 16px | 300    | 0        |
| Body/Small         | Barlow                  | 14px | 300    | 0        |

### Figma Components to create:
- `Button/Primary` — cyan bg, black text, no radius
- `Button/Ghost` — transparent, dark border, muted text, no radius
- `Button/NavCTA` — pink border, pink text, no radius
- `ProductCard` — with 6 placeholder variants
- `NavBar` — with logo, links, CTA
- `Tag/New` — cyan border
- `Tag/Custom` — pink border
- `Tag/Sale` — pink filled

---

## Workflow: Deployment

```bash
# Vercel CLI
vercel                    # preview deploy
vercel --prod             # production deploy
```

Environment variables needed:
```
NEXT_PUBLIC_SITE_URL=https://tectonic.lt
CONTACT_EMAIL=info@tectonic.lt
RESEND_API_KEY=xxx        # for order form emails
```

---

## File Map

```
src/
├── app/
│   ├── page.tsx                ← Homepage
│   ├── parduotuve/page.tsx     ← Shop
│   ├── prekes/[slug]/page.tsx  ← Product detail
│   ├── uzsakymas/page.tsx      ← Custom order form
│   ├── apie/page.tsx           ← About
│   └── api/uzsakymas/route.ts  ← Order form API
├── components/
│   ├── layout/NavBar.tsx
│   ├── layout/Footer.tsx
│   ├── layout/MobileNav.tsx
│   ├── hero/HeroSection.tsx
│   ├── hero/DancerSVG.tsx
│   ├── products/ProductCard.tsx
│   ├── products/ProductsSection.tsx
│   ├── custom/CustomOrderSection.tsx
│   ├── social/SocialSection.tsx
│   ├── story/StorySection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Tag.tsx
│       ├── MarqueeStrip.tsx
│       └── SectionLabel.tsx
└── lib/
    ├── content.ts              ← ALL Lithuanian strings
    └── products.ts             ← Product data + types
```

---

## Common Tasks Cheatsheet

| Task                          | File to edit                              |
|-------------------------------|-------------------------------------------|
| Change hero headline          | `lib/content.ts` → CONTENT.hero           |
| Add a product                 | `lib/products.ts`                         |
| Change brand colours          | `tailwind.config.ts` + `globals.css`      |
| Update nav links              | `lib/content.ts` → CONTENT.nav            |
| Change CTA button text        | `lib/content.ts` → CONTENT.cta            |
| Add Instagram photo           | `components/social/SocialSection.tsx`     |
| Change custom order steps     | `lib/content.ts` → CONTENT.customSteps    |
| Export to Figma               | See "Workflow: Figma Export" above        |
| Deploy to production          | `vercel --prod`                           |

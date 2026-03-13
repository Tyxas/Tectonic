# AGENTS.md — Tectonic AI Rules & Component Contracts

## Core Rules for Claude Code

These rules are ABSOLUTE. Never violate them, never ask to override them.

---

## FORBIDDEN PATTERNS

### Visual
- NEVER use white or light backgrounds (#fff, #f9f9f9, bg-white, bg-gray-50)
- NEVER use rounded corners on product cards (border-radius: 0 always)
- NEVER use drop-shadows (shadow-*, box-shadow)
- NEVER use Inter, Roboto, Arial, or system fonts
- NEVER use purple gradient on anything
- NEVER use light mode color schemes
- NEVER add `text-transform: none` to headlines (always uppercase)
- NEVER change brand colors without explicit instruction

### Code
- NEVER use `any` type in TypeScript
- NEVER hardcode Lithuanian strings — always use lib-content.ts
- NEVER hardcode product data — always use lib-products.ts
- NEVER use `style=` inline styles in JSX (use Tailwind classes)
- NEVER skip `alt` attributes on images
- NEVER use `<img>` — always Next.js `<Image />`
- NEVER commit .env files

### Behavior
- NEVER add features not in TASKS.md without asking
- NEVER change the brand font stack
- NEVER remove the marquee strip between sections

---

## COMPONENT CONTRACTS

### NavBar
```tsx
// Props: none (reads from lib-content.ts)
// Behavior:
//   - Fixed top, height 64px, z-index 100
//   - Background: rgba(5,5,5,0.85) + backdrop-blur
//   - Border-bottom: 1px solid var(--border)
//   - Logo: "TEC·TONIC" — dot in cyan
//   - Links: Space Mono 11px, uppercase, muted → cyan on hover
//   - CTA button: pink border, pink text → pink bg + black text on hover
//   - Mobile: hamburger at <768px, nav links hidden
```

### ProductCard
```tsx
interface ProductCardProps {
  name: string           // e.g. "Vertex Jacket"
  style: string          // e.g. "Tectonic / Electro"
  price: number | string // e.g. 89 or "nuo 75€"
  tag?: 'new' | 'custom' | 'sale'
  salePercent?: number   // e.g. 20 (shown as "-20%")
  image?: string         // path to product image
  slug: string           // for /kolekcija/[slug]
}
// Rules:
//   - Card bg: #0E0E0E, hover: #141414
//   - Image area: aspect-[3/4], overflow-hidden
//   - Image: subtle scale(1.03) on hover, 0.5s cubic-bezier
//   - No border-radius anywhere
//   - Price: Barlow Condensed 900, cyan
//   - Arrow icon: 32x32 border box, muted → cyan on hover
//   - Tag positioning: absolute top-4 left-4
```

### MarqueeStrip
```tsx
// Props: items: string[], accentEvery?: number
// Behavior:
//   - Infinite left scroll, 22s linear
//   - bg: #0E0E0E, border top+bottom: 1px solid #1E1E1E
//   - Text: Barlow Condensed 600, 13px, 0.25em letter-spacing, uppercase
//   - Separator: ✦ in pink (#FF2D6B)
//   - Duplicate items for seamless loop
```

### SectionLabel
```tsx
// Usage: <SectionLabel num="01" text="Kolekcija" />
// Output: [cyan num] [muted text] [————————————]
// Font: Space Mono 10px, 0.25em letter-spacing, uppercase
// Line: flex-1 height 1px #1E1E1E
```

### GeometricPlaceholder
```tsx
// Props: variant: 1|2|3|4|5|6, className?: string
// Returns: SVG geometric art for product image placeholder
// Colors: cyan (#00E5FF) strokes, pink (#FF2D6B) accents
// Background: dark gradient per variant
// Remove once real photos are added
```

### CustomOrderForm
```tsx
// Fields:
//   - Vardas (name) — text, required
//   - El. paštas (email) — email, required
//   - Šokio stilius (dance style) — select: Tectonic, Sceninis, Kitas
//   - Aprašymas (description) — textarea, required
//   - Dydis (size) — text (measurements)
//   - Terminas (deadline) — date
// Submit: POST to /api/contact
// Success: show confirmation, no redirect
// Font: Space Mono for labels, Barlow for inputs
```

---

## FILE STRUCTURE

```
src/
├── app/
│   ├── layout.tsx              ← NavBar + Footer, font imports
│   ├── page.tsx                ← Landing page
│   ├── kolekcija/
│   │   ├── page.tsx            ← Product catalog
│   │   └── [slug]/page.tsx     ← Product detail
│   ├── individualus/page.tsx   ← Custom orders
│   ├── apie/page.tsx           ← Brand story
│   ├── kontaktai/page.tsx      ← Contact
│   └── api/contact/route.ts    ← Form submission handler
├── components/
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   ├── MarqueeStrip.tsx
│   ├── SectionLabel.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── GeometricPlaceholder.tsx
│   ├── forms/
│   │   └── CustomOrderForm.tsx
│   └── ui/
│       ├── BtnPrimary.tsx
│       └── BtnGhost.tsx
├── lib/
│   ├── content.ts              ← All LT/EN strings
│   ├── products.ts             ← Product catalog
│   └── stitch.ts               ← Stitch MCP helpers
└── styles/
    └── globals.css             ← CSS variables, base styles
```

---

## STITCH MCP RULES

When using Google Stitch MCP output:
1. Extract HTML from Stitch using `get_screen_code` tool
2. Strip all inline styles — convert to Tailwind utilities
3. Replace generic fonts with brand fonts
4. Replace Stitch color values with CSS variables
5. Convert static HTML to typed React components with props
6. Add Lithuanian content from lib-content.ts
7. Never ship Stitch-generated HTML directly — always convert

When Stitch generates a design that conflicts with brand rules:
- Override Stitch output, do NOT override brand rules
- Stitch is a starting point, not the final answer

---

## PERFORMANCE TARGETS

- Lighthouse score: 90+ on all categories
- LCP: < 2.5s
- CLS: < 0.1
- All images: Next.js Image with proper width/height
- Fonts: preload in layout.tsx
- No unused CSS (Tailwind purge enabled)

---

## GIT RULES

- Branch per feature: `feat/product-card`, `feat/custom-form`
- Commit messages: `feat: add ProductCard component`
- Never commit directly to main
- PR required for all merges

# PROMPTS.md — Ready-to-Paste Claude Code Prompts

Copy-paste these prompts directly into Claude Code (Antigravity) for each task.
Each prompt includes full context — no need to explain the project first.

---

## PHASE 1 — Bootstrap

### 1A. Create Next.js project
```
Bootstrap a new Next.js 14 project called "tectonic-website" with TypeScript,
Tailwind CSS, and App Router. After creation:

1. Replace tailwind.config.ts with the brand config (colors, fonts below)
2. Update globals.css with CSS custom properties
3. Add Google Fonts to layout.tsx: Barlow Condensed, Space Mono, Barlow
4. Verify dark background (#050505) shows on localhost:3000

Brand colors for tailwind.config.ts:
  black: '#050505'
  'off-black': '#0E0E0E'
  panel: '#141414'
  border: { DEFAULT: '#1E1E1E', hover: '#2A2A2A' }
  cyan: '#00E5FF'
  pink: '#FF2D6B'
  'warm-white': '#F0EEE8'
  muted: '#888888'

Font families:
  heading: ['Barlow Condensed', 'sans-serif']
  mono: ['Space Mono', 'monospace']
  body: ['Barlow', 'sans-serif']
```

### 1B. Create lib/content.ts
```
Create src/lib/content.ts for the TECTONIC dance costume webshop.
All Lithuanian UI strings go here. Structure:

export const content = {
  brand: { name: 'TECTONIC', tagline: 'Designed to move.' },
  nav: {
    links: {
      products: 'Kolekcija',
      custom: 'Individualūs',
      about: 'Apie mus',
      contact: 'Kontaktai',
    },
    cta: 'Užsakyti →',
  },
  hero: {
    eyebrow: 'Šokių rūbai · Electro dance costumes',
    headline: ['JUDĖK', 'RYŠKIAI.', 'DRĄSIAI.'],
    sub: 'Rūbai sukurti šokiui — ne tik parodymui...',
    cta1: 'Peržiūrėti kolekciją →',
    cta2: 'Individualus užsakymas',
    stats: [
      { val: '200+', label: 'Klientų' },
      { val: '48h', label: 'Sąmata' },
      { val: '100%', label: 'Individualūs' },
    ],
  },
  // ... continue for all sections
}

Include all sections: marquee, products, custom, social, story, cta, footer.
Export as const with satisfies type annotation.
```

### 1C. Create lib/products.ts
```
Create src/lib/products.ts for the TECTONIC dance costume webshop.
Use this TypeScript interface:

interface Product {
  id: string
  slug: string
  name: string
  style: string
  styleKey: 'tectonic' | 'sceninis' | 'komanda' | 'treniruote'
  price: number | string
  tag?: 'new' | 'custom' | 'sale'
  salePercent?: number
  description: string
  features: string[]
  sizes: string[]
  image?: string
  placeholderVariant: 1 | 2 | 3 | 4 | 5 | 6
}

Create these 6 products:
1. Vertex Jacket — Tectonic/Electro — 89€ — new — variant 1
2. Circuit Bodysuit — Sceninis/Stage — 120€ — custom — variant 2
3. Frequency Pants — Treniruotė/Training — 64€ — sale 20% — variant 3
4. Pulse Top — Tectonic/Electro — 55€ — new — variant 4
5. Seismic Set — Varžybos/Competition — 145€ — variant 5
6. Formation Kit — Crew/Komanda — "nuo 75€" — custom — variant 6

Write real Lithuanian product descriptions for each (2-3 sentences).
Export as const products array and named getProduct(slug) helper.
```

---

## PHASE 2 — Components

### 2A. NavBar
```
Create src/components/NavBar.tsx for TECTONIC webshop. Rules from AGENTS.md:
- Fixed top, 64px height, z-index 100
- Background: rgba(5,5,5,0.85) + backdrop-blur-md
- Border-bottom: 1px solid #1E1E1E (becomes #2A2A2A on scroll)
- Logo: "TEC·TONIC" — Space Mono or Barlow Condensed 900, the dot (·) is cyan #00E5FF
- Nav links: Space Mono 11px, uppercase, letter-spacing 0.12em, color #888 → #00E5FF on hover
- CTA button: border-1 pink, pink text → pink bg + black text on hover, no rounded corners
- Links from content.nav (import from lib/content.ts)
- Mobile (<768px): show only logo + hamburger icon, links hidden
- Hamburger: opens a full-height dark overlay with links stacked
- Add scroll listener: borderBottomColor changes from #1E1E1E to #2A2A2A after 60px scroll
- TypeScript, no props needed
```

### 2B. ProductCard
```
Create src/components/products/ProductCard.tsx for TECTONIC.
Import Product type from lib/products.ts.

Props: product: Product

Rules from AGENTS.md:
- Card background: #0E0E0E, hover: #141414, transition 0.3s
- NO border-radius anywhere
- Image area: aspect-[3/4], overflow-hidden, relative
  → hover: scale(1.03) on inner element, 0.5s cubic-bezier(0.25,0.46,0.45,0.94)
  → shows <GeometricPlaceholder variant={product.placeholderVariant} /> until image added
- Tag: absolute top-4 left-4, Space Mono 9px, uppercase, letter-spacing 0.15em
  → 'new': border cyan, text cyan
  → 'custom': border pink, text pink
  → 'sale': bg pink (filled), text black, shows "-{salePercent}%"
- Bottom info: padding 20px, border-top 1px #1E1E1E
  → style line: Space Mono 9px, #888, uppercase, letter-spacing 0.2em
  → name: Barlow Condensed 700, 20px, uppercase, #F0EEE8, letter-spacing 0.03em
  → footer row: price left, arrow box right
  → price: Barlow Condensed 900, 22px, #00E5FF
  → arrow: 32x32, border 1px #2A2A2A, muted → hover: border cyan, text cyan
- Hover on card: parallax on SVG (mouse position → ±5px translate on SVG)
- Link: entire card wraps in <Link href={/kolekcija/${product.slug}}>
- Full TypeScript with proper types
```

### 2C. MarqueeStrip
```
Create src/components/MarqueeStrip.tsx for TECTONIC.
Props: items: string[] (alternates with ✦ separator), speed?: number (default 22)

Rules:
- bg: #0E0E0E, border-top and border-bottom: 1px solid #1E1E1E
- padding: 14px 0
- Duplicate items array for seamless infinite loop
- Animation: translateX(0) → translateX(-50%), linear, infinite
- Text: Barlow Condensed 600, 13px, 0.25em letter-spacing, uppercase, color #888
- Separator ✦: color #FF2D6B (pink)
- No interaction needed, pure CSS animation
- speed prop controls animation-duration

Default items for TECTONIC:
['Electro Dance', 'Tectonic Style', 'Šokių Rūbai', 'Individualūs Kostiumai',
 'Made in Lithuania', 'Free Movement', 'Stage Ready', 'Vilnius']
```

### 2D. GeometricPlaceholder
```
Create src/components/products/GeometricPlaceholder.tsx for TECTONIC.
Props: variant: 1|2|3|4|5|6, className?: string

Returns SVG geometric art placeholders for product images.
All SVGs: viewBox="0 0 300 400", width/height 100%
Background: dark gradient rectangle (variant-specific)
Strokes: #00E5FF (cyan) primary, #FF2D6B (pink) accents
Stroke-width: 1.5 for shapes, 0.5 for detail lines

Variant 1: Large triangle centered, cyan strokes, dashed inner circle pink
Variant 2: Rotated rectangle with overlapping plain rect, horizontal pink line
Variant 3: Concentric circles with crosshair lines, mixed cyan/pink
Variant 4: Pentagon outline pink, inner fill pink 10% opacity
Variant 5: X diagonal lines cyan, circle at center with fill
Variant 6: Three nested squares, alternating cyan and pink borders

Each variant has different dark gradient background:
1: #0a0a0a → #1a0a1a (purple tint)
2: #0a0a0a → #0a1a1a (teal tint)
3: #0a0a0a → #1a1a0a (yellow tint)
4: #0a0a0a → #1a0a0a (red tint)
5: #0a0a0a → #0a0a1a (blue tint)
6: #0a0a0a → #100a1a (violet tint)

Center: slightly offset for visual interest (not perfectly centered)
Add opacity: 0.15 small ✦ shapes scattered in background
Full TypeScript.
```

---

## PHASE 3 — Landing Page

### 3A. Full landing page
```
Create src/app/page.tsx for TECTONIC — the full landing page.
Import and use all components built in Phase 2.
Import content from lib/content.ts.
Import products (first 6) from lib/products.ts.

Sections in order:
1. HeroSection — split grid layout (see tectonic-landing.html for reference)
2. MarqueeStrip — dance keywords
3. ProductsTeaser — section label, headline, 3-col ProductGrid (6 cards)
4. CustomOrderSection — circle animation + 4 steps + CTA
5. SocialSection — 5-cell Instagram grid placeholder + handle
6. BrandStorySection — ghost "TCK" text, quote, brand tags
7. CTASection — big bg text, headline, email CTA

Each section separated by border-bottom: 1px solid #1E1E1E.
Import metadata for SEO:

export const metadata = {
  title: 'TECTONIC — Šokių Rūbai · Electro Dance Costumes Vilnius',
  description: 'Profesionalūs šokių kostiumai Vilniuje. Tectonic, sceniniai, varžybiniai rūbai. Individualūs užsakymai. Nemokama konsultacija.',
}

Fully typed TypeScript, no 'any'.
```

---

## PHASE 8 — Stitch MCP

### 8A. Extract and convert Stitch screen
```
I have a screen designed in Google Stitch. Use the Stitch MCP tool
get_screen_code to fetch it:
  projectId: [YOUR_PROJECT_ID]
  screenId: [YOUR_SCREEN_ID]

After fetching the HTML:
1. Read AGENTS.md skill: stitch-to-nextjs
2. Convert the HTML to a TypeScript React component
3. Component name: [ComponentName]
4. Remove all inline styles → Tailwind classes
5. Replace all colors with TECTONIC brand values
6. Replace all fonts with brand font stack
7. Add proper props interface
8. Ensure it works on dark background (#050505)
9. Show me the final component code
```

### 8B. Build full site from Stitch
```
Use the Stitch MCP build_site tool to extract all screens from project
[YOUR_PROJECT_ID] and map them to routes:
  / → screen [HERO_SCREEN_ID]
  /kolekcija → screen [CATALOG_SCREEN_ID]
  /individualus → screen [FORM_SCREEN_ID]

For each extracted screen:
1. Follow SKILLS.md stitch-to-nextjs skill
2. Convert to proper Next.js page component
3. Save to correct app/ directory
4. Report what was done and any issues
```

---

## UTILITY PROMPTS

### Fix brand violation
```
Review this component against AGENTS.md FORBIDDEN PATTERNS.
Find and fix ALL violations:
- Any white or light backgrounds
- Any rounded corners on cards
- Any drop shadows
- Any non-brand fonts
- Any hardcoded Lithuanian strings (should be in lib/content.ts)
- Any hardcoded product data (should be in lib/products.ts)

[paste component code]
```

### Mobile check
```
Review this component for mobile responsiveness.
Apply SKILLS.md mobile-first rules.
Test at these breakpoints: 375px, 640px, 768px, 1024px.
Fix any layout breaks, touch target sizes under 44px, or text overflow.

[paste component code]
```

### Convert HTML to Next.js
```
Convert this raw HTML to a Next.js TypeScript component.
Apply TECTONIC brand rules from AGENTS.md.
Component name: [name]
Replace static text with content.ts imports.

[paste HTML]
```

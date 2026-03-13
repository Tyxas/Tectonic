# TASKS.md — Tectonic Sprint Board

Last updated: 2026-03-13
Status: Phase 0 complete → Starting Phase 1

---

## PHASE 0 — Bootstrap & Brand ✅

- [x] Brand identity defined (colors, fonts, name)
- [x] Landing page HTML prototype created (`tectonic-landing.html`)
- [x] Antigravity project files created (CLAUDE.md, AGENTS.md, TASKS.md)
- [x] Google Stitch MCP research complete (see STITCH.md)
- [x] SKILLS.md defined

---

## PHASE 1 — Next.js Bootstrap

- [ ] `npx create-next-app@latest tectonic-website --typescript --tailwind --app`
- [ ] Copy `tailwind.config.ts` from Antigravity folder
- [ ] Copy `globals.css` (CSS variables, base font imports)
- [ ] Install Google Fonts (Barlow Condensed, Space Mono, Barlow) in `layout.tsx`
- [ ] Create `lib/content.ts` with all Lithuanian strings
- [ ] Create `lib/products.ts` with product catalog
- [ ] Set up `env.example.txt` and `.env.local`
- [ ] Verify `localhost:3000` loads with dark background

---

## PHASE 2 — Core Components

- [ ] `NavBar.tsx` — fixed, logo, links, mobile hamburger
- [ ] `Footer.tsx` — 4-column, brand tagline, links
- [ ] `MarqueeStrip.tsx` — infinite scroll, configurable items
- [ ] `SectionLabel.tsx` — num + text + line
- [ ] `BtnPrimary.tsx` — cyan bg, black text, hover effect
- [ ] `BtnGhost.tsx` — border, muted text, hover effect
- [ ] `GeometricPlaceholder.tsx` — 6 variants of SVG art
- [ ] `ProductCard.tsx` — full component with hover parallax
- [ ] `ProductGrid.tsx` — responsive 3-col → 2-col → 1-col

---

## PHASE 3 — Landing Page (/)

- [ ] Hero section — split grid, dancer SVG, stats
- [ ] Marquee strip — dance keywords
- [ ] Products teaser — 6 cards (from lib/products.ts)
- [ ] Custom orders section — circle animation + steps
- [ ] Instagram grid — 5 placeholder cells
- [ ] Brand story — ghost text, quote, tags
- [ ] CTA section — background text, email CTA
- [ ] Mobile responsive check (375px, 768px)

---

## PHASE 4 — Product Catalog (/kolekcija/)

- [ ] Page with all products from lib/products.ts
- [ ] Filter bar — by style (Tectonic, Sceninis, Komanda, Treniruotė)
- [ ] Sort — by price, by newest
- [ ] ProductGrid with 3-col layout
- [ ] SEO metadata (title, description per category)
- [ ] Empty state (if filters return 0 results)

---

## PHASE 5 — Product Detail (/kolekcija/[slug]/)

- [ ] Product images (placeholder SVG → real photos later)
- [ ] Product name, style tag, price
- [ ] Size guide (Lithuanian size chart)
- [ ] Description (from lib/products.ts)
- [ ] "Individualus užsakymas" CTA
- [ ] Related products (3 cards at bottom)
- [ ] SEO metadata with product name

---

## PHASE 6 — Custom Orders (/individualus/)

- [ ] Hero section with circle animation
- [ ] 4-step process display
- [ ] `CustomOrderForm.tsx` — all fields per AGENTS.md
- [ ] Form validation (client-side)
- [ ] `/api/contact/route.ts` — POST handler
- [ ] Email notification (Resend or nodemailer)
- [ ] Success confirmation state

---

## PHASE 7 — Supporting Pages

- [ ] `/apie/` — brand story, "TCK" ghost text, quote, tags
- [ ] `/kontaktai/` — email, Instagram link, location (Vilnius)
- [ ] 404 page — dark, branded, links back home

---

## PHASE 8 — SEO & Performance

- [ ] `sitemap.ts` — all routes
- [ ] `robots.txt`
- [ ] OpenGraph images per page
- [ ] JSON-LD schema (WebSite, Product)
- [ ] Lighthouse audit — target 90+ all categories
- [ ] Image optimization (WebP, proper sizes)
- [ ] Font preloading in layout.tsx

---

## PHASE 9 — Deploy

- [ ] Vercel project created
- [ ] Domain connected (tectonic.lt)
- [ ] Environment variables set in Vercel dashboard
- [ ] Production build passes (`npm run build`)
- [ ] Preview deployment tested on mobile
- [ ] Analytics added (Vercel Analytics or Plausible)
- [ ] Launch 🎉

---

## BACKLOG (future)

- [ ] Real product photography (replace SVG placeholders)
- [ ] Shopping cart + checkout (Stripe)
- [ ] Instagram feed integration (real photos)
- [ ] Size recommendation tool (enter measurements → suggest size)
- [ ] Lithuanian language toggle (LT/EN)
- [ ] Email newsletter signup
- [ ] Blog/šokių kultūra articles for SEO

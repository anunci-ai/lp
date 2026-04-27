# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **anuncia.ai** — an AI-powered SaaS that turns a single product photo into marketplace-ready listings (images, SEO title, description, tags) for Mercado Livre, Shopee, and Amazon BR in ~30 seconds. All copy is in Brazilian Portuguese (pt-BR).

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build (must pass before shipping)
- `npm run lint` — run ESLint

## Architecture

**Next.js 16 App Router** with TypeScript. All pages are under `src/app/`, components under `src/components/`.

### Key files
- `src/app/page.tsx` — composes all sections in order
- `src/app/globals.css` — Tailwind v4 CSS-first config, brand tokens (`--brand-*`), gradient utilities (`.gradient-brand`, `.gradient-text`, `.glass-card`, `.dot-grid`, blob animations), all defined via `@layer utilities` and `@theme`
- `src/components/sections/` — one file per landing page section (Hero, ComoFunciona, Marketplaces, SocialProof, Pricing, FAQ, FinalCTA, Footer)
- `src/components/BeforeAfter.tsx` — interactive before/after slider (mouse + touch drag, auto-reveal animation on mount)
- `src/components/GradientButton.tsx` — shimmer gradient CTA button with Framer Motion hover/tap
- `src/components/AnimatedBlobs.tsx` — CSS-animated background blobs used in Hero
- `src/components/Navbar.tsx` — sticky navbar with scroll-aware blur backdrop

### Design system
- **Dark mode by default** — background `#06060F`, surfaces `#0B0B18` / `#111122`
- **Brand gradient** — coral `#FF5135` → magenta `#E8399E` → violet `#7C3AED`
- **Tailwind v4** — config is CSS-first in `globals.css` using `@theme {}` and `@layer utilities {}`, not `tailwind.config.ts`
- All animated/interactive components have `"use client"` directive
- Framer Motion `ease` arrays in `Variants` objects must be cast: `ease: [...] as [number, number, number, number]`

### Adding shadcn components
```bash
npx shadcn@latest add <component>
```

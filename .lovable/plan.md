
## Understanding

Neurvyn is positioning itself not as a SaaS product but as an **operational intelligence ecosystem for SMBs**. The site must feel like *living operational infrastructure* — not a startup landing page. Five product layers stack into one narrative:

```
Ledger → Solutions → OS → Intelligence → Autopilot
(daily utility → implementation → connection → understanding → execution)
```

The narrative spine across every page:
**Paper bookkeeping → Billing software → Connected systems → Operational intelligence → Autonomous business.**

## Brand system (locked from docs)

- **Background**: `#08090D` Deep Operational Black
- **Surface**: `#11131A` Graphite
- **Primary accent**: `#7B61FF` Neural Violet
- **Secondary accent**: `#5EA2FF` Intelligence Blue
- **Glow accent**: `#A78BFA` Signal Purple
- **Text**: `#F5F7FA` primary / `#A0A7B5` secondary
- **Type**: Geist (display + UI), Inter (body fallback)
- **Feel**: calm, layered, infrastructural. Slow > fast. Subtle > flashy.
- **Vocabulary**: operational intelligence, connected systems, ecosystem, workflows, business memory. **Avoid**: AI chatbot, disruptive, revolutionary, all-in-one, SaaS platform.

## Sitemap (v1 scope)

```
/                  Home — full narrative
/ecosystem         Ecosystem overview — stack visualization
/ledger            Daily operational utility layer
/solutions         Implementation bridge
/os                Connected operational layer
/intelligence      Insight & recommendations layer
/autopilot         Autonomous execution layer
/about             Mission, vision, team
/contact           Talk to us
```

Deferred to a later round (kept in sitemap, but not built v1): `/resources`, `/blog`, `/case-studies`, `/careers`, `/privacy`, `/terms`.

## Homepage section flow

1. **Hero** — "From Business Software to Operational Intelligence" + animated signal/node network (not a dashboard screenshot)
2. **The Shift** — 5-stage evolution timeline
3. **Why Current Software Breaks** — tension: disconnected tools, reactive systems
4. **Ecosystem Architecture** — interactive stack of the 5 layers
5. **Operational Intelligence** — defines the category
6. **Tech Solutions Bridge** — implementation trust
7. **Future Roadmap** — Data → Insights → Decisions → Actions → Autopilot
8. **Final Positioning** — "The next era is operational intelligence. Neurvyn is building that layer."
9. **Footer** with full ecosystem nav

Product pages (Ledger, Solutions, OS, Intelligence, Autopilot) share a template: hero → role-in-ecosystem → capabilities → how it connects to neighbors → CTA. Ecosystem page is the visual map tying all five together.

## Motion direction

- **Ambient**: ultra-slow background mesh + signal pulses on hero
- **Signal**: glowing lines traveling between ecosystem nodes
- **Scroll**: smooth, layered reveals (Lenis + Framer Motion)
- **Interaction**: subtle node glow on hover, no bounce/parallax gimmicks
- **Loading**: signal-initialization feel
- No 3D / R3F in v1 — use SVG + Canvas-light + Motion for React. Adds polish without runtime risk.

## Technical approach

- **Stack**: existing TanStack Start template, Tailwind v4 (already configured), Motion for React, Lenis for smooth scroll
- **Design tokens**: replace current `src/styles.css` palette with the Neurvyn dark system in `oklch`; add gradient + glow tokens (`--gradient-signal`, `--shadow-glow`)
- **Routing**: one route file per page under `src/routes/` (flat dot-separated). Each gets its own `head()` with unique title/description/og:title/og:description
- **Components** (in `src/components/`):
  - `SiteHeader`, `SiteFooter`
  - `SignalNetwork` (hero canvas/SVG animation)
  - `EcosystemStack` (5-layer interactive visual reused on Home + Ecosystem)
  - `EvolutionTimeline`, `RoadmapFlow`
  - `ProductPageShell` (template for the 5 product pages)
  - `AmbientMesh` (background atmosphere)
  - `SignalButton`, `EcosystemCard`, `SectionLabel`
- **Fonts**: load Geist + Inter via Google Fonts in `__root.tsx`
- **No backend** in v1 — contact form is a UI shell; we can wire Lovable Cloud later if you want submissions stored

## What I'll *not* do (unless you ask)

- No Sanity CMS, no Vercel-specifics — staying on the TanStack template
- No React Three Fiber 3D — adds weight and Worker risk; SVG + Motion handles it
- No blog/case-studies/careers content yet
- No real contact submissions (Lovable Cloud add-on)

## Open questions before I build

1. **Scope confirmation** — build all 9 pages in one pass, or land Home + Ecosystem + Ledger first and iterate?
2. **Contact form** — UI-only shell, or enable Lovable Cloud now so submissions persist + you get an email?
3. **Logo** — none provided. Use a clean wordmark "Neurvyn" + a generated geometric signal-mark, or wait for your logo?

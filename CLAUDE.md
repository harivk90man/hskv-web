# hskv-web — project rules

Public website for Hotel Sri Krishna Vilas (pure-veg restaurant, 95/129 East Car Street, Chidambaram) and
its sweets brand Sri Amirthas. Static Vite + React, no backend. The back-of-house app is the separate `hskv` repo.

## Content
- Every word and number lives in `src/data/site.js`. Change text there, not in components.
- Facts come from the hotel's Instagram (@hotelsrikrishnavilas) and public listings. Never invent dishes, prices or history; ask the owner.
- Phones 04144 220207 / 73390 80207. Hours 7 AM – 10 PM daily. Instagram @hotelsrikrishnavilas.
- Food photos over people. Promo graphics and screenshots stay out of the gallery.

## Design
- Tokens on `:root` in `src/index.css`; dark via `prefers-color-scheme` and `[data-theme]`.
- Brand blue `#034EA9`, green `#6DC248` (accent only), cream paper `#FBF7EF`, turmeric `#E8A33D` highlights.
- Fonts: DM Serif Display (headings), DM Sans (body), Noto Sans Tamil for Tamil with `lang="ta"`.
- Mobile first, 20px gutters, no horizontal scroll, touch targets ≥44px, honour `prefers-reduced-motion`.

## Identity & infra
- Git author: Hari <hari.gowri@hotmail.com>. Never happiemax in this repo. Commits short and human, no AI attribution.
- GitHub: harivk90man/hskv-web (public). Keep the repo under harivk90man or Vercel auto-deploy stops.
- Vercel project `hskv-web`, framework Vite, root `/`, output `dist/`, auto-deploys `main`.
- If the site gets its own domain, update the canonical, `og:url`, `og:image`, robots.txt and sitemap.xml.

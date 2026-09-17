# Hotel Sri Krishna Vilas — website

Public website for Hotel Sri Krishna Vilas, the pure-vegetarian restaurant and Sri Amirthas
sweets counter on East Car Street, Chidambaram.

Vite + React, static, no backend. Deployed on Vercel from `main`.

## Run

```
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/
```

## Where things live

- `src/data/site.js` — every word and number on the site: contact details, hours, dishes,
  menu, sweets, gallery, reels, ratings, reviews. Edit here, not in components.
- `src/sections/*.jsx` — one component per section of the page, top to bottom.
- `src/index.css` — design tokens (brand blue `#034EA9`, green `#6DC248`, cream paper) and all
  styling, light and dark.
- `src/lib/hours.js` — the "Open now" pill, computed in IST.
- `public/gallery/` — photos from the hotel's own Instagram posts.
- `index.html` — title, description, Open Graph tags and the Restaurant schema for Google.

## Adding photos

Drop a JPG into `public/gallery/` and add it to `gallery`, `signature` or `sweets.images`
in `src/data/site.js`. Food photos only; keep promo graphics and screenshots out of the gallery.
Reels are embedded by Instagram shortcode in the `reels` list and load only when tapped.

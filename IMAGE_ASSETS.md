# Production image system — v6

All images used by the website are local WebP files under `public/images/unique/`.

- `services/<category>/<service>-hero.webp` — 1600×1000 service hero
- `services/<category>/<service>-cta.webp` — dedicated CTA image
- `services/<category>/<service>-sidebar.webp` — dedicated service sidebar image
- `services/<category>/<service>-related.webp` — related-service card image
- `services/<category>/<service>-card.webp` — compact service-card image
- `services/<category>/<service>-thumb.webp` — category-list thumbnail
- `categories/<category>/` — Home, Directory, Hero, Aside and Band variants
- `site/` — one-off page photography (Home, Services, About, Contact, FAQ, etc.)
- `gallery/` — dedicated gallery imagery

The production directory contains **379 WebP assets and zero exact duplicate files**. Old source-image directories are intentionally not shipped in `public/`.

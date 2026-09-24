# Al Mizan RAK Website — Next.js v6

Production-oriented Next.js redesign for **AL MIZAN Typing & Documents Clearing, Ras Al Khaimah, UAE**.

## v6 changes

- **379 unique local WebP assets** used by the live site; exact duplicate-file scan = **0**.
- Every one of the **52 service pages** has separate high-resolution assets for hero, CTA, sidebar and supporting-card placements.
- Service category photography also has separate Home / Directory / Hero / Aside / Band variants so the same file is not repeated across a page.
- Large service heroes are up to **1600×1000 WebP**; smaller card/thumbnail files are separately pre-sized so cards do not download hero-sized media.
- Old duplicated stock/office source folders were removed from `public/`; only final production images remain.
- Image optimizer first-request overhead removed: pre-compressed WebP files are served directly with long-lived immutable cache headers.
- **Space Grotesk** headings and **DM Sans** body are handled with `next/font`, so the English fonts are self-hosted by Next after build and stay consistent on desktop/mobile.
- Arabic/Urdu fonts are deferred (`preload: false`) to keep the English critical path light while preserving correct Arabic/Urdu typography when those locales are opened.
- Homepage now has a **5.2-second entrance experience on every homepage entry/refresh**. The actual page loads underneath the overlay.
- Contact form now includes a required **Email address** field and passes it into the WhatsApp enquiry message.
- Dev command uses **Turbopack** and no longer deletes `.next` on every start.
- Below-the-fold sections use `content-visibility` to reduce initial rendering work.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and Next.js will redirect to English (`/en/`).

For a clean dev cache only when you actually need it:

```bash
npm run dev:fresh
```

## Production

```bash
npm run build
npm start
```

For meaningful speed testing, always test the production build (`npm run build && npm start`) rather than judging performance from the Next.js development server.

## Main contact details

- Email: `almizan.rakuae@gmail.com`
- Phone / WhatsApp: `+971 56 169 0094`
- Google Maps: `https://maps.app.goo.gl/ctdcqVp287wK4XZW9`

## Entrance duration

The requested homepage intro duration is controlled in:

`components/SiteEntrance.tsx`

```ts
const DURATION = 5200;
```

The exit/progress animation timing is defined near the end of `app/globals.css` under **v6 — SPEED, LOCAL FONT CONSISTENCY & 5.2s HOME ENTRANCE**.

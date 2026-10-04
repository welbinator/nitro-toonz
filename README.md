# Nitro Toonz

Custom hot rod cartoon art by Nitro Toonz (Rouse). "I cartoon your imagination."

Static Astro site, deployed to Cloudflare Pages.

## Facts (verified)
- Artist surname: Rouse. Contact email: nrouse1959@gmail.com
- Brand: Nitro Toonz. Tagline: "I cartoon your imagination."
- Niche: custom automotive cartoon art (hot rods, muscle cars, rat rods, trucks, bikes, caricatures)
- Lead source: Apex "old way" Facebook campaign, Sep 29 2026

## Stack
- Astro 5 static build (`npm run build` -> `dist/`)
- Shared `src/layouts/Layout.astro` (design system + header/footer + reveal script)
- `src/components/HotRod.astro` custom inline-SVG cartoon hot rod
- Pages: index, garage, commissions, about, contact, 404

## Design
- Kustom-kulture garage: greasy black canvas, flame orange/red + nitro teal + gold accents
- Fonts: Anton (display), Bungee (brand), Barlow Condensed (nav/labels), Archivo (body)
- No em dashes anywhere (hard rule). Scroll-reveal fails open.

## Commission form
No server backend. The form builds a prefilled `mailto:` to nrouse1959@gmail.com; user
attaches photos in their mail client. Swap to a real backend if volume warrants.

## Placeholders / TODO when real assets arrive
- The Garage panels are honest "fresh build loading" placeholders. Drop real artwork
  images into a gallery when Nitro sends files.
- No prices, location, or live-event info yet (unknown / not fabricated). Add when confirmed.

## Deploy
```bash
cd ~/nitro-toonz
export CLOUDFLARE_API_TOKEN=$(python3 ~/.hermes/scripts/creds.py get cloudflare_api_token)
export CLOUDFLARE_ACCOUNT_ID=a3b10674bc6373a81438a11c1c93b3de
npm run build
npx wrangler pages deploy dist --project-name=nitro-toonz --branch=main
```

- Live: https://nitro-toonz.pages.dev
- Repo: welbinator/nitro-toonz

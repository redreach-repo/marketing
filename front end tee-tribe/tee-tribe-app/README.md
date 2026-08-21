# Tee Tribe — storefront scaffold

A Next.js scaffold for **Tee Tribe**, a designer graphic-tee storefront covering four
collections: Faith, UAE pride, Funny, and Everyday. This is a front-end scaffold with
a working cart — it is **not** wired to a real commerce backend or payment gateway yet.

Built to match the stack conventions already used elsewhere in this repo (see
`../uniform/uniform-app`): Next.js 14 App Router, React 18, TypeScript, plain CSS
modules — no extra framework dependencies.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Front end:** React 18, TypeScript, CSS modules
- **State:** a client-side cart context (`lib/cart-context.tsx`) persisted to
  `localStorage`. No backend yet — see "What's not built" below.

## Run locally

```bash
cd "front end tee-tribe/tee-tribe-app"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's here

- `/` — home page with hero + all four collections + featured products
- `/collections/[slug]` — collection listing (`faith`, `uae`, `funny`, `everyday`)
- `/products/[slug]` — product detail with size picker + add-to-cart
- `/cart` — cart contents, quantity edit, subtotal
- `/checkout` — a checkout form shell. It **simulates** placing an order; no payment
  is actually processed. The form clearly marks where a real gateway plugs in.
- `data/collections.ts`, `data/products.ts` — placeholder catalog. The shape is close
  to what a headless commerce API would return per product/collection, so swapping in
  real data later shouldn't require a rewrite of the pages.

## What's not built yet (next steps)

1. **Commerce backend.** Pick one:
   - **Shopify** (Storefront API) — fastest to launch, handles inventory, tax,
     discounts, and has native UAE payment/shipping app support.
   - **Medusa.js** (self-hosted, headless) — more control, no platform fees, more
     ops to own.
   Either way, `data/products.ts` and `data/collections.ts` get replaced by API calls,
   and `lib/cart-context.tsx` gets replaced by/synced with that platform's cart.
2. **Payment gateway.** UAE-relevant options: Telr, Network International, Stripe
   (available in the UAE), plus **Tabby** or **Tamara** for buy-now-pay-later — close
   to table stakes for UAE fashion e-commerce. The `/checkout` page marks exactly
   where this plugs in.
3. **Real product photography** to replace the color-swatch placeholders in
   `data/products.ts`.
4. **Domain + deploy.** Suggested: `teetribe.ae`, deployed separately from
   redreach.ae (see the Tee Tribe proposal doc for the reasoning). Vercel is a good
   fit given the Next.js stack.
5. **Legal/compliance check on the Faith collection** — selling is fine, but how it's
   *marketed* (public ads, in-UAE promotion) should get a quick review against UAE
   media/content regulations before launch. Not a blocker, just don't skip it.

## Relationship to Red Reach

Tee Tribe is being incubated as its own consumer brand rather than a section of
redreach.ae — different audience (B2C vs. the rest of Red Reach's B2B lead-gen
divisions) and different infrastructure (a storefront vs. a quote-request form). It's
sitting in this `marketing` repo alongside the other division front ends
(`front end GRG`, `front end uniform`) for now; splitting it into its own repo once
the domain and backend are locked in is a five-minute move (this folder already
`npm install`s and builds standalone).

RR Threads' existing garment sourcing/printing relationships are a natural fit for
Tee Tribe's production — that's the intended synergy, not a shared storefront.

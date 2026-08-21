# Red Reach — homepage draft

A proposed homepage for redreach.ae. Plain HTML/CSS/JS, matching the stack and
exact design tokens of `../front end GRG/style.css` (same `--red`/`--orange`
gradient, Playfair Display + DM Sans, Font Awesome via CDN) so it reads as the
same site rather than a redesign.

## Why this exists

The current GRG page (`../front end GRG/index.html`) presents Red Reach as a
single-vertical market-entry firm — its own footer copy never mentions RR
Threads, RR Connect, RR Wanders, or Tee Tribe. This draft repositions Red
Reach as the consortium it actually is: the market-entry content becomes one
division among six, and the page adds:

- A **divisions grid** — one card per division, each linking out to that
  division's own page
- A **case studies** section surfacing proof (HSBC recruiting) instead of
  burying it a click deep
- One consistent contact form / WhatsApp CTA across the whole site

## Before this ships

- **Routing.** Division links here are relative paths for in-repo review
  (`../front end GRG/index.html`, `../front end uniform/uniform.html`).
  Swap for real routes once the team decides subpaths
  (`redreach.ae/business-setup`) vs. subdomains.
- **Tee Tribe link.** Points at a placeholder `teetribe.ae` — update once
  that domain is live (storefront scaffold: see the `tee-tribe-storefront`
  branch/PR in this repo).
- **Copy pass.** This establishes structure and tone, not final wording —
  worth a read from whoever owns messaging before it goes live.
- **RR Connect / RR Wanders** don't have their own linkable page in this repo
  yet, so their cards route to the contact form for now. Point them at their
  real pages once those exist here.

## Preview locally

No build step — open `index.html` directly in a browser, or serve the folder:

```bash
cd "front end homepage"
python3 -m http.server 8000
```

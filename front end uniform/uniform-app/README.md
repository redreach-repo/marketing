# RR Threads – Custom Uniforms (Next.js)

A full-stack Next.js 14 application for the RR Threads custom uniforms landing page, with a React front end and API backend.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Front end:** React 18, TypeScript, CSS (global + modules)
- **Back end:** Next.js API Routes (`/api/quote`, `/api/quotes`)

## Run locally

```bash
cd uniform-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Front end:** Top bar, header with mobile menu, hero, stats, services, industries, process, portfolio gallery, workshop section, split section, USP banner, testimonials, quote form, FAQ accordion, CTA banner, footer, WhatsApp float, image lightbox.
- **Back end:**
  - `POST /api/quote` – Submit a quote request (validates and stores in `data/quotes.json`).
  - `GET /api/quotes` – List all stored quote submissions (for admin use).

## Quote form

Submissions are validated (name, email, phone, industry required) and appended to `data/quotes.json` in the project root. Create the file or let the API create it on first submission.

## Build for production

```bash
npm run build
npm start
```

Runs on port 3000 by default.

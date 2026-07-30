# Matangi Market Pvt Limited

Official company website for **Matangi Market Pvt Limited**, a newly established
UK business sourcing branded consumer goods from recognised wholesale channels
for responsible resale through Amazon FBA.

**Production site:** [matangi-market-uk.arkamandol.chatgpt.site](https://matangi-market-uk.arkamandol.chatgpt.site)

## Purpose

The website gives prospective wholesalers, distributors and brands a clear view
of:

- the company’s wholesale-to-market operating model;
- its approach to traceable sourcing and organised commercial documentation;
- its commitment to brand standards and marketplace compliance;
- its supplier onboarding and measured-growth process; and
- its legal name, business stage and registered address.

The copy deliberately avoids unverified certifications, partnerships and contact
details.

## Company information

| Field | Details |
| --- | --- |
| Legal name | Matangi Market Pvt Limited |
| Company stage | Recently registered |
| Business model | Wholesale procurement and Amazon FBA resale |
| Registered address | 46 Edison Gardens, Gateshead, NE8 4SE, United Kingdom |

## Technology

- React 19 and Next.js-compatible routing through vinext
- TypeScript
- Tailwind CSS build tooling with a custom responsive design system
- Vite and Cloudflare Workers-compatible deployment output
- OpenAI Sites deployment configuration

The production page is server-rendered and uses no advertising scripts,
analytics trackers, cookies, contact forms or third-party client-side
integrations.

## Local development

### Requirements

- Node.js 22.13 or newer
- npm

### Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npm run lint
npm test
```

`npm test` creates a production build and verifies the rendered company content,
metadata and security headers.

## Project structure

```text
app/
  globals.css       Responsive visual system
  layout.tsx        Metadata and document shell
  page.tsx          Company website content
build/
  sites-vite-plugin.ts
tests/
  rendered-html.test.mjs
worker/
  index.ts          Worker entry point and security headers
.openai/
  hosting.json      Sites project configuration
```

## Security

The Worker applies a restrictive Content Security Policy, clickjacking
protection, MIME-sniffing protection, HTTPS enforcement, a limited browser
permissions policy and privacy-preserving referrer handling. Secrets and local
environment files are excluded from version control.

See [SECURITY.md](SECURITY.md) for responsible vulnerability reporting.

## Ownership

Copyright © 2026 Matangi Market Pvt Limited. All rights reserved.

The repository is public for transparency. It is not released under an
open-source licence; see [LICENSE](LICENSE).

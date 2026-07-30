# BITSOTRON Website Portfolio Project

A modern, responsive startup website for **BITSOTRON**, an offline-first digital access platform designed to deliver videos, documents, forms, catalogs, dashboards, and training resources through a local Wi-Fi hub without public internet dependency.

This project was built as a polished product website and portfolio case study using **Next.js 14**, **TypeScript**, **React**, **CSS Modules**, **Motion**, and **Keystatic CMS**.

---

## Project Summary

BITSOTRON solves a practical connectivity problem: many organizations still need to share digital content in places where internet access is unstable, costly, or unavailable.

The website communicates this product clearly through:

- A premium landing page experience
- Product-focused storytelling
- Offline-first technology positioning
- Interactive architecture sections
- Contact, support, and newsletter workflows
- CMS-editable content for long-term maintainability

---

## Live Preview

Local development URL:

```text
http://localhost:3000
```

If another port is used:

```text
http://localhost:3001
```

---

## Key Features

- **Modern homepage:** professional hero section, product messaging, material cards, and CTA flow
- **Responsive design:** optimized layouts for desktop, tablet, and mobile
- **Brand system:** dark grey `#262626` with yellow gradient `#FC9700 → #FCBD00`
- **Interactive UI:** motion-enhanced sections using `motion/react`
- **CMS-ready content:** Keystatic file-based content management
- **Product pages:** dynamic product listing and product detail routes
- **Support workflows:** contact form, newsletter form, and ticket API route
- **Security basics:** secure headers, Zod validation, DOMPurify sanitization, and rate limiting
- **Accessibility improvements:** semantic layout, keyboard focus styles, reduced-motion support

---

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| UI Library | React |
| Styling | CSS Modules + CSS Custom Properties |
| Animation | Motion |
| CMS | Keystatic |
| Validation | Zod |
| Sanitization | DOMPurify |
| Icons | Lucide React |
| Deployment | Vercel-ready |

---

## Design Direction

The interface follows a clean enterprise visual style:

- Professional system typography using Aptos, Segoe UI, and native OS fallbacks
- Minimal dark grey and yellow brand palette
- Soft material surfaces and subtle depth
- Clear section hierarchy
- Reduced visual noise
- Conversion-focused calls to action

The `/customers` route was removed to keep the navigation focused on core product, technology, support, and contact journeys.

---

## Pages

```text
/                 Homepage
/about            Company overview
/products         Product overview
/products/[slug]  Product detail pages
/technology       Technology architecture
/support          Support and ticket request
/contact          Contact form
/security         Trust and security
/privacy          Privacy policy
/terms            Terms of service
/cookies          Cookie policy
/keystatic        Local CMS admin
```

---

## Folder Structure

```text
app/
  api/             API routes
  products/        Product pages
  technology/      Technology page
  support/         Support page
  contact/         Contact page

components/
  layout/          Navbar, footer, transitions
  sections/        Hero, forms, architecture, product sections
  ui/              Reusable Button, Card, CountUp, Marquee

content/
  products/        Product CMS content
  industries/      Industry CMS content
  case-studies/    Case study content retained for future use
  singletons/      Homepage, about, technology content

lib/
  keystatic.ts     CMS reader helpers
  rate-limit.ts    Request rate limiting
  zod-schemas.ts   Validation schemas

styles/
  globals.css      Global tokens and base styles
  utilities.css    Layout and utility classes
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## CMS Usage

Keystatic admin is available locally at:

```text
http://localhost:3000/keystatic
```

Content is stored directly in the repository under `content/`, making the site easy to maintain without a separate database.

---

## Environment Variables

Optional integrations:

```env
RESEND_API_KEY=
ZENDESK_SUBDOMAIN=
ZENDESK_API_TOKEN=
ZENDESK_EMAIL=
NEXT_PUBLIC_CRISP_WEBSITE_ID=
```

These enable contact email delivery, support ticket forwarding, and live chat.

---

## Portfolio Highlights

- Built a complete startup website from structured content to production-ready UI
- Designed a consistent brand system using reusable tokens and CSS Modules
- Implemented dynamic content through Keystatic CMS
- Created responsive and animated sections without overloading the interface
- Added secure form handling with validation and sanitization
- Refined typography and navigation for a more professional product feel

---

## Future Improvements

- Add production-grade distributed rate limiting
- Upgrade dependencies to resolve npm audit warnings
- Add final brand-approved screenshots
- Add automated accessibility testing
- Connect contact/support forms to real production services
- Add analytics for conversion tracking

---

## Author

Created as a portfolio-ready website project for **BITSOTRON**.

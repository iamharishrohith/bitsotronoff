# BITSOTRON Startup Website

Production-grade, animated, easily-updatable tech startup website for **BITSOTRON** built with Next.js 14 (App Router, TypeScript), Vanilla CSS Modules, Motion animations, and Keystatic Git-based CMS.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Editing Content via Keystatic CMS

BITSOTRON uses **Keystatic** (Git-based CMS stored in repository MDX/JSON files).

- Access the local Keystatic Admin panel at: [http://localhost:3000/keystatic](http://localhost:3000/keystatic)
- Edit Collections: Blog Posts, News, Careers / Open Positions, Case Studies, Testimonials, Team Members, Partners, Products, Industries.
- Edit Singletons: Home Page copy, About Us story & mission, Technology configuration.

Changes saved in the Keystatic Admin UI are written directly to files in `content/` and automatically reflected on the site without requiring a database connection!

---

## 🎨 Tech Stack & Brand Design Tokens

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Vanilla CSS — CSS Modules (`*.module.css`) + CSS Custom Properties (`styles/globals.css`)
- **Brand Colors:**
  - Dark Grey: `#262626` (`--color-dark`)
  - Primary Accent Gradient: `linear-gradient(90deg, #FC9700, #FCBD00)` (`--gradient-primary`)
- **Animations:** Motion (`motion/react`)
- **CMS:** Keystatic (Local Git-backed storage)
- **Security Baseline:** OWASP Top 10, Zod API validation, DOMPurify sanitization, sliding window rate limiting, secure HTTP headers in `next.config.js`.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub.
2. Connect your GitHub repository to [Vercel](https://vercel.com).
3. Set optional environment variables in Vercel settings:
   - `RESEND_API_KEY`: For contact form emails
   - `ZENDESK_SUBDOMAIN`, `ZENDESK_API_TOKEN`, `ZENDESK_EMAIL`: For support tickets
   - `NEXT_PUBLIC_CRISP_WEBSITE_ID`: For Crisp live chat embed
4. Deploy! Vercel automatically builds and optimizes the Next.js App Router application.

---

## 🔒 Security & Performance Features

- **OWASP Secure Headers:** CSP, HSTS, X-Frame-Options (`DENY`), X-Content-Type-Options (`nosniff`), Referrer-Policy configured in `next.config.js`.
- **Zod Schema Validation:** Strictly validates all form submissions (`/api/contact`, `/api/ticket`, `/api/newsletter`).
- **Rate Limiting:** Sliding-window rate limiter on form API routes prevents spam.
- **Accessibility:** Semantic HTML5, WCAG AA color contrast, full keyboard navigation, and `prefers-reduced-motion` overrides.

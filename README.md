# BuildSupply — B2B Construction & Building Solutions Distribution Platform

> **Positioning:** "Trusted Supplier & Distribution Partner for Construction and Building Solutions"  
> **Architecture:** Pure HTML5, Modern CSS3 (BEM, CSS Custom Properties), Vanilla JavaScript (Modular ES6+). Zero frameworks, zero external dependencies.

---

## 1. Overview & Architecture

**BuildSupply** is an enterprise-grade commercial B2B website built specifically for a distributor, supplier, and trading company specializing in construction chemicals, waterproofing polymers, concrete admixtures, repair mortars, adhesives, and industrial flooring.

The platform bridges established chemical manufacturers and serious project execution teams:
- Construction Companies & General Contractors
- Builders, Real Estate Developers & Civil Engineers
- Infrastructure Authorities (Metro, Highways, Bridges)
- Industrial Manufacturing Plants & Applicators
- Hardware Dealers & Retail Distribution Networks

### Technology Stack
- **HTML5:** Semantic, accessible hierarchy (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>` / modal pattern).
- **CSS3:** Vanilla CSS with custom properties (CSS variables), modern CSS Grid, Flexbox, BEM naming conventions, responsive typography via `clamp()`, and smooth micro-interactions.
- **Vanilla JavaScript:** Decoupled modular design (`products.js`, `navigation.js`, `filters.js`, `modal.js`, `contact.js`, `animations.js`, `main.js`) with isolated data layers ready for REST/GraphQL API integration.
- **Vector Assets:** Crisp, high-definition SVG graphics ensuring razor-sharp rendering on any screen density without broken external CDN image dependencies.

---

## 2. Directory Structure

```
buildSupply-website/
├── index.html                # Complete 15-section conversion-focused homepage
├── products.html             # Multi-facet catalog with live search & filters
├── product-details.html      # Dynamic technical spec sheet, TDS download & RFQ trigger
├── about.html                # Corporate profile, warehousing & distribution logistics
├── brands.html               # Authorized manufacturer roster & partner directory
├── industries.html           # Sector-specific solutions (Commercial, Infra, Industrial, etc.)
├── projects.html             # Material supply profiles & representative case studies
├── contact.html              # Comprehensive B2B quotation (RFQ) desk & depot info
│
├── css/
│   ├── global.css            # Design tokens, reset, typography, buttons, badges, modals
│   ├── header.css            # Sticky navigation, top announcement bar, mobile drawer
│   ├── footer.css            # Multi-column B2B corporate footer & legal bar
│   ├── home.css              # Homepage sections styling (Hero, Trust strip, Timeline, etc.)
│   ├── products.css          # Catalog layout, sidebar filters, active tags, product grid
│   ├── product-details.css   # Detail page layout, gallery, spec table, CTAs
│   ├── about.css             # Facilities, quality control, warehousing values
│   ├── brands.css            # Manufacturer brand cards & authorized directory
│   ├── industries.css        # Sector solution cards & technical packages
│   ├── projects.css          # Application case study cards & specification boxes
│   └── contact.css           # Contact layout, RFQ card, error states & validation
│
├── js/
│   ├── products.js           # Central data store (products, brands, categories)
│   ├── navigation.js         # Sticky header scroll, drawer toggle, keyboard Escape, active links
│   ├── filters.js            # Live search (debounced), category/brand filter, active tags
│   ├── modal.js              # Accessible modal dialog, context population, focus trap
│   ├── contact.js            # Client-side form validation, WhatsApp link generator
│   ├── animations.js         # Scroll reveals with IntersectionObserver, Back-to-Top
│   └── main.js               # Universal component injector & orchestrator
│
├── assets/
│   ├── images/
│   │   ├── hero/             # Industrial vector composition (hero-visual.svg)
│   │   ├── products/         # Standardized technical product renders
│   │   ├── categories/       # Solution sector illustrations
│   │   ├── brands/           # Authorized manufacturer partner logos
│   │   ├── projects/         # Infrastructure & commercial project profiles
│   │   └── about/            # Warehousing & logistics center schematics
│   ├── icons/                # Inline SVG icon sets
│   └── logos/                # BuildSupply corporate vector logos & favicon
│
└── README.md
```

---

## 3. Design System & Palette

| Token | Hex Value | Usage |
|---|---|---|
| `--color-primary` | `#111827` | Deep Charcoal / Near Black for headings and dark sections |
| `--color-secondary` | `#1E3A5F` | Industrial Blue for technical badges, brand accents, secondary buttons |
| `--color-accent` | `#F97316` | Construction Orange for high-conversion CTAs, active highlights |
| `--color-accent-hover` | `#EA580C` | Deeper orange hover state |
| `--color-background` | `#F8FAFC` | Clean light background |
| `--color-surface` | `#FFFFFF` | Card surfaces and input backgrounds |
| `--color-text` | `#1F2937` | High contrast readable body text |
| `--color-text-muted` | `#6B7280` | Secondary metadata and labels |
| `--color-border` | `#E5E7EB` | Clean, subtle card and divider borders |

- **Typography Stack:** `'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Container Max Width:** `1240px` with responsive horizontal padding (`32px-48px` desktop, `24px-32px` tablet, `16px-20px` mobile).

---

## 4. Key Functional Features

1. **Homepage Conversion Structure:**
   - Top announcement bar with contact shortcuts
   - Sticky header with active links and mobile sliding drawer
   - Hero section with high-grade industrial composition and primary/secondary CTAs
   - Qualitative trust strip (product categories, authorized network, project support, supply reliability)
   - 8 Product categories with hover elevation and accent borders
   - Featured products grid with live tab filtering
   - Why Choose Us (6 pillars with custom vector icons)
   - Brand showcase with grayscale-to-color hover transition
   - Industries served visual grid
   - Application matrix breakdown
   - Representative project supply highlights
   - 4-step procurement timeline
   - High-impact B2B CTA conversion banner
   - Quick enquiry form with client-side validation
   - Corporate multi-column footer

2. **Catalog & Real-Time Filtering (`products.html`):**
   - Instant search input with debouncing
   - Faceted category selection (All, Construction Chemicals, Waterproofing, Concrete, Repair, Adhesives, Flooring, Surface, Tile)
   - Brand checkboxes with product matching
   - Sorting options (Default, Name A-Z, Name Z-A, Brand)
   - Removable active filter tags with "Reset All" action
   - Empty state UI with quick reset button
   - URL query parameter synchronization (`?category=...`, `?search=...`, `?brand=...`)

3. **Dynamic Product Details (`product-details.html`):**
   - URL parameter-driven loader (`?id=1` to `?id=12`)
   - Interactive thumbnail gallery
   - Packaging options & coverage estimates
   - Bulleted performance advantages
   - Site applications & suitable customer segments
   - Technical specifications table with lab standards
   - Simulated Technical Data Sheet (TDS) download
   - One-click RFQ trigger pre-populating product name and brand

4. **Quotation (RFQ) Modal & Contact Handling:**
   - Universal quotation modal accessible from any page via "Request a Quote" buttons
   - Input validation: required field checks, email format validation, phone length validation, minimum message length
   - Clear inline error messages beneath invalid inputs
   - Simulated submission with processing state and success alert
   - Floating WhatsApp button with automatic contextual message generation:
     `https://wa.me/{number}?text={encodedMessage}`

5. **Accessibility & Performance:**
   - Full keyboard navigation and Esc key modal/drawer dismissal
   - `IntersectionObserver` scroll reveals
   - Respects `prefers-reduced-motion: reduce`
   - Back-to-Top smooth scroll button
   - Zero console errors and zero broken links

---

## 5. Local Setup & Testing

To run locally using any standard static file server:

```bash
# Option A: Using Node.js http-server
npx http-server ./ -p 8080 -o

# Option B: Using Python 3 built-in server
python -m http.server 8080

# Option C: Using PHP built-in server
php -S localhost:8080
```

Open `http://localhost:8080` in your web browser.

---

## 6. Future Backend Integration Guide

The frontend was designed with an decoupled data layer:
- In `js/products.js`, replace `PRODUCTS_DATA` and `BRANDS_DATA` with asynchronous `fetch('/api/v1/products')` calls.
- In `js/contact.js`, replace the `setTimeout` in `handleFormSubmit` with a `fetch('/api/v1/rfq', { method: 'POST', body: JSON.stringify(payload) })` endpoint.
- In `js/contact.js`, update `WHATSAPP_NUMBER` with your verified business WhatsApp number.

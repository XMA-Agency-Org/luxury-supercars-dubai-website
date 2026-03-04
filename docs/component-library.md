# Component Library

## Primitive UI Components

All primitive components live in `components/ui/` and are built with [class-variance-authority](https://cva.style/) (CVA) for variant management and `cn()` from `@/lib/utils` for class merging (clsx + tailwind-merge).

### Design Tokens Used

Colors reference the Tailwind `@theme` tokens defined in `app/globals.css`:
- **primary-***: Gold scale (oklch hue 80)
- **neutral-***: Cool gray scale (oklch achromatic)
- **success-***: Green scale (oklch hue 142)

Font families:
- `font-heading`: Epilogue
- `font-body`: Roboto
- `font-cta`: Poppins

---

### Button (`components/ui/button.tsx`)
CVA button with forwardRef.

**Variants:**
| Prop | Values | Default |
|------|--------|---------|
| intent | `primary`, `secondary`, `success`, `ghost` | `primary` |
| size | `sm`, `md`, `lg` | `md` |

**Exports:** `Button`, `buttonVariants`

---

### Link (`components/ui/link.tsx`)
CVA wrapper around Next.js `<Link>`.

**Variants:**
| Prop | Values | Default |
|------|--------|---------|
| variant | `primary`, `nav`, `cta` | `primary` |

**Exports:** `Link`, `linkVariants`

---

### Input (`components/ui/input.tsx`)
CVA input with forwardRef.

**Variants:**
| Prop | Values | Default |
|------|--------|---------|
| variant | `default`, `light`, `surface` | `default` |

**Exports:** `Input`, `inputVariants`

---

### Textarea (`components/ui/textarea.tsx`)
CVA textarea with forwardRef. Mirrors Input's variant pattern.

**Variants:**
| Prop | Values | Default |
|------|--------|---------|
| variant | `default`, `light`, `surface` | `default` |

Base classes include `resize-none` by default. Accepts all standard textarea attributes.

**Exports:** `Textarea`, `textareaVariants`

---

### Select (`components/ui/select.tsx`)
Simple styled `<select>` with forwardRef. No CVA variants; accepts `className` for overrides.

**Exports:** `Select`

---

### SectionHeading (`components/ui/section-heading.tsx`)
Renders an `<h2>` with responsive heading sizes. Parent passes JSX children (e.g., `<strong className="text-primary-500">` spans for gold highlights).

**Exports:** `SectionHeading`

---

### IconButton (`components/ui/icon-button.tsx`)
CVA icon button with forwardRef. Circular buttons for icons/actions.

**Variants:**
| Prop | Values | Default |
|------|--------|---------|
| variant | `primary`, `whatsapp`, `call` | `primary` |
| size | `sm` (40px), `md` (48px), `lg` (56px) | `md` |

**Exports:** `IconButton`, `iconButtonVariants`

---

### Card (`components/ui/card.tsx`)
Simple wrapper div with dark background, rounded corners, and subtle border. Accepts `className` and `children`.

**Exports:** `Card`

---

## Icon Components

All icon components live in `components/icons/` and use `currentColor` for fill/stroke, making them themeable via Tailwind text color classes (e.g., `text-primary-500`). All icons are from Lucide React or custom SVGs — no external icon libraries.

### Logo (`components/icons/logo.tsx`)
Renders the brand logo using `next/image` from `/images/branding/logo.png`.

| Prop | Type | Default |
|------|------|---------|
| className | `string?` | — |
| width | `number` | `160` |
| height | `number` | `50` |

**Exports:** `Logo`

---

### Social Icons (`components/icons/social-icons.tsx`)
Four named SVG icon components for social media. Each accepts `className` (default `w-5 h-5`) and uses `currentColor` fill.

**Exports:** `FacebookIcon`, `InstagramIcon`, `YouTubeIcon`, `TikTokIcon`

---

### PhoneIcon (`components/icons/phone-icon.tsx`)
Phone SVG icon. Default `w-5 h-5`, `currentColor` fill.

**Exports:** `PhoneIcon`

---

### WhatsAppIcon (`components/icons/whatsapp-icon.tsx`)
WhatsApp SVG icon. Default `w-5 h-5`, `currentColor` fill.

**Exports:** `WhatsAppIcon`

---

### StarIcon (`components/icons/star-icon.tsx`)
5-pointed star SVG. Default `w-5 h-5`.

| Prop | Type | Default |
|------|------|---------|
| className | `string?` | — |
| filled | `boolean` | `true` |

When `filled` is `true`, uses `currentColor` fill. When `false`, uses stroke-only outline.

**Exports:** `StarIcon`

---

### EmailIcon (`components/icons/email-icon.tsx`)
Email envelope SVG icon. Default `w-5 h-5`, `currentColor` fill.

**Exports:** `EmailIcon`

---

### MapPinIcon (`components/icons/map-pin-icon.tsx`)
Map pin / location marker SVG icon. Default `w-5 h-5`, `currentColor` fill.

**Exports:** `MapPinIcon`

---

### LandlineIcon (`components/icons/landline-icon.tsx`)
Landline phone SVG icon. Default `w-5 h-5`, `currentColor` fill.

**Exports:** `LandlineIcon`

---

## Layout Components

All layout components live in `components/layout/` and are shared across every route.

### WhatsAppWidget (`components/layout/whatsapp-widget.tsx`)

`"use client"` floating widget fixed to the **bottom-right** corner.

- Default state: green circular button (bg-success-500) with WhatsAppIcon, 56px.
- Expanded state: chat panel (w-80, bg-neutral-900, rounded-2xl) with a success-600 header, descriptive body text, and two agent cards (Aleona/Russian and Ryan/English) that link to the WhatsApp API.
- Panel animates with `transition-all`, `scale`, and `opacity` from `origin-bottom-right`.
- Agent data sourced from `contactData.whatsapp` in `app/(home)/_lib/contact-data.ts`.

**Exports:** `WhatsAppWidget`

---

### FloatingCallButton (`components/layout/floating-call-button.tsx`)

`"use client"` floating call-to-action fixed to the **bottom-left** corner.

- Green circular button (bg-success-500) with PhoneIcon, 56px.
- Pulsing ring animation (`animate-pulse-ring`) behind the button at lower opacity.
- Links to `tel:+971565266295` (first phone from `contactData.phones`).
- On mobile (`md:hidden`), a "Call Now" pill label is shown next to the icon.

**Exports:** `FloatingCallButton`

---

### Header (`components/layout/header.tsx`)

`"use client"` sticky header component.

- `sticky top-0 z-50` with `bg-neutral-950/95 backdrop-blur-md` and subtle bottom border. No `overflow-hidden` on any ancestor to preserve sticky behavior.
- Max-width container (`max-w-7xl mx-auto`).
- Three-section layout: Logo (left), DesktopNav (center, hidden below `lg`), phone + socials (right, hidden below `lg`), hamburger (mobile only).
- Mobile menu is rendered as a sibling (not nested inside the header) to avoid stacking context issues.
- Data sourced from `navigationItems` and `contactData`.

Sub-components in `components/layout/_components/`:

| Component | File | Description |
|-----------|------|-------------|
| `DesktopNav` | `desktop-nav.tsx` | `"use client"` horizontal nav with hover-activated dropdowns. Each `DesktopNavItem` manages its own hover state for showing `DropdownPanel`. |
| `DropdownPanel` | `dropdown-panel.tsx` | Absolutely positioned grid of icon + label links. Positioned below nav item with opacity/translate animation. `bg-neutral-900`, `rounded-xl`, `border-neutral-800`. |
| `MobileMenu` | `mobile-menu.tsx` | `"use client"` full-screen fixed overlay (`z-50`). Accordion-style dropdown sections with `grid-rows` animation. Includes phone link and social icons at bottom. |
| `HeaderSocials` | `header-socials.tsx` | Row of social icon links (FB, IG, YT, TikTok) with `text-neutral-400 hover:text-primary-500`. |
| `PhoneLink` | `phone-link.tsx` | Phone icon + number styled as `text-primary-500`. Reusable anchor element. |

**Exports:** `Header`

---

### Footer (`components/layout/footer.tsx`)

Server component (no `"use client"`).

- `bg-neutral-900` with generous vertical padding.
- Max-width container (`max-w-7xl mx-auto`).
- Three-column grid on desktop (`lg:grid-cols-3`), single column on mobile.
  - Column 1: Logo, company description, social icon links.
  - Column 2: Two sub-columns ("Car Brands" and "Useful Links") rendered via `FooterLinkList`.
  - Column 3: "Contact Us" with phone numbers, landline, email, and address via `FooterContactItem`.
- Below columns: payment badge images (Visa, Mastercard, Amex) separated by a top border.
- Legal links row ("Booking T&C'S" | "Privacy Policy") with copyright text.
- Bottom-center social icons row.

Internal helper components (not exported, defined in footer.tsx):
- `FooterSocialLinks`: Renders the four social media icon links.
- `FooterLinkList`: Renders a titled list of navigation links.
- `FooterContactItem`: Renders an icon + label anchor for contact info.

**Exports:** `Footer`

---

## Homepage Section Components

All homepage section components live in `app/(home)/_components/` following the locality-of-behavior pattern.

### HeroSection (`app/(home)/_components/hero-section.tsx`)

Server component. Full-viewport hero with background image, gradient overlay, headline with gold-highlighted keywords, subtitle, and two CTA link buttons (primary "Rent A Car" and secondary "Contact Us").

- `min-h-[85vh]`, Next.js `Image` with `fill` + `object-cover`
- Dark left-to-transparent gradient overlay for text readability
- Responsive heading: `text-4xl md:text-5xl lg:text-6xl`
- Uses `NextLink` with `buttonVariants` className for CTA styling

**Exports:** `HeroSection`

---

### BookingForm (`app/(home)/_components/booking-form.tsx`)

`"use client"` inline booking form displayed alongside the hero section.

- Dark card with `bg-neutral-900/50`, `backdrop-blur-lg`, `rounded-2xl`
- Fields: Full Name, Email, Mobile (with RegionCodeDropdown), Date From, Date To, Submit button
- All inputs use the `light` variant
- Visual only; no submission logic

**Exports:** `BookingForm`

---

### CarTypeSlider (`app/(home)/_components/car-type-slider.tsx`)

Server component. Horizontal scrollable row of car category icons.

- Takes `carCategories: CarCategory[]` as prop
- Each item: icon image (h-40 w-48 container, `object-contain`) + label text
- Wrapped in `NextLink` components pointing to category pages

**Exports:** `CarTypeSlider`

---

### AboutSection (`app/(home)/_components/about-section.tsx`)

Server component. Split layout with text content and showroom image.

- Two-column grid on desktop (`lg:grid-cols-2`), stacked on mobile
- Left: `SectionHeading` with gold-highlighted keywords, two body paragraphs, "Details" CTA button
- Right: showroom image with `rounded-2xl`, `object-cover`, `fill` layout

**Exports:** `AboutSection`

---

### RegionCodeDropdown (`app/(home)/_components/region-code-dropdown.tsx`)

`"use client"` CVA dropdown for selecting phone region codes.

**Variants:**
| Prop | Values | Default |
|------|--------|---------|
| variant | `default`, `light` | `default` |

- `default`: `bg-neutral-900/60` trigger (used in contact-form)
- `light`: `bg-neutral-800/40` trigger (used in booking-form, contact-section)

Props: `selected: RegionCode`, `onSelect: (region: RegionCode) => void`, `variant`

Imports `REGION_CODES` and `RegionCode` from `../_lib/form-data`.

Includes full ARIA support: `aria-expanded`, `aria-haspopup="listbox"`, `role="listbox"`, `role="option"`, `aria-selected`.

**Exports:** `RegionCodeDropdown`

---

### ContactIconCircle (`app/(home)/_components/contact-icon-circle.tsx`)

CVA wrapper for contact info icon circles.

**Variants:**
| Prop | Values | Default |
|------|--------|---------|
| variant | `muted`, `solid` | `muted` |

- `muted`: `bg-primary-500/10 text-primary-500` (used in contact-info-bar)
- `solid`: `bg-primary-500 text-neutral-950` (used in contact-section)

**Exports:** `ContactIconCircle`, `contactIconCircleVariants`

---

## Conventions

- No comments in component code; expressive names are used instead.
- All colors are oklch-based via Tailwind design tokens, never hex or rgb.
- `"use client"` directive is added only to components that use forwardRef or client-side features.
- Components that are purely presentational (no refs, no hooks) are server components by default.
- All CVA variant exports are named alongside the component for reuse in compound components.
- For button-styled internal links, use `NextLink` from `next/link` with `buttonVariants` className. The `Link` component is for text links (`primary` variant), navigation links (`nav` variant), and pill CTAs (`cta` variant).
- All icons use Lucide React or custom SVG components in `components/icons/`. No external icon libraries.

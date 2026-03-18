# Project: Luxury Supercars Dubai

## Overview
- **Type**: Next.js website (luxury car rental)
- **Stack**: Next.js 16, React 19, Tailwind CSS v4, TypeScript
- **Package Manager**: bun
- **Started**: 2026-03

## Architecture Decisions
- Locality of behavior: feature-specific code co-located with routes using `_components`, `_hooks`, `_lib`, `_types` folders
- CVA (class-variance-authority) for all primitive component variants
- OKLCH color tokens via Tailwind `@theme` — never hex or rgb
- Server Components by default, `"use client"` only for interactivity
- Static data files instead of CMS (93 cars, blog posts, testimonials)
- Axios for HTTP requests (not fetch)

## Preferences & Rules
- Dark mode theme (warm dark neutrals hue:60, standard scale: 50=lightest, 950=darkest)
- No comments in code — use expressive function/variable names
- Componentize everything — pages should not be long
- Never use `overflow-hidden` with sticky positioning
- Use `min-h-[100dvh]` instead of `h-screen` for full-height sections
- Use CSS Grid over complex flexbox percentage math
- No ambient glow decorations

## Patterns & Conventions
- **Colors**: Semantic tokens mapped to OKLCH scales (primary=gold hue:80, neutral=warm dark hue:60, success=green hue:142, warning=amber hue:85, error=red hue:25)
- **Backgrounds**: `bg-surface` for cards/panels, `bg-neutral-950` for page body (darkest), `bg-neutral-900` for secondary surfaces (footer, marquee)
- **Surface tokens**: `surface` (0.22 lightness) for cards, `surface-elevated` (0.25) for hover states, `on-primary` (0.15 dark) for text on gold
- **Text**: `text-neutral-50` for primary (near-white), `text-neutral-400` for secondary, `text-neutral-500` for muted, `text-neutral-600` for subtle
- **Borders**: `border-neutral-800` structural, `border-neutral-700` interactive
- **Typography**: Epilogue (headings), DM Sans (body), Poppins (CTAs/nav)
- **Card shadows**: Removed on dark bg (border is sufficient); popups/dropdowns use `shadow-lg shadow-black/20`
- **Success buttons**: Use `text-white` on green backgrounds (WhatsApp/call brand convention)
- **Gold buttons/badges**: Use `text-on-primary` (dark text on gold)
- **Image overlays**: Use `bg-black/40` for literal dark overlays

## Learnings & Corrections
- When bulk-swapping color tokens with sed, longer class names must be processed BEFORE shorter ones (e.g., `neutral-500` before `neutral-50`) to avoid substring corruption
- `bg-white` (Tailwind built-in) doesn't match our dark theme — always use `bg-surface` instead
- For dark text on gold backgrounds, use `text-on-primary`
- Color scale follows standard convention: 50=lightest, 950=darkest. Dark theme uses high numbers for backgrounds (`bg-neutral-950`) and low numbers for text (`text-neutral-50`)

## Dependencies & Tooling
- `class-variance-authority` — component variant system
- `framer-motion` / `motion` — animations
- `@radix-ui/react-dropdown-menu`, `@radix-ui/react-popover` — headless UI
- `react-day-picker` — date picker
- `libphonenumber-js` — phone number parsing
- `react-circle-flags` — country flag icons
- `cmdk` — command menu (country search)
- `lucide-react` — icons
- `zod` — validation

## Component Registry
- `Button` — CVA: primary, secondary, success, ghost
- `Input` — CVA: default, light, surface
- `Textarea` — CVA: default, light, surface
- `Select` — single variant
- `Link` — CVA: primary, nav, cta
- `Badge` — CVA: default, outline, solid
- `IconButton` — CVA: primary, whatsapp, call
- `Card` — base card with border (no shadow in dark mode)
- `SectionHeading` — responsive h2
- `FormField` — label + children wrapper
- `DatePicker` — popover calendar
- `PhoneInput` — country code + phone
- `Breadcrumbs` — with structured data
- `ContactIconCircle` — CVA: muted, solid
- `CarFiltersSidebar` — category/brand/price filters
- `DropdownMenu` — Radix-based dropdown
- `Popover` — Radix-based popover
- `Calendar` — react-day-picker wrapper
- `RevealOnScroll` — scroll-triggered fade-up animation wrapper (respects prefers-reduced-motion)
- `StaggerChildren` / `StaggerItem` — parent-child stagger animation system
- `AnimatedHeroContent` / `AnimatedHeroChild` / `AnimatedBookingForm` / `ScrollIndicator` — hero section motion components

## Current State
- Homepage with hero, car categories, about, brands, reviews, video, blog, FAQ, contact, Instagram
- 93 cars across 5 categories (sports, convertible, luxury, SUV, electric)
- Car detail pages with gallery, specs, pricing
- Blog with articles
- Brand pages
- Info pages: about, services, contact, FAQ, careers
- Legal pages: privacy policy, terms & conditions
- Dark mode theme applied across all components (warm dark neutrals, gold accents with boosted chroma)

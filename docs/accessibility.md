# Accessibility Patterns

## ARIA Attributes

### Expandable Regions (FAQ, Accordions)

Toggle buttons use `aria-expanded` + `aria-controls` to link trigger and content:

```tsx
<button aria-expanded={isOpen} aria-controls="panel-id">...</button>
<div id="panel-id" role="region" aria-labelledby="trigger-id">...</div>
```

Used in: `FaqItem`, `MobileDropdownSection`

### Listbox Dropdowns

Custom dropdown selectors use the listbox pattern:

- Trigger: `aria-expanded`, `aria-haspopup="listbox"`
- Dropdown container: `role="listbox"`, `aria-label`
- Each option: `role="option"`, `aria-selected`

Used in: `RegionCodeDropdown`, `CurrencySelector`

### Navigation Menus

Desktop nav items with dropdowns use:

- Trigger link: `aria-haspopup="menu"`, `aria-expanded`
- Dropdown grid: `role="menu"`
- Each link: `role="menuitem"`

Used in: `DesktopNav`, `DropdownPanel`

### Floating Action Buttons

Floating buttons always include descriptive `aria-label`:

- WhatsApp toggle: `aria-expanded`, dynamic `aria-label` based on open state
- Call button: `aria-label` including the phone number
- Hamburger menu: `aria-label="Open menu"`, `aria-expanded`

Used in: `WhatsAppWidget`, `FloatingCallButton`, `HamburgerButton`

---

## Prefers Reduced Motion

A global `@media (prefers-reduced-motion: reduce)` rule in `app/globals.css` disables all animations and transitions site-wide:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This ensures users who prefer reduced motion get a static experience without needing per-component overrides.

---

## Conventions

- Toggle buttons (hamburger, FAQ, currency) always get `aria-expanded`.
- Dropdown triggers always get `aria-haspopup` with the appropriate role (`listbox` or `menu`).
- Floating action buttons (WhatsApp, call) always get `aria-label` describing their purpose.
- Decorative duplicate elements (e.g., marquee second set) use `aria-hidden="true"`.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.

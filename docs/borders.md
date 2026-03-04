# Border System

Consistent border tokens used across the entire website.

## Border Colors

Two-tier system based on element role:

| Tier | Class | Usage |
|------|-------|-------|
| **Structural** | `border-neutral-800` | Cards, dividers, containers, header, footer, FAQ separators, form wrappers |
| **Interactive** | `border-neutral-700` | Inputs, selects, textareas, dropdown triggers, secondary buttons, region code dropdowns, dropdown menus |

### States

| State | Class | Usage |
|-------|-------|-------|
| **Focus** | `focus:border-primary-500` | All focusable interactive elements — no opacity variants |
| **Hover (structural)** | `hover:border-neutral-700` | Card hover states |
| **Hover (interactive)** | `hover:border-primary-500` | Secondary button hover |

### Rules

- Never use opacity modifiers on border colors (no `/30`, `/40`, `/50`, `/60`)
- The only exception is `border-neutral-300` for the `surface` input variant (light theme)
- Focus borders always use `primary-500` at full opacity

## Border Radius

Four-tier scale matched to component size:

| Token | Usage |
|-------|-------|
| `rounded-lg` | Buttons, inputs, selects, date pickers, dropdown items, region code triggers |
| `rounded-xl` | Dropdown panels, small cards (review cards, blog list cards) |
| `rounded-2xl` | Large cards, form containers, featured blog cards |
| `rounded-full` | CTA links, avatars, pill shapes |

### Rules

- Buttons and inputs share `rounded-lg` so they pair visually in forms
- Nested elements match parent radius when abutting edges (e.g. `rounded-t-2xl` for card image inside a `rounded-2xl` card)
- Region code dropdown uses `rounded-l-lg` with adjacent input using `rounded-l-none`

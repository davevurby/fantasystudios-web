# Button System Documentation

This guide covers the usage of the button component classes defined in `src/styles/buttons.css`. The system supports multiple variants, color schemes, sizes, and states, and is designed for easy integration and customization.

## Variants & Color Schemes

Buttons are available in three variants, each with two color schemes ("orange" and "light"):

- **Primary**: `.btn-primary-orange`, `.btn-primary-light`
- **Secondary**: `.btn-secondary-orange`, `.btn-secondary-light`
- **Tertiary**: `.btn-tertiary-orange`, `.btn-tertiary-light`

## Sizes

Buttons support two sizes:

- **Small**: `.btn-sm`
- **Large**: `.btn-lg`

You can combine a variant/color class with a size class:

```html
<button class="btn-primary-orange btn-sm">Small Primary Orange</button>
<button class="btn-secondary-light btn-lg">Large Secondary Light</button>
```

## States

All buttons support the following states:

- **Default**: Base appearance
- **Hover/Focus**: Shows a colored ring and/or background change
- **Active**: Thicker ring or shadow
- **Disabled**: Muted colors and no interaction

These states are handled automatically via CSS pseudo-classes. No extra code is needed.

## Example Usage

```html
<button class="btn-primary-orange btn-sm lg:btn-lg">Click me</button>
<button class="btn-secondary-orange btn-sm lg:btn-lg">Click me</button>
<button class="btn-tertiary-orange btn-sm lg:btn-lg">Click me</button>

<button class="btn-primary-light btn-sm lg:btn-lg">Click me</button>
<button class="btn-secondary-light btn-sm lg:btn-lg">Click me</button>
<button class="btn-tertiary-light btn-sm lg:btn-lg">Click me</button>
```

## Responsivity

To make buttons responsive, use Tailwind's responsive prefixes with your size classes. For example:

```html
<button class="btn-primary-orange btn-sm lg:btn-lg">Responsive Button</button>
```
- This will render the button as small (`btn-sm`) on mobile and large (`btn-lg`) on `lg` (large) screens and up.
- You can use any Tailwind breakpoint prefix (`sm:`, `md:`, `lg:`, `xl:`, etc.) with the size classes.

## Customization

- You can further customize buttons by adding your own utility classes or overriding styles in your own CSS.
- For icons or additional content, simply place them inside the `<button>` element as needed.

## Accessibility

- All buttons use semantic `<button>` elements and support keyboard focus and disabled states out of the box.

---

For more advanced usage or to add new variants, extend the CSS in `src/styles/buttons.css` following the existing patterns.

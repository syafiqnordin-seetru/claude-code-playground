# Component Styling

Angular components can define styles that apply specifically to their template, enabling encapsulation and modularity.

## Defining Styles

Styles can be defined inline or in separate files.

```ts
@Component({
  selector: 'app-photo',
  // Inline styles
  styles: `
    img {
      border-radius: 50%;
    }
  `,
  // OR external file
  styleUrl: 'photo.component.css',
})
export class Photo {}
```

## View Encapsulation

Every component has a view encapsulation setting that determines how styles are scoped.

| Mode                            | Behavior                                                                                      |
| :------------------------------ | :-------------------------------------------------------------------------------------------- |
| `Emulated` (Default)            | Scopes styles to the component using unique HTML attributes. Global styles can still leak in. |
| `ShadowDom`                     | Uses the browser's native Shadow DOM API to isolate styles completely.                        |
| `None`                          | Disables encapsulation. Component styles become global.                                       |
| `ExperimentalIsolatedShadowDom` | Strictly guarantees that only the component's styles apply.                                   |

### Usage

```ts
import { ViewEncapsulation } from '@angular/core';

@Component({
  ...,
  encapsulation: ViewEncapsulation.None,
})
export class GlobalStyled {}
```

## Special Selectors

### `:host`

Targets the component's host element (the element matching the component's selector).

```css
:host {
  display: block;
  border: 1px solid black;
}
```

### `:host-context()`

Targets the host element based on some condition in its ancestry.

```css
/* Apply styles if any ancestor has the 'theme-dark' class */
:host-context(.theme-dark) {
  background-color: #333;
}
```

### `::ng-deep`

Disables view encapsulation for a specific rule, allowing it to "leak" into child components.
**Note: The Angular team strongly discourages the use of `::ng-deep`.** It is supported only for backwards compatibility.

## Styles in Templates

You can use `<style>` elements directly in a component's template. View encapsulation rules still apply.

```html
<style>
  .dynamic-class {
    color: red;
  }
</style>
<div class="dynamic-class">Hello</div>
```

## External Styles

Using `<link>` or `@import` in CSS is treated as external styles. **External styles are not affected by emulated view encapsulation.**

## Project Color Token System

All colors in this project must be defined as named variables in `src/styles/_colors.scss`. **Never write raw hex or rgba values directly in a component `.scss` file.**

### How to use

At the top of every component `.scss`, import the color file with a wildcard:

```scss
@use '../../styles/colors' as *;
```

Then reference any token by name:

```scss
.my-component {
  color: $color-text-muted;
  border: 1px solid $color-border-card;
  box-shadow: 0 1px 4px rgba($color-shadow-base, 0.06);
  background-color: rgba($color-status-success, 0.12);
}
```

### Adding a new color

If the color you need does not exist in `_colors.scss`, add it there first under the matching section, then reference the new variable:

```scss
// src/styles/_colors.scss  — add new token
$color-text-muted: #6c757d;   // ← new

// src/app/my-component/my-component.scss  — reference by variable
color: $color-text-muted;     // ✅ correct
color: #6c757d;               // ❌ never do this
```

### Token naming conventions

| Category | Pattern | Example |
|---|---|---|
| Brand palette | `$color-brand-<name>` | `$color-brand-teal` |
| Backgrounds | `$color-bg-<name>` | `$color-bg-app` |
| Text | `$color-text-<name>` | `$color-text-muted` |
| Borders | `$color-border-<name>` | `$color-border-card` |
| Shadows | `$color-shadow-<name>` | `$color-shadow-base` |
| Status/semantic | `$color-status-<name>` | `$color-status-success` |
| Utility | `$color-<name>` | `$color-white` |

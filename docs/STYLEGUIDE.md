- [Naming Conventions](#naming-conventions)
  - [Interfaces](#interfaces)
  - [Imports and Exports](#imports-and-exports)
    - [Avoid Using Wildcard Imports/Export](#avoid-using-wildcard-importsexport)
    - [Avoid Using Wildcard Imports](#avoid-using-wildcard-imports)
- [CSS Class Management](#css-class-management)
  - [Organizing Tailwind Classes](#organizing-tailwind-classes)
- [Icons](#icons)
  - [How to add a new icon](#how-to-add-a-new-icon)

# Naming Conventions

## Interfaces

Prefix interface names with a capital `I`.
**Example**

```ts
interface IMyProps {
  /* ... */
}
```

## Imports and Exports

### Avoid Using Wildcard Imports/Export

Use named imports and exports instead of default ones to ensure consistency and clarity.

```ts
import MyComponent from './MyComponent'; // Bad
import { MyComponent } from './MyComponent'; // Good
export default MyComponent; // Bad
export { MyComponent }; // Good
```

### Avoid Using Wildcard Imports

Refrain from using wildcard imports to maintain clarity and prevent namespace conflicts.

**Example**

```ts
// Bad
import * as React from 'react'
:
interface IMyProps {
  children: React.ReactNode;
}

// Good
import { ReactNode } from 'react';
:
interface IMyProps {
  children: ReactNode;
}
```

# CSS Class Management

## Organizing Tailwind Classes

- When using `cn()` (class names) with Tailwind CSS, organize classes for readability.
- If a set of classes becomes extensive, split them into groups, separated by commas.
- Avoid using template literals for `className`. Stick to simple strings.
- In the following example, the Tailwind classes are grouped by position, size & shape, colors, animations.

**Example**

```tsx
<div
  className={cn(
    'fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
    'w-full rounded',
    'bg-white shadow-lg',
    'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
    className,
  )}
>
  :
</div>
```

# Icons

## How to add a new icon

1. Copy the SVG code of the new icon from the Figma in the Dev mode.
2. Create a new file in the `src/assets/images/icons` directory with the name defined in the Figma.
3. Paste the SVG code into the new file.
4. Add the file in the `src/assets/images/icons/index.ts` file.

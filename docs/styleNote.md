### Colors

- **All the colors are defined in @/styles/globals.css, and applied to tailwind in @/tailwind.config.ts**
- Almost all of the color name are used in pre-made components from [shadcnUI](https://ui.shadcn.com/docs).**Deleting or changing any of them might get you in trouble.**
- muted color is soften, less bright primary color
- secondary color wasn't defined in wireframe, so set it #777777(light gray) for now.
- destructive is a color for error

- you can add color in globals.css(both for light and dark theme), and you have to configure it also in tailwind.config.ts

### Radius

All the radius in wireframe was

- lg: 50px(for input)
- md : 20px(for logo container)
- sm : 10px(for most of rounded components).

The root font size is 16px,
so **defined lg radius to be 3.125rem in @/styles/global.css** , which will be 50px when font size is 16px

### Font size

**Configured it in taiwind.config.ts (['font-size', 'line-height'])**

- sm: ['12px', '16px'],
- md: ['16px', '24px'],
- lg: ['18px', '28px'],

### dark theme

**We can easily add dark theme later by change each of the dark-theme color already configured in global.css**

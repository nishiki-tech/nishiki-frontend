## Steps to create a new icon

1. Check if the icon you need is already existing in **src/assets/images/icons** directory.
2. Make it sure to understand which icon is used in wireframe, and copy the SVG of it from there.
3. Copy the SVG and create a new file under **src/assets/images/icons** directory with the same name.
4. Export the svg file from src/assets/images/icons/index.ts, following how other icons are exported.

## Steps to use an icon

1. Use the Icon component defined in src/components/ui/icon.tsx as a wrapper. (Import it from @/components/ui/)
2. Define which icon to use by importing SVG as an Icon component from src/assets/images/icons/index.ts, and pass it to "icon" property.
3. Define the size with the "size" property of the component. By default it's set to be "w-3 h-3".
4. Define the color with "color" property. By default it's set to be black.
5. Define additional styling with "className" property if it's needed. You can overwrite color and size.

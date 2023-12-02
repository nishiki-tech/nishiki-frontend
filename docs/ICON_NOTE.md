## Steps to create a new icon

1. Check if the icon you need is already existing in **src/assets/images/icons** directory.
2. Make it sure to understand which icon is used in wireframe, and copy the SVG of it from there.
3. Copy the SVG and create a new file under **src/assets/images/icons** directory with the same name.
4. Export the svg file from src/assets/images/icons/index.ts, following how other icons are exported.
5. Import and configure the icon from there into src/components/ui/icon.tsx, following how other icons are imported and configured.

## Steps to use an icon

1. Use the Icon component defined in src/components/ui/icon.tsx.
2. Define the size with the "size" property of the component.
3. Define the color with the "stroke" or/and "fill" property of the component. Follow how it's styled in wireframe.
4. Define additional styling with "className" property if it's needed.

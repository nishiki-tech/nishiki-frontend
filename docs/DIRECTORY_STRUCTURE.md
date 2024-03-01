# Directory Structure

Welcome to our project! This document outlines our project's directory structure, adhering to a "Feature-Driven Folder Structure" approach. The structure is inspired by insights from both an [English article](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25#indexjs-as-public-api) and a [Japanese article](https://zenn.dev/necscat/articles/d5d9b7a3f859d7).

## Overview

- [Directory Structure](#directory-structure)
  - [Overview](#overview)
    - [`app/`](#app)
    - [`assets/`](#assets)
    - [`assets/images/`](#assetsimages)
    - [`assets/images/icons/`](#assetsimagesicons)
    - [`assets/images/logos/`](#assetsimageslogos)
    - [`components/`](#components)
    - [`components/layouts/`](#componentslayouts)
    - [`components/pages/`](#componentspages)
    - [`components/parts/`](#componentsparts)
    - [`components/typography/`](#componentstypography)
    - [`components/ui/`](#componentsui)
    - [`const/`](#const)
    - [`features/`](#features)
    - [`features/<feature_name>/`](#featuresfeature_name)
    - [`features/<feature_name>/components/`](#featuresfeature_namecomponents)
    - [`features/<feature_name>/lib/`](#featuresfeature_namelib)
    - [`features/<feature_name>/types/`](#featuresfeature_nametypes)
    - [`features/<feature_name>/utils/`](#featuresfeature_nameutils)
    - [`hooks/`](#hooks)
    - [`lib/`](#lib)
    - [`styles/`](#styles)
    - [`types/`](#types)
    - [`utils/`](#utils)

The following is a brief overview of the project's directory structure under the `src/` directory.

### `app/`

Handles routing, shared layouts, loading, and error displays, using the [Next.js app router](https://nextjs.org/docs/app). Minimal code is written here, focusing on routing and layout management.

### `assets/`

Stores all static assets, such as images or other media files.

### `assets/images/`

Stores all image files used in the project.

### `assets/images/icons/`

Stores all icon images (typically in SVG format) used in the project.

### `assets/images/logos/`

Stores all logo images used in the project.

### `components/`

Stores non-feature-specific components.

### `components/layouts/`

Stores shared layout components composed of other components from the `parts/` directory.

### `components/pages/`

Stores page components that implement actual pages, which are then imported into 'page.tsx' files in the `app/` directory.

### `components/parts/`

Stores generic parts, such as headers, footers, and navigation bars.

### `components/typography/`

<!-- https://ui.shadcn.com/docs/components/typography -->

Stores shared typography components, such as headings, paragraphs, and lists. Recommended to use the components exampled in [shadcnUI](https://ui.shadcn.com/docs/components/typography).

### `components/ui/`

Stores shared UI components, such as buttons, cards, text fields. Recommended to use [shadcnUI](https://ui.shadcn.com/docs) components.

### `const/`

Stores constants used across the project.

### `features/`

Each application feature has a dedicated directory, following a "feature-driven structure". Inspired by [this article](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25#indexjs-as-public-api).

### `features/<feature_name>/`

Stores all directories and files related to a specific feature.

### `features/<feature_name>/components/`

Stores feature-specific components.

### `features/<feature_name>/lib/`

Stores feature-specific code modules or external libraries.

### `features/<feature_name>/types/`

Stores feature-specific types.

### `features/<feature_name>/utils/`

Stores feature-specific utility functions.

### `hooks/`

Stores all [custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) used across the project.

### `lib/`

Stores code modules or external libraries used across the project.

### `styles/`

Stores all global styles.

### `types/`

Stores types used across the project.

### `utils/`

Stores utility functions used across the project.

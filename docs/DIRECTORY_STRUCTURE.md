# Project Directory Structure

Welcome to our project! This document outlines our project's directory structure, adhering to a "Feature-Driven Folder Structure" approach. The structure is inspired by insights from both an [English article](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25#indexjs-as-public-api) and a [Japanese article](https://zenn.dev/necscat/articles/d5d9b7a3f859d7).

## Directory Structure Overview

- [Project Directory Structure](#project-directory-structure)
  - [Directory Structure Overview](#directory-structure-overview)
    - [`app/`](#app)
    - [`components/`](#components)
    - [`components/layouts/`](#componentslayouts)
    - [`components/icons/`](#componentsicons)
    - [`components/pages/`](#componentspages)
    - [`components/parts/`](#componentsparts)
    - [`components/ui/`](#componentsui)
    - [`const/`](#const)
    - [`features/`](#features)
    - [`features/<feature_name>/`](#featuresfeature_name)
    - [`features/<feature_name>/api/`](#featuresfeature_nameapi)
    - [`features/<feature_name>/components/`](#featuresfeature_namecomponents)
    - [`features/<feature_name>/hooks/`](#featuresfeature_namehooks)
    - [`features/<feature_name>/types/`](#featuresfeature_nametypes)
    - [`features/<feature_name>/utils/`](#featuresfeature_nameutils)
    - [`hooks/`](#hooks)
    - [`lib/`](#lib)
    - [`styles/`](#styles)
    - [`types/`](#types)
    - [`utils/`](#utils)
  - [Considerations for Improvement](#considerations-for-improvement)

The following is a brief overview of the project's directory structure under the `src/` directory.

### `app/`

Handles routing, shared layouts, loading, and error displays, using the [Next.js app router](https://nextjs.org/docs/app). Minimal code is written here, focusing on routing and layout management.

### `components/`

Houses all shared components used across different features.

### `components/layouts/`

Combines parts from the 'parts/' directory to create various layouts.

### `components/icons/`

Houses icon components, primarily as SVG wrappers or components.

### `components/pages/`

Implements actual pages, which are then imported into 'page.tsx' files in the 'app/' directory.

### `components/parts/`

Features shared components that are larger than basic UI components, such as headers and footers.

### `components/ui/`

Includes shared UI components, such as buttons, cards, text fields. Recommended to use [shadcnUI](https://ui.shadcn.com/docs) components.

### `const/`

Stores all constant values utilized in the project.

### `features/`

Each application feature has a dedicated directory, following a feature-driven structure.

### `features/<feature_name>/`

Directories specific to each feature.

### `features/<feature_name>/api/`

Contains API related files.

### `features/<feature_name>/components/`

Houses non-shared components unique to the feature.

### `features/<feature_name>/hooks/`

Includes non-shared custom hooks relevant to the feature.

### `features/<feature_name>/types/`

Stores non-shared types specific to the feature.

### `features/<feature_name>/utils/`

Contains non-shared utility functions relevant to the feature.

### `hooks/`

Shared custom hooks utilized across various features.

### `lib/`

Manages files related to third-party libraries, with a separate directory for each library.

### `styles/`

Global CSS files for the project.

### `types/`

Shared types used across different features.

### `utils/`

Contains shared utility functions used across different features.

## Considerations for Improvement

- A global "utils/" directory for common utility functions and shared logic could enhance the project structure.
- Individual "utils/" directories within each feature directory can aid in managing feature-specific utility functions.

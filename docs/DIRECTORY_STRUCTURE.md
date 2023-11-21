# Project Directory Structure

Welcome to the team! This document provides an overview of our project's directory structure, following a "Feature-Driven Folder Structure" approach. For a deeper understanding, you can refer to [this articles](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25#indexjs-as-public-api).

##

- [Project Directory Structure](#project-directory-structure)
  - [](#)
    - [app/](#app)
    - [components/](#components)
    - [components/base/](#componentsbase)
    - [components/base/layouts/](#componentsbaselayouts)
    - [components/base/parts/](#componentsbaseparts)
    - [components/base/ui/](#componentsbaseui)
    - [components/base/page/](#componentsbasepage)
    - [const/](#const)
    - [features/](#features)
    - [features/\<name_of_feature\>/](#featuresname_of_feature)
    - [features/\<name_of_feature\>/api/](#featuresname_of_featureapi)
    - [features/\<name_of_feature\>/components/](#featuresname_of_featurecomponents)
    - [features/\<name_of_feature\>/hooks/](#featuresname_of_featurehooks)
    - [features/\<name_of_feature\>/types/](#featuresname_of_featuretypes)
    - [hooks/](#hooks)
    - [lib/](#lib)
    - [styles/](#styles)
    - [types/](#types)
  - [Considerations for Improvement](#considerations-for-improvement)

### app/

Mainly for routing, shared layout, loading, and error displays, utilizing [Next.js app router](https://nextjs.org/docs/app). We will try to write as less as possible under this directory.

### components/

Contains all shared components across features.

### components/base/

For larger shared components and layouts (e.g. Layouts, header, footer,navigation tabs, etc.).

### components/base/layouts/

Combinations of parts from the parts/ directory for creating layouts.

### components/base/parts/

Shared components larger than UI components (e.g., headers, footers).

### components/base/ui/

Shared UI components, preferably from [shadcnUI](https://ui.shadcn.com/docs).

### components/base/page/

Actual page implementations, imported into page.tsx files under the app/ directory.

### const/

Stores all constant values.

### features/

Each feature of the application has its own directory, following the feature-driven approach.

### features/<name_of_feature>/

Feature-specific directories.

### features/<name_of_feature>/api/

API related files.

### features/<name_of_feature>/components/

Non-shared components specific to the feature.

### features/<name_of_feature>/hooks/

Non-shared custom hooks for the feature.

### features/<name_of_feature>/types/

Non-shared types for the feature.

### hooks/

Shared custom hooks across features.

### lib/

Files related to third-party libraries. Create a directory for each library.

### styles/

Global CSS.

### types/

Shared types across features.

## Considerations for Improvement

- Consider adding a global "util" directory for utility functions and shared logic.
- Each feature might benefit from its own "util" directory for feature-specific utility functions.

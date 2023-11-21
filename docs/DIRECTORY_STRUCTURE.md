# Project Directory Structure

Welcome to our project! This document outlines our project's directory structure, adhering to a "Feature-Driven Folder Structure" approach. For more insights, refer to [this detailed article](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25#indexjs-as-public-api).

## Directory Structure Overview

- [Project Directory Structure](#project-directory-structure)
  - [Directory Structure Overview](#directory-structure-overview)
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

Handles routing, shared layouts, loading, and error displays, using the [Next.js app router](https://nextjs.org/docs/app). Minimal code is written here, focusing on routing and layout management.

### components/

Houses all shared components used across different features.

### components/base/

Contains larger shared components and layouts like Layouts, headers, footers, and navigation tabs.

### components/base/layouts/

Combines parts from the 'parts/' directory to create various layouts.

### components/base/parts/

Features shared components that are larger than basic UI components, such as headers and footers.

### components/base/ui/

Includes shared UI components, with a recommendation to use [shadcnUI](https://ui.shadcn.com/docs) components.

### components/base/page/

Implements actual pages, which are then imported into 'page.tsx' files in the 'app/' directory.

### const/

Stores all constant values utilized in the project.

### features/

Each application feature has a dedicated directory, following a feature-driven structure.

### features/<name_of_feature>/

Directories specific to each feature.

### features/<name_of_feature>/api/

Contains API related files.

### features/<name_of_feature>/components/

Houses non-shared components unique to the feature.

### features/<name_of_feature>/hooks/

Includes non-shared custom hooks relevant to the feature.

### features/<name_of_feature>/types/

Stores non-shared types specific to the feature.

### hooks/

Shared custom hooks utilized across various features.

### lib/

Manages files related to third-party libraries, with a separate directory for each library.

### styles/

Global CSS files for the project.

### types/

Shared types used across different features.

## Considerations for Improvement

- A global "utils/" directory for common utility functions and shared logic could enhance the project structure.
- Individual "utils/" directories within each feature directory can aid in managing feature-specific utility functions.

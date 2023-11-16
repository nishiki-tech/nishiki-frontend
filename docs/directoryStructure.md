# Project Directory Structure

This is a doc for developers who just joined this project.
This project adheres to the **"Feature-Driven Folder Structure".**
For better understanding please refer to this [English article](https://dev.to/profydev/screaming-architecture-evolution-of-a-react-folder-structure-4g25#indexjs-as-public-api)
or [Japanese article](https://zenn.dev/necscat/articles/d5d9b7a3f859d7)

## app/

- Basic directory structure using [next.js ver 13 app router](https://nextjs.org/docs/app)
- We will try to write as less as possible under this directory. This directory is mainly and only responsible for **routing** and **shared layout**, **Loading** and **error display**, using app router's feature.

## components/

- **All the shared components across the features** belongs to this directory.

### base/

- Relatively bigger shared components and layouts (Layouts,header,footer,navigationTab,etc)

#### layouts/

- All the layouts, is mostly combination of parts(headers, footers, or navigationTab) from "parts" directory

#### parts/

- Shard components, bigger compared to ui components. (ex : header,footer)

#### ui/

- Shared UI components. Recommended to use ones from [shadcnUI](https://ui.shadcn.com/docs)

#### page/

- The actual implementations of each page, which will be imported in each of "page.tsx" in @/app directory

## const/

- All the constant values

## features/

Each feature in the application has its own directory, following the feature-driven approach.

### /\*\* (name of each feature)

#### /api

- api related files

#### /components

- **Non shared components**, which is only used to do anything related to this feature.

#### /hooks

- **Non Shared custom hooks**,which is only used to do anything related to this feature.

#### /types

- **Non Shared types**,which is only used to do anything related to this feature.

## /hooks

- **All the shared custom hooks across the features** belongs to this directory.

## /lib

- Third party library related files. Create directory for each of the library.

## /stores

- Global state related files. Using Redux Tool Kit

### /slices

- All [slices](https://redux.js.org/tutorials/essentials/part-2-app-structure#:~:text=Redux%20Slices%E2%80%8B,multiple%20%22slices%22%20of%20state.) created with RDK.

## /styles

- Global css

## /types

- **All the shared types across the features** belongs to this directory.

## **Room for improvements, notes**

- Global "util" directory might be needed.
- "util" directory for each of feature might be needed.

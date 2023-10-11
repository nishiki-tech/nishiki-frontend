# Contributing to Nishiki

Thank you for your interest in contributing to Nishiki! This document outlines the guidelines for contributing to this project.

## Table of Contents

- [Contributing to Nishiki](#contributing-to-nishiki)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Branching Rules](#branching-rules)
    - [Types of Branches](#types-of-branches)
    - [Branch Naming Conventions](#branch-naming-conventions)
      - [Examples](#examples)
  - [Testing](#testing)
  - [Pull Requests](#pull-requests)

## Getting Started

1. Fork the repository
2. Clone your fork
3. Set up the development environment
4. Create a new branch

## Branching Rules

### Types of Branches

- `main`: For production use. Only accepts PRs from `develop` (and `hotfix` in emergencies).
- `develop`: Accepts PRs from `feature` branches.
- `feature/`: Individual branches for each issue.
- `hotfix/`: Branches for urgent fixes.
- `docs/`: Branches for documentation updates.

### Branch Naming Conventions

- Feature Addition: `feature/<issue_number>-<brief_description>` (develop ⇔ feature)
- Hotfix: `hotfix/<issue_number>-<brief_description>` (main ⇔ hotfix)
- Documentation Update: `docs/<issue_number>-<brief_description>` (develop ⇔ docs)

*Note: `<issue_number>-` can be omitted if the modification is not based on an issue.*


#### Examples

- feature/42-user-authentication
- hotfix/56-security-vulnerability-fix
- docs/108-update-installation-guide

## Testing

- Write unit tests for your features.
- Make sure all tests pass locally and on the CI server.
- Update existing tests if you modify code that affects them.

## Pull Requests

1. Make sure all tests pass.
2. Update the documentation if necessary.
3. Submit a pull request to the appropriate branch according to the branching rules.

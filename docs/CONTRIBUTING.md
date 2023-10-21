# Contributing to Nishiki

Thank you for your interest in contributing to Nishiki! This document outlines the guidelines for contributing to this project.

## Table of Contents

- [Contributing to Nishiki](#contributing-to-nishiki)
  - [Table of Contents](#table-of-contents)
  - [Branching Rules](#branching-rules)
    - [Types of Branches](#types-of-branches)
    - [Branch Naming Conventions](#branch-naming-conventions)
      - [Examples](#examples)
  - [Testing](#testing)
  - [Pull Requests](#pull-requests)
    - [For Team Members:](#for-team-members)
    - [For External Contributors:](#for-external-contributors)

## Branching Rules

### Types of Branches

- `main`: For production use. Only accepts PRs from `develop` (and `hotfix` in emergencies).
- `develop`: Accepts PRs from `feature` branches.
- `feature/`: Branches for developing new features or improvements.
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

### For Team Members:

1. Create a new branch from the `develop` branch, or from the `main` branch if you're working on a hotfix.
2. Follow the [Branch Naming Conventions](#branch-naming-conventions) while naming your branch.
3. Work on your changes locally.
4. Ensure that all [tests](#testing) pass.
6. Push your branch to the repository.
7. Create a Pull Request against the original branch you branched from.
8. Await code review, and address any comments as necessary.

### For External Contributors:

1. Fork the repository to your own GitHub account.
2. Clone your forked repository locally.
3. Create a new branch from the `develop` branch on your fork.
4. Follow the [Branch Naming Conventions](#branch-naming-conventions) while naming your branch.
5. Work on your changes locally.
6. Ensure that all [tests](#testing) pass.
8. Push your branch to your forked repository.
9. Create a Pull Request against the `develop` branch of the original repository.
10. Await code review, and address any comments as necessary.

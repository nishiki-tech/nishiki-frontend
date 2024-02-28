# Branching Schemes

## Main Branches

The following are the main branches in the repository. These branches are protected and cannot be pushed to directly.

- `main`: For production use. Only accepts PRs from `develop` (and `hotfix/` in emergencies).
- `develop`: The default branch, which accepts PRs from the feature branches listed below.

## Feature Branches

The following are the types of branches that can be created from the `develop` branch.

**Note:** \*_The `hotfix/` branch is an exception . It should be branched from and merged back into the `main` branch._

- `feature/`: Branches for developing new features or enhancements.
- `fix/`: Branches for fixing bugs or issues.
- `hotfix/`: Branches for fixing _urgent_ issues in production.
- `refactor/`: Branches for refactoring code.
- `test/`: Branches for testing new features or changes.
- `docs/`: Branches for updating documentation.
- `chore/`: Branches for changes that do not fit into any of the above categories.

## Branch Naming Conventions

### Syntax

```
<type>/<issue_number>-<brief_description_separated_by_dashes>
```

### Examples

- Docs: `docs/108-update-installation-guide`
- Feature: `feature/15-add-button-to-home-page`
- Fix: `fix/56-resolve-error-in-data-fetching`
- Hotfix: `hotfix/67-fix-user-authentication-issue`
- Refactor: `refactor/102-reorganize-file-structure`
- Test: `test/23-add-unit-tests-for-form-validation`
- Docs: `docs/108-update-installation-guide`
- Chore: `chore/12-update-dependencies`

**NOTE:** _`<issue_number>-` can be omitted if the modification is not based on an issue._

# Testing

We use [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/) for testing. Run the following command to run all tests:

```bash
npm test
```

The coverage report will be generated in the `./coverage` directory. Open `./coverage/lcov-report/index.html` in your browser to see the coverage report. It will also be displayed in the terminal after running the test command.

## Guidelines

- Write unit tests for functions that are defined in `.ts` files within the `src` directory.
- Update existing unit tests if you modify code that affects them.
- Test files should be named with the `.test.ts` extension.
- Test files should be placed in the same directory as the file being tested.
- The test command will be run automatically when you push your branch, both locally and in the GitHub Actions.
- Make sure all tests pass locally and in the GitHub Actions.

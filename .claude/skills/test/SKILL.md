---
name: test
description: write unit test when user asked to write test
metadata:
  short-description: Write robust test for Vue application
---

You are an expert in typescript and have a strong expertise about writing test with the vue framework. You write structure and robust test that cover correctly the development to test

## Testing

- Use the library @testing-library/vue to write the test
- Use Vitest as a test Runner
- Be sure to mock dependencies (sub stub) and isolate components for testing
- Use the `render` function from @testing-library/vue to render components
- Use the `screen` object from @testing-library/vue to query the DOM
- Use the `fireEvent` function from @testing-library/vue to simulate user events
- Use the `waitFor` function from @testing-library/vue to wait for async operations
- Use the command `npx nx test $name_directory` to run all the tests for a specific directory
- Use the `inputs` and `on` properties of the `render` function from @testing-library/vue to bind inputs and outputs component
- Use the `rerender` function with the `partialUpdate` property from @testing-library/vue to rerender the component with an update of inputs or on
- Please avoid writing test that test twice the same things
- Be sure all the test pass
- Do not import `describe` `vitest` `it` or `expect` in test files

you can find the documentation of @testing-library [here](https://testing-library.com/docs/vue-testing-library/intro/)

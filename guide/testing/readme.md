# Testing

- Use the [Dodds "testing trophy"](https://testingjavascript.com/) approach:
  - Static tests using TypeScript types.
  - We'll use [Jest](https://jestjs.io/) for:
    - Unit tests only for utility functions.
    - Test components with integration tests.
    - Simple functional (presentation) components can be tested with snapshots.
      - If conditionals can return different outputs, then one snapshot per condition.
      - Keep the components simple, so the snapshots are simple and can be rendered inline.
      - If the snapshot is too large to be rendered inline, then we probably shouldn't be using a snapshot test.
  - End-to-end tests for all site function (from the user's perspective).
    - Let's begin with [Playwright](https://playwright.dev/docs/intro), and if we determine that it is not workable, we
      will switch to [Cypress](https://www.cypress.io/).
- **Coverage**
  - Initially, we'll shoot for 100% test coverage.
  - If we deem that certain coverage is not needed, then we will remove it from the coverage with inline comments so
    that the coverage reflects actual desired coverage: `/* istanbul ignore next */`
  - This way, the coverage should always be 100%. That makes it binary: it's either green (100%), or it isn't. Easy,
- **Storybook**
  - We'll use [Storybook](https://storybook.js.org/) both to test components and to provide documentation for how to use
    the application.

# Linting

We use ESLint for linting. Linting is essential to ensure that we don't commit any more bad code than absolutely
unavoidable. The linter is set up to run automatically on commit with `--fix` enabled to fix what can be fixed.

There is a script in the `package.json` file to permit you to run the linter with `pnpm lint` (or `p lint` if you've
added the alias to your shell):

```json
"scripts": {
  "lint": "eslint . --ignore-path .gitignore --ext .js,.ts,.tsx --fix"
}
```

We also use [`husky`](https://github.com/typicode/husky) to run pnpm commands on git commit (see `.husky/pre-commit`):

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
pnpm format
pnpm test:local
```

Our `.eslintrc.js` file currently looks like this:

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // enable linting for jsx files
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
    'react/react-in-jsx-scope': 'off',
    // NextJs specific fix: allow jsx syntax in js files
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], //should add ".ts" if typescript project
    'react/display-name': 1,
  },
}
```

No code should be commited with ESLint errors. If possible, all ESLint warnings should also be addressed before
committing code.

Do not change the `.eslintrc.js` configuration without first gaining team consensus. As with the formatter, this ensures
consistent quality code across the team, helping to prevent bugs, security holes, etc.

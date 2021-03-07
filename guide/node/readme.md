# Node

We should run on the latest version of node as much as possible, and we should be keeping all dependencies up to date
with the latest versions as much as possible. This prevents tech debt and reduces security issues.

We use [`nvm`](https://github.com/nvm-sh/nvm) to control the version of node we're using. This is set in an `.nvmrc`
file in the root of the project:

```sh
15.11.0
```

We can update this as needed, but it will be necessary to install new versions of node into nvm as they are released,
e.g.:

```sh
nvm install v15.11.0 && echo "15.11.0" > .nvmrc
```

## Use `pnpm`

We use [`pnpm`](https://pnpm.js.org/) for the reasons given on the linked site. Also, `pnpm` is open source and
community-driven (so far). And it's just better than `yarn` or `npm`. To hell with Facebook.

If you need to use `npx`, you can use `pnpx`, but be aware that it will probably install files with `npm` instead of
`pnpm`. Monopolies suck. If this happens, one option is to opt out of installation and do it yourself. The other is to:

- Delete the `package-lock.json` or `yarn-lock.yml` file.
- Run `pnpm i` to install using `pnpm`
- If you see a message that `pnpm` moved the modules installed by `npm` or `yarn` into a `node_modules/.ignore` folder,
  then delete the modules in that folder. We won't need them.

## Updating dependencies

To update the dependencies to the latest versions, which we should do very regularly (weekly?), this is an easy method:

1. Create an update branch called `chore/upgrade-dependencies`.
2. Delete the `node_modules` folder and the `pnpm-lock.yaml` file: `rm -rf node_modules pnpm-lock.yaml`. This will
   ensure that we get the latest versions.
3. Open the `package.json` file and cut the `dependencies` and `devDependencies` and paste them into another file.
4. Save the changes to `package.json`. It should look like this:

   ```json
     "devDependencies": {},
     "dependencies": {}
   ```

5. Use a regular expression to strip the versions, quotation marks, commas, extra spaces, and line endings so that you
   get the dependencies as a space-separated list.

   1. Here is the regular expression I use: `^[ ]*"([^"]+)".+$\n`.
   2. Here is the replace expression I use: ` $1`. Note the space. It helps if you either do the dependencies and
      devDependencies separately, or separate them by a blank line so they don't all run together, and have at least two
      blank lines at the end of the file. For example:

   I start with this:

   ```json
       "@babel/core": "^7.13.8",
       "@babel/plugin-proposal-partial-application": "^7.12.13",
       "@babel/preset-env": "^7.13.9",
       "@babel/preset-react": "^7.12.13",
       "@babel/preset-typescript": "^7.13.0",
       "@testing-library/jest-dom": "^5.11.9",
       "@testing-library/react": "^11.2.5",
       "@types/node": "^14.14.31",
       "@types/react": "^17.0.2",
       "@types/react-dom": "^17.0.1",
       "@typescript-eslint/eslint-plugin": "^4.16.1",
       "@typescript-eslint/parser": "^4.16.1",
       "babel-jest": "^26.6.3",
       "eslint": "^7.21.0",
       "eslint-config-prettier": "^8.1.0",
       "eslint-plugin-cypress": "^2.11.2",
       "eslint-plugin-jsx-a11y": "^6.4.1",
       "eslint-plugin-react": "^7.22.0",
       "eslint-plugin-react-hooks": "^4.2.0",
       "husky": "^5.1.3",
       "jest": "^26.6.3",
       "prettier": "^2.2.1",
       "ts-jest": "^26.5.3",
       "ts-node": "^9.1.1",
       "typescript": "^4.2.3"

       "next": "^10.0.8",
       "react": "^17.0.1",
       "react-dom": "^17.0.1",
       "react-icons": "^4.2.0",
       "tslib": "^2.1.0"


   ```

   After I run the regular expression, I get this:

   ```sh
    @babel/core @babel/plugin-proposal-partial-application @babel/preset-env @babel/preset-react @babel/preset-typescript @testing-library/jest-dom @testing-library/react @types/node @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-jest eslint eslint-config-prettier eslint-plugin-cypress eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks husky jest prettier ts-jest ts-node typescript
    next react react-dom react-icons tslib

   ```

   I then add the pnpm install commands (I have a `p` alias):

   ```sh
   p i -D @babel/core @babel/plugin-proposal-partial-application @babel/preset-env @babel/preset-react @babel/preset-typescript @testing-library/jest-dom @testing-library/react @types/node @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-jest eslint eslint-config-prettier eslint-plugin-cypress eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks husky jest prettier ts-jest ts-node typescript
   p i next react react-dom react-icons tslib

   ```

6. Copy and paste that to the command line and run the install and pnpm installs all the latest.
7. Run the app and make sure everything works.
8. Run the linter and all the tests.
9. Do a commit, push, and open a PR. Get one approval and you can merge to main.

## Adding libraries

We should try to keep our dependencies to a minimum. For this reason, please consult with the rest of the team before
adding any new dependencies

## Broken upgrades

If for some reason we cannot upgrade a dependency and must stick with an older version, please add that as an
[Issue on GitHub](https://github.com/jakebax/new-jac-city/issues) so we remember to fix it as soon as we can.

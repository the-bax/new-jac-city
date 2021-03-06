# Formatting

It is very important to make code as clear and easy-to-read as possible. This reduces the **cognitive load** when
writing, reading, or debugging code, and that reduces the number of errors and potential damage due to missed errors.

**KEEP CODE AS READABLE AS POSSIBLE.** All of the rules in this style guide are about making code more consistent and
readable.

For formatting, we use **Prettier**.

## Semicolons

While I initially resisted removing semicolons from my code despite the code looking much cleaner, after I noted that
many top coders were working without them, and experimented to make sure everything still worked, I happily abandoned
them.

Semicolons really are not necessary&mdash;there are only two situations where that can be a problem, both rare, and you
can simply begin those lines with a semicolon to fix the problem. You'll know if you encounter those issues. Follow this
style guide and you never will.

\*_So we will not use semicolons here, and Prettier is configured accordingly:_

```js
{
  "semi": false,
}
```

## Tabs

Using true tabs is problematic because different machines, operating systems, etc. have differently-sized tabs&mdash;as
much as eight (8!) characters.

Because IDEs and text editors now allow us to use spaces with the Tab key, it is easier to set all tabs to spaces.

Regarding two vs. four spaces, two spaces is sufficient for easy readability and minimizes the indentation when items
are deeply nested -- often an issue with React components.

So Prettier is set to use 2 spaces for each tab. Code should be indented properly:

```js
{
  "tabWidth": 2,
  "useTabs": false
}
```

## Alignment

Don't try to align commas, periods, indented code. Prettier will override you. For example, this is a popular style:

```js
<!-- prettier-ignore -->
const doTheMath = pipe(
                        add(4),
                        multiply(2),
                        subtract(3),
                        divideBy(6)
                      )
```

Prettier will automatically reformat this to:

```js
<!-- prettier-ignore -->
const doTheMath = pipe(
  add(4),
  multiply(2),
  subtract(3),
  divideBy(6)
)
```

So don't bother.

## Other settings

- With JavaScript, I generally prefer to leave off the parenthesis around single function parameters. It is cleaner. But
  with TypeScript, that's usually not possible because... Type! So we'll leave **`arrowParens`**: **`"always"`**.
- Brackets are easier to read when there are spaces between the opening and closing brackets and the contents, so
  **`bracketSpacing`**: **`true`**.
- We'll use the simple, Unix-style **`endOfLine`**: **`"lf"`**. We don't need no stinkin' carriage returns.
- With the JSX brackets, if you stack the props, it is nice to put the closing bracked on a new line. This makes the
  `children` obvious. For example:

```tsx
<!-- prettier-ignore -->
// Prefer THIS:
return (
  <Component
    prop="value"
    prop="value"
    prop="value"
  >
    <Child>Child 1</Child>
    <Child>Child 2</Child>
  </Component>
)

// DON'T DO THIS:
return (
  <Component
    prop="value"
    prop="value"
    prop="value">
    <Child>Child 1</Child>
    <Child>Child 2</Child>
  </Component>
)
```

See how the last prop is difficult to distinguish from the first child component? So we'll set **`jsxBracketSameLine`**:
**`false`**.

Here is the full prettier file:

- HTML attribute values are typically double-quoted. The biggest benefit of JSX is that it _looks like_ the HTML it
  produces. This vastly reduces cognitive load. Those who rail against JSX don't know whereof they speak. So to keep
  that consistent, we will set **`jsxSingleQuote`**: **`false`** and double-quote our props.
- To distinguish props from other values, we will set **`singleQuote`**: **`true`**. This means that in our JavaScript,
  all string values will be single-quoted. If a value contains single or double-quotes (or apostrophes), it is best to
  enclose it in backticks \`A value with "double-quotes"\`.
- Lines of text that run off the screen are difficult to read. Whitespace is collapsed in HTML, so we can wrap as we see
  fit. To accommodate TypeScript's types, we've extended the line length to 120 characters: **`printWidth`**: **`120`**.
  And we'll wrap all prose: **`proseWrap`**: **`true`**.
- It is easier to sort lists, array values, parameters, arguments, props, etc. when the last item in the list is
  followed by a comma. This makes all list items identical, so sorting the list, and adding or removing items is easy.
  Hence, **`trailingComma`**: **`true`**.

```js
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 120,
  "proseWrap": "always",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false
}
```

Don't make changes or override settings unless the team has agreed to it. If we make a change, we'll do it in an ad hoc
branch dedicated to reformatting alone.

## Script

You should be using Visual Studio Code with the
[`esbenp.prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension. Then
open the Code > Preferences > Settings menu [⌘,] and ensure the following are set for either the User or the Workspace:

```js
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

As a backupt to Prettier, we also have a `.editorconfig` file:

```sh
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

You should also install the VSCode
[`editorconfig.editorconfig`](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension
and enable it.

This keeps all our code synchronized and prevents unnecessary noise in Git diff files on pull requests caused by code
reformatting between developers.

We also use [`husky`](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged) to
[automatically format files](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)&mdash;and
run [ESLint](https://eslint.org/)&mdash;on git commit:

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --cache --fix",
      "prettier --write"
    ]
  }
```

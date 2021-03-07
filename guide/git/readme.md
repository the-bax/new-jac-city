# Git

We will use feature branches. Name them accordingly:

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)

So a branch to create a new feature might be called `feat/name-of-feature`.

Similarly, commit messages will use the above, but will look like this:

- `style: update stylelint rules`
- `feat: add a footer`
- `docs: update the style guide`
- `refactor: refactor the cms connection`

We can use a scope, such as `feat(header): make logo a link`. Note that commit messages are IMPERATIVES: orders. It is
`make logo a link` and `update stylelint rules`, **NOT** `made logo a link` or `updated stylelint rules`. This is the
standard.

Commitlint is installed to enforce this. It's a pain, but it will teach us to be good committers.

Instead of committing using the `-m` flag and a commit message, open the text editor by leaving it off, then add a
multiline commit:

Not this:

```sh
git commit -m 'some commit message'
```

This:

```sh
git commit
```

Then in the file:

```sh
feat(header): make logo a link

Import Link from next/link.
Wrap Link in new styles.
Link on pages other than home page.
Pages link back to home page.
```

This message will automatically appear in the Pull Request description. So that helps.

## CI/CD

We will be using continuous _deployement_ so when a PR is merged to main, it will automatically deploy to production on
AWS. Keep this in mind when merging PRs.

All PRs must be reviewed and must have at least one approval before they can be merged to master. Exception: changes to
documentation alone.

# New Jac City

This is the Next.js CMS app for [the-jac.co.nz](https://the-jac.co.nz/), coming
soon.

## Set up

You should have the latest version of Node.js installed [currently 15.10.0_1].
We'll run on the _edge_. If you're on a Mac, install
[Homebrew](https://brew.sh/) and run `brew upgrade` daily to keep your libraries
up to date.

You'll need `git` and `node` installed, whether with `brew` or some other
package manager.

This app uses [pnpm](https://pnpm.js.org/). Do not use `npm` or `yarn`.

To use, install `pnpm`:

```sh
npx pnpm add -g pnpm
```

Then upgrade it:

```sh
pnpm add -g pnpm
```

Keep it updated regularly.

I add an alias to my `.zshrc` (`.bashrc`) file:

```sh
alias p="pnpm"
```

So now I can install the packages with:

```sh
p i
```

(If you don't add the alias, you'll need to do `pnpm i` instead.)

Then I can run the dev server with:

```sh
p dev
```

As we set this up, I will keep this README up to date, so check for changes.

# Editors

I strongly recommend that you use the latest
[Visual Studio Code](https://code.visualstudio.com/) for this work so that we're
all on the same page. You should also install these extensions to VSCode:

- apollographql.vscode-apollo
- mgmcdermott.vscode-language-babel
- clinyong.vscode-css-modules
- mikestead.dotenv
- editorconfig.editorconfig
- dbaeumer.vscode-eslint
- xyz.local-history
- devine-davies.make-hidden
- bierner.markdown-preview-github-styles
- davidanson.vscode-markdownlint
- esbenp.prettier-vscode
- richie5um2.vscode-sort-json
- tyriar.sort-lines
- unional.vscode-sort-package-json
- stylelint.vscode-stylelint
- mike-co.import-sorter

Once you have those installed, open your preferences [⌘,], and search for
`formatOnSave`. Set it to `true` at least for this workspace.

I've installed ESLint for linting and Prettier for code formatting and tightened
up Babel.

To lint your files, run:

```sh
p lint # `pnpm lint` if you didn't make the alias, but you really should make the alias
```

To format your files, run:

```sh
p format # but if you set formatOnSave to true, this should happen automagically
```

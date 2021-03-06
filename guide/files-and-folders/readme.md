# Files and folders

For this application, we use the following file/folder structure.

**Note: The rule is ONE (1) exported component or function PER FILE (even if
it's only a single line), exported as the default export.**

## `components/`

- All reusable components are kept in the top-level `components/` folder.
- Each component has its own folder.
- The name of the folder is the name of the component in PascalCase, e.g.,
  `NavBar`.
- **All files related to a component belong in the component's folder, not
  scattered elsewhere in the file hierarchy: this makes it easy to move and
  rename components, or to remove them without leaving cruft behind.**
  - The file that holds that component is named `index.tsx`.
  - Tests for the component are in `index.spec.tsx` _in the same folder_.
  - CSS module for the component goes in `index.module.css`.

## Sub-components

- Subcomponent folders should be nested in the folder of the immediate parent
  component _unless they are reused elsewhere_.
- For example, if the `MenuItem` component is only used in the `NavBar`, and the
  `NavBar` is only used in the `Header`, then the folder/file structure should
  look like this:
  - `components/`
    - `Header/`
      - `NavBar/`
        - `MenuItem/`
          - `index.tsx`
          - `index.spec.tsx`
          - `index.module.css`
        - `index.tsx`
        - `index.spec.tsx`
        - `index.module.css`
      - `index.tsx`
      - `index.spec.tsx`
      - `index.module.css`

## Reused components

If the `components/` folder structure follows the structure of the generic page,
then the top level should be:

```
components/
  Footer/
  Header/
  Main/
```

If the `Header` contains a `NavBar` only used within the `Header` then it
belongs inside the `Header` folder:

```
components/
  Footer/
  Header/
    NavBar/
  Main/
```

Nesting continues such that each component is at the highest level in the
hierarchy that it belongs _and no higher_.

However, there will be components that are reused across multiple components
across the site. In other words, the components that depend on it won't fit in a
neat hierarchy.

In this instance the component should be moved to a sibling folder of the
highest-level component that uses it.

For example, suppose that a `MenuItem` contains a `Link`, and that the `Link` is
reused all over the site. Then we would use a folder structure such as this:

```
components/
  Footer/
  Header/
    NavBar/
      MenuItem/
  Link/
  Main/
```

Notice how `Link` has been pulled up out of the folder in which it was
(`MenuItem`) because it is also used in `Footer/` and `Main/`

However, this can cause a lot of noise in the `components/` folder, so it makes
sense to wrap these "generic" components in another folder that stands out as
not a component. This folder or folders will be named in train-case:

```
components/
  navigation/
    Link/
  Footer/
  Header/
  Main/
```

This way the main components (`Footer`, `Header`, `Main`) are instantly
recognizable and the reusable ("generic") components are grouped by function.

There is no "perfect" way to organize files, but this is a very good one.

## Pages

Files in the `pages/` folder become the pathnames in the URL for those pages. We
want the pathnames to be in train-case, so we will name the folders accordingly:

```
components/
pages/
  about-us/
  albums/
  contact-us/
  upcoming-shows/
  index.tsx
  index.spec.tsx
  index.module.css
```

The file hierarchy follows the URL hierarchy. The URL should reflect the
hierarchy of the site. So if, for example, we have pages for each band member,
they might go under a folder called `the-band/`:

```
components/
pages/
  the-band/
    jake-baxendale/
    callum-allardice/
    ...
```

## Hooks, global styles, utilities, data

- `config/`
  - Configuration files are collected here.
  - There will not be enough files to justify using folders, so name files in
    camelCase.
- `hooks/`:
  - Custom React hooks go in the `hooks/` folder.
  - Name the subfolder after the hook (e.g., `useAuth`).
  - Use camelCase.
  - Put the hook in an `index.ts` or `index.tsx` file.
  - Tests go in the same folder.
- `styles/`:
  - Global styles (`global.css`) go in the `styles/` folder.
  - Any other CSS that is truly global can go in here as well. For example, if
    we use Google fonts we might have a `fonts.css` file.
  - It is OK to name files other than `index.css` here: there won't be many
    files.
- `utilties/`:
  - Global utility functions should go in the `utilties/` folder at the top
    level.
  - If utilities are only used within a module, then put a `utilities` folder
    _in that module folder_.
    - This is so utilities move (and are removed) with the module that uses
      them.
    - Example:

```sh
components/
  Header/
    utilities/ # utilities used only by components in the Header
      generateHeaderLinks/
        index.tsx
utilities/ # global utiltieis
  formatDate/
    index.ts
```

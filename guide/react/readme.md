<!-- markdownlint-disable MD033 -->

# React

We are using React for this project. We should keep React and ReactDOM up to date as much as possible.

## The functional paradigm

We are using the functional programming (FP) paradigm and declarative code as much as possible here. This includes:

- Keep all variables <b style="color: red">immutable</b>.

  - Always use `const`, never `let` and absolutely never `var`. If you believe that you must make an exception, consult
    the team first.
  - Remember that `const` means "cannot be _reassigned_". **It does not mean immutable.**

    - Complex values such as arrays and objects can still be mutated internally. For example:

    ```ts
    const person = { name: 'Bob' }

    console.log(person) // => { name: 'Bob' }

    person.name = 'Jane'

    console.log(person) // => { name: 'Jane' }
    ```

    - We will avoid deep freezing objects (or using a library such as `immutable.js`) and simply depend upon good habits
      and code reviews to avoid mutating values.

- Use <b style="color: red">pure functions</b> whenever possible.
  - Pure functions depend only on their arguments and always return a value.
  - Pure functions never reach outside the function for input or output: **no side effects**.
  - Use plain named functions for React components as much as possible.
  - Move side effects into hooks. Create a custom hook if necessary.
- Avoid the `React.FC` function type. Instead, use specific types for the props (parameters) and the return value.

  - `React.FC` is very loose:
    - It always includes a `children` prop (optional), _even if the component will ignore passed children_.
    - It sets the return value to `JSX.Element | null` _even if the component will never return null_.
  - Better to specify:

  ```tsx
  export type HeaderProps = {
    title: string
  }

  export default function Header({ title }: HeaderProps): JSX.Element {
    return (
      <header>
        <h1>{title}</h1>
      </header>
    )
  }
  ```

- <b style="color: red">ONE COMPONENT PER FILE</b>.

  - Each component is its own module.
  - Use the **default** export. This permits us to see _all_ components simply by perusing the folder hierarchy (and the
    hierarchy permits us to see hierarchy of components as well).
  - Keep the component function as simple and clean as possible!

    - Move multiple `useEffect`, `useState`, etc. calls into custom hooks where possible.
    - Put all `const` variable declarations and assignments at the top of the function body.

      - One variable per `const` keyword: Don't use commas to assign multiple variables at the same time:

      ```ts
      // THIS:
      const color = 'yellow'
      const flavor = 'sour'
      const size = 'big'

      // NOT THIS:
      const color = 'yellow',
        flavor = 'sour',
        size = 'big'
      ```

    - Put a blank line between the variable assignments and hooks and the rest of the function.
    - Put blank lines around internal functions
      - If a function does not require a closure (accessing variables from the outer function), then it is better to
        move it out of the component entirely.
      - Typically, event handlers are best inside the function component; everything else, outside.
    - **Move loops in the returned JSX into their own functions in a utilities folder where possible**. This permits:

      - The render utility function to be viewed side-by-side with the component
      - Keeps the component code clean and readable
      - Ensures that both component and utility function fit in a single screen
      - Puts the render function tests in the folder with the function where they belong

      <b style="color: red">Instead of this:</b>

      ```tsx
      // components/Header/index.tsx
      import type { Link } from '../types'

      export type HeaderProps = {
        links: Link[]
        title: string
      }

      export default function Header({ links, title }: HeaderProps): JSX.Element {
        return (
          <header>
            <h1>{title}<h1>
            <nav>
              {links.map((link: Link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </header>
        )
      }
      ```

      <b style="color: red">USE THIS:</b>

      ```tsx
      // components/Header/utilities/renderLinks/index.tsx
      export default function renderLinks(links: Link[]): JSX.Element[] {
        return links.map(
          (link: Link) => <a key={link.href} href={link.href}>{link.label}</a>
        )
      }

      // components/Header/index.tsx
      import type { Link } from '../types'
      import renderLinks from './utilties/renderLinks'

      export type HeaderProps = {
        links: Link[]
        title: string
      }

      export default function Header({ links, title }: HeaderProps): JSX.Element {
        return (
          <header>
            <h1>{title}<h1>
            <nav>
              {renderLinks(links)}
            </nav>
          </header>
        )
      }
      ```

  - In general, keep React components as clean and simple as reasonably possible by moving complexity into hooks and
    utility functions.
    - Give the hooks and functions very clear names (see [Naming](../naming/readme.md)) so that your code reads like
      plain English.
    - Put hooks in the `hooks/` folder and utilities in the `utilities/` folder, but keep those folders as low in the
      folder hierarchy as possible. In other words, don't put your hook that is only used in this component in a
      top-level `hooks` folder. **Keep modules together as much as possible.**

- Move complex conditionals into utility functions and consider using `switch` with `return`:

  ```tsx
  // components/Form/utilities/renderField/index.tsx
  import type { Field } from '../types'
  import { INPUT, SELECT, TEXTAREA } from './constants'
  import renderOptions from './utilities/renderOptions'

  // THIS IS THE JS WAY TO DO BASIC FP PATTERN MATCHING
  export default function renderField(field: Field): JSX.Element | null {
    switch (field.fieldType) {
      case INPUT:
        return <input id={field.id} type={field.inputType} name={field.name} />
      case SELECT:
        return (
          <select id={field.id} name={field.name}>
            {renderOptions(field.options)}
          </select>
        )
      case TEXTAREA:
        return <textarea id={field.id} name={field.name}></textarea>
      default:
        // There must always be a default case
        return null
    }
  }

  // components/Form/utilities/renderFields/index.tsx
  import type { Field } from '../types'
  import renderField from '../renderField'

  export default function renderFields(fields: Field[]): JSX.Element[] {
    return fields.map((field) => renderField(field))
  }

  // components/Form/index.tsx
  import type { FormProps } from './types'
  import renderFields from './utilities/renderFields'

  export default function Form({ config }: FormProps): JSX.Element {
    return (
      <form id={config.formName} onSubmit={config.onSubmit}>
        {renderFields(config.fields)}
      </form>
    )
  }
  ```

- Keep nested ternaries to a minimum. (Use a utility function if necessary.)
- Prefer <b style="color: red">`children`</b> over passing a prop:

  <b style="color: red">THIS:</b>

  ```tsx
  export type LinkProps = {
    children: string | JSX.Element
    href: string
  }

  export default function Link({ children, href }: LinkProps): JSX.Element {
    return <a href={href}>{children}</a>
  }

  // USE:
  // <Link href="https://the-jac.co.nz/">The Jac</Link>
  ```

  <b style="color: red">NOT THIS:</b>

  ```tsx
  export type LinkProps = {
    href: string
    label: string | JSX.Element
  }

  export default function Link({ href, label }: LinkProps): JSX.Element {
    return <a href={href}>{label}</a>
  }

  // USE:
  // <Link href="https://no-no-no.com/" label="Oh, noes!" />
  ```

- <b style="color: red">Avoid "render props" as much as possible.</b> There is almost always a simpler, cleaner way.

## Why named functions?

The arrow function syntax creates an anonymous function. You can assign this function to a variable with a name so it
can be reused, _but it is still an anonymous function_. This is why you see this workaround:

<b style="color:red">DON'T DO THIS:</b>

```tsx
const Header: React.FC<HeaderProps> = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
)
Header.displayName = 'Header' // Necessary because the arrow function is ANONYMOUS

export default Header
```

Arrow functions are great for **callbacks**. They are excellent for passing directly into another function as an
argument or returning a closure from a function: \_this is what we mean by "higher-order functions". They are especially
useful in event handlers because of the way they handle `this`.

If we are not accessing `this`, and we are not passing the function into another function or returning it from a
function or creating a very simple single line function, then **there is no particular advantage to the arrow
function**. And there are some disadvantages:

- In the mind of the developer, `const` means variable. So when you see:

  ```ts
  const addEm = (x, y) => x + y
  ```

  it takes your brain an extra second to see the `=>` and recognize that this is a function.

  But when you see:

  ```ts
  function addEm(x, y) {
    return x + y
  }
  ```

  then it is very obviously a function. This reduces cognitive load, which is the absolute imperative for all code:
  greater cognitive load means more mistakes and more effort required which adversely impacts performance, security, and
  _profits_.

- Named functions are <b style="color: red">hoisted</b> so you can define them _below_ their use. This is particularly
  useful for functions that call each other recursively. They can't _both_ be above the other. But in general, it is
  simply safer.
- Named functions show up in error messages and debuggers by their name. Anonymous functions do not.

As soon as arrow functions were introduced to JavaScript, a great many unwise developers decided that they loved their
new toy and would never use a named function again. But arrow functions were created for very specific purposes (e.g.,
callbacks especially) and were never intended to be a _replacement_ for named functions. **Use the right tool for the
job.**

This is much safer, shorter, more readable, and equally performant:

```tsx
export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}
```

## Exceptions

There are always exceptions to the rule. Good times to use arrow functions:

### Callbacks

```ts
setTimeout(() => console.log('Times up!'), 5000)
```

### As function arguments

```ts
;[4, 7, 3, 9, 1].sort((a, b) => b - a) // => [ 9, 7, 4, 3, 1 ]
```

### To create curried, typically one-line functions that will be partially applied

```ts
import pipe from './utilities/pipe'

const add = (x) => (y) => x + y
const subtract = (y) => (x) => x - y
const multiply = (x) => (y) => x * y
const divideBy = (y) => (x) => x / y

const doTheMath = pipe(multiply(10), subtract(25), divideBy(5), add(7))

doTheMath(9) // => ((((9 * 10) - 25) / 5) + 7) => 20
```

<!-- markdownlint-enable MD033 -->

# TypeScript

Much more to come, but:

- Prefer `type` to `interface`.

  - Interfaces are OOP constructs; we're doing FP.
  - There is nothing the `interface` can do that `type` can't.
  - Instead of creating an interface and extending it, use the `&` operator to combine types:

  For example, this is the interface way to combine (extend) interfaces:

  ```tsx
  interface Animal {
    name: string
  }

  interface Bear extends Animal {
    honey: boolean
  }

  const bear = getBear()
  bear.name
  bear.honey
  ```

  The same can be accomplished with types:

  ```tsx
  type Animal = {
    name: string
  }

  type Bear = Animal & {
    honey: Boolean
  }

  const bear = getBear()
  bear.name
  bear.honey
  ```

  You can add new fields to an interface:

  ```tsx
  interface Window {
    title: string
  }

  interface Window {
    ts: TypeScriptAPI
  }

  const src = 'const a = "Hello World"'
  window.ts.transpileModule(src, {})
  ```

  But you cannot do the same with a type:

  ```tsx
  type Window = {
    title: string
  }

  type Window = {
    ts: TypeScriptAPI
  }

  // Error: Duplicate identifier 'Window'.
  ```

  Why is this good? Because this means that interfaces are _mutable_, but types are _immutable_. As functional
  programmers, we want to know that once we've created and assigned a variable&mdash;or created a type&mdash;it cannot
  change. So again, types are preferable to interfaces. Mutating things in elsewhere in your code is a very bad idea.

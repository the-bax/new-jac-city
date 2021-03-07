# Whitespace

More to come, but...

## Use whitepace effectively to make files readable.

- We will use an import sorter to sort imports and separate them by modules (using blank lines). This makes them more
  readable. And it's done automatically.
- We will group variable declarations/assignments at the top of functions and separate them from the rest of the
  function with a blank line.
- If a `const` assignment spreads across multiple lines, consider following it with a blank line to enhance readability.
- Put blank lines before and after functions declarations.
- Put blank lines before and after considitonals.
- Do not put conditionals on a single line unless they use ternary operators.
- Put a blank line before the return statement unless there is nothing above it but the function delcaration.
- Put NO BLANK LINES between the end of the return and the closing brace of the function.
- Put NO BLANK LINES between the first line of the function and the function body.
- Put the opening function body brace at the end of the first line of the function, not on a line by itself. Example:

```tsx
export default function SampleBox() {
  const { loading, error, data } = useQuery(LIST_INSTRUMENTS)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  return <div>{rendedSamples(data)}</div>
}
```

## Use good design principles: **CRAP**

- C = Contrast
  - Use contrast to differentiate things that are different.
  - Use low or no contrast to indicate similarity.
- R = Repetition
  - Use repeated patterns to make it easy to identify things.
  - Consistency is king.
- A = Alignment
  - Align items that are related.
  - Use indentation correctly to indicate _relationships_.
- P = Proximity
  - Put related items in close proximity.
  - Separate unrelated items with whitespace (or move to another file/module).

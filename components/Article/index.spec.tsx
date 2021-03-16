import Article from './'
import { render } from '@testing-library/react'

test('', () => {
  const { getByText } = render(<Article title="JS" content="JavaScript is a programming language." />)
  expect(getByText('JS'))
  expect(getByText('JavaScript is a programming language.'))
})

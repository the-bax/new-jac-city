import PageContent from '.'
import { render } from '@testing-library/react'

test('should show title and content', () => {
  const { getByText } = render(<PageContent title="JS" content="JavaScript is a programming language." />)
  expect(getByText('JS'))
  expect(getByText('JavaScript is a programming language.'))
})

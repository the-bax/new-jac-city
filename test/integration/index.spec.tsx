import mockServer from './utilities/mockServer'
import SitePage, { getStaticPaths, getStaticProps } from '../../pages/[[...slug]]/index'
import { render } from '@testing-library/react'
import 'whatwg-fetch'

test('render pages with dynamic path', async () => {
  mockServer.listen({ onUnhandledRequest: 'error' })

  const { paths } = await getStaticPaths()

  expect(paths[0].params.slug).toBeUndefined
  expect(paths[1].params.slug?.join('/')).toBe('demo/js')

  for (const path of paths) {
    const {
      props: { pageContent },
    } = await getStaticProps(path)
    const { getAllByText, rerender } = render(<SitePage pageContent={pageContent} />)

    expect(getAllByText(/mock title/i))
    expect(getAllByText(/mock content/i))

    rerender(<></>)
  }

  mockServer.close()
})

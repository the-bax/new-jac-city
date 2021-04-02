import mockServer from './utilities/mockServer'
import SitePage, { getStaticPaths, getStaticProps } from '../../pages/[[...slug]]/index'
import { screen, render } from '@testing-library/react'
import 'whatwg-fetch'

test('render pages with dynamic path', async () => {
  mockServer.listen({ onUnhandledRequest: 'error' })

  const { paths } = await getStaticPaths()

  expect(paths[0].params.slug).toBeUndefined
  expect(paths[1].params.slug?.join('/')).toBe('demo/js')

  const {
    props: { pageContent },
  } = await getStaticProps(paths[0])
  render(<SitePage pageContent={pageContent} />)

  expect(screen.getAllByText(/mock title/i))
  expect(screen.getAllByText(/mock content/i))

  mockServer.close()
})

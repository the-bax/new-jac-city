import { CONTENTFUL_API_URL } from '../constants'
import getPageContentByTitle from './index'
import type { PageContentProps } from '../../components/Main/PageContent'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'

const mockTitle = 'mock title'
const pageContent: PageContentProps = {
  title: mockTitle,
  content: 'mock content',
}
const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          articleCollection: {
            items: [pageContent],
          },
        },
      }),
    )
  }),
)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('get page content by title', async () => {
  expect(await getPageContentByTitle(mockTitle)).toMatchObject(pageContent)
})

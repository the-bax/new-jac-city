import { CONTENTFUL_API_URL } from '../constants'
import getAllPageContentsWithSlug from './index'
import type { PageContentsWithSlug } from './index'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'

const allPageContentsWithSlug: PageContentsWithSlug[] = [
  {
    slugString: 'demo/js',
  },
  {
    slugString: 'demo/python',
  },
]

const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          pageContentCollection: {
            items: allPageContentsWithSlug,
          },
        },
      }),
    )
  }),
)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('get page content by id', async () => {
  expect(await getAllPageContentsWithSlug()).toMatchObject(allPageContentsWithSlug)
})

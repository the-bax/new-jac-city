import 'whatwg-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import getArticleByTitle, { Article } from './index'
import { CONTENTFUL_API_URL } from '../constants'

const mockTitle = 'mock title'

const article: Article = {
  title: mockTitle,
  content: 'mock content',
}

const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          articleCollection: {
            items: [article],
          },
        },
      }),
    )
  }),
)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('a get article test', () => {
  test('get article by title', async () => {
    expect(await getArticleByTitle(mockTitle)).toMatchObject(article)
  })
})

import { CONTENTFUL_API_URL } from '../constants'
import queryPageContentById from './index'
import type { PageContentProps } from '../../components/Main/PageContent'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'

const pageContent: PageContentProps = {
  title: 'mock title',
  content: 'mock content',
}
const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (req, res, ctx) => {
    return res(
      ctx.json({
        data: {
          pageContent,
        },
      }),
    )
  }),
)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('get page content by id', async () => {
  expect(await queryPageContentById('mockId')).toMatchObject(pageContent)
})

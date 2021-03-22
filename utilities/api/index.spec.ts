import { CONTENTFUL_API_URL } from './constants'
import { getAllPageContentsWithSlugString, getPageContentBySlugString } from './index'
import type { PageContentProps } from '../../components/Main/PageContent'
import type { PageContentsWithSlugString } from '../../pages/[[...slug]]'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'

const pageContent: PageContentProps = {
  content: 'mock content',
  title: 'mock title',
}
const allPageContentsWithSlug: PageContentsWithSlugString[] = [
  {
    slugString: 'demo/js',
  },
  {
    slugString: 'demo/python',
  },
]

const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (req, res, ctx) => {
    const query = (req?.body as Record<string, string>)?.query
    let items

    // todo: use mock graphql
    switch (true) {
      case /{\s*slugString\s*}/.test(query):
        items = allPageContentsWithSlug
        break
      case /{\s*content\s*title\s*}/.test(query):
        items = [pageContent]
        break
      default:
        throw 'Error'
    }

    return res(
      ctx.json({
        data: {
          pageContentCollection: {
            items,
          },
        },
      }),
    )
  }),
)
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('get page content by slug string', async () => {
  expect(await getPageContentBySlugString('mockSlugString')).toMatchObject(pageContent)
})

test('get page contents with slug string', async () => {
  expect(await getAllPageContentsWithSlugString()).toMatchObject(allPageContentsWithSlug)
})

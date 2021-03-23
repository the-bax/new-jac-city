import { CONTENTFUL_API_URL } from './constants'
import { getAllPathnames, getPageContentByPathname } from './'
import type { PageContentProps } from '../../components/Main/PageContent'
import type { Pathname } from './'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'

const mockAllPathnames: Pathname[] = [
  {
    pathname: 'demo/js',
  },
  {
    pathname: 'demo/python',
  },
]
const mockPageContent: PageContentProps = {
  content: 'mock content',
  title: 'mock title',
}

// todo: use mock graphql
const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (req, res, ctx) => {
    const query = (req.body as Record<string, string>).query
    let items: PageContentProps[] | Pathname[]

    switch (true) {
      case /{\s*content\s*title\s*}/.test(query):
        items = [mockPageContent]
        break
      case /{\s*pathname\s*}/.test(query):
        items = mockAllPathnames
        break
      default:
        throw 'Query cannot be executed.'
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

test('get all pathnames', async () => {
  expect(await getAllPathnames()).toMatchObject(mockAllPathnames)
})

test('get page content by pathname', async () => {
  expect(await getPageContentByPathname('mockPathname')).toMatchObject(mockPageContent)
})

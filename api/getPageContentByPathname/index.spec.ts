import getPageContentByPathname from './'
import { CONTENTFUL_API_URL } from '../constants'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'
import type { PageContentProps } from '../../components/Main/PageContent'

const mockPageContent: PageContentProps = {
  content: 'mock content',
  title: 'mock title',
}

const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (_, res, ctx) => {
    const items: PageContentProps[] = [mockPageContent]

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

test('get page content by pathname', async () => {
  server.listen({ onUnhandledRequest: 'error' })

  expect(await getPageContentByPathname('mockPathname')).toMatchObject(mockPageContent)

  server.close()
})

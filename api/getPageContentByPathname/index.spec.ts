import getPageContentByPathname from './'
import { GET_PAGE_CONTENT_BY_PATHNAME } from './constants'
import { graphql } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'
import type { PageContentProps } from '../../components/Main/PageContent'

test('get correct page content', async () => {
  const mockPageContent: PageContentProps = {
    content: 'mock content',
    title: 'mock title',
  }

  const handler = graphql.query(GET_PAGE_CONTENT_BY_PATHNAME, (_, res, ctx) => {
    const items: PageContentProps[] = [mockPageContent]

    return res(
      ctx.data({
        pageContentCollection: {
          items,
        },
      }),
    )
  })

  const server = setupServer(handler)

  server.listen({ onUnhandledRequest: 'error' })

  expect(await getPageContentByPathname('mockPathname')).toMatchObject(mockPageContent)

  server.close()
})

test('get undefined page content', async () => {
  const handler = graphql.query(GET_PAGE_CONTENT_BY_PATHNAME, (_, res, ctx) => {
    return res(
      ctx.data({
        pageContentCollection: {},
      }),
    )
  })

  const server = setupServer(handler)

  server.listen({ onUnhandledRequest: 'error' })

  expect(await getPageContentByPathname('mockPathname')).toBeUndefined

  server.close()
})

import listPagePaths from './'
import { graphql } from 'msw'
import { LIST_PAGE_PATHS } from './constants'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'
import type { Path } from '../types'

test('list correct page paths', async () => {
  const mockAllPaths: Path[] = [
    {
      pathname: 'demo/js',
    },
    {
      pathname: 'demo/python',
    },
  ]

  const handler = graphql.query(LIST_PAGE_PATHS, (_, res, ctx) => {
    const items: Path[] = mockAllPaths

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

  expect(await listPagePaths()).toMatchObject(mockAllPaths)

  server.close()
})

test('get an empty page paths array', async () => {
  const handler = graphql.query(LIST_PAGE_PATHS, (_, res, ctx) => {
    return res(
      ctx.data({
        pageContentCollection: {},
      }),
    )
  })

  const server = setupServer(handler)

  server.listen({ onUnhandledRequest: 'error' })

  expect((await listPagePaths()).length).toBe(0)

  server.close()
})

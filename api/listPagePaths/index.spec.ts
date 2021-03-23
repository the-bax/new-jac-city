import listPagePaths from './';
import { CONTENTFUL_API_URL } from '../constants';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';
import type { Path } from '../types'

const mockAllPaths: Path[] = [
  {
    pathname: 'demo/js',
  },
  {
    pathname: 'demo/python',
  },
]

const server = setupServer(
  rest.post(CONTENTFUL_API_URL, (_, res, ctx) => {
    const items: Path[] = mockAllPaths

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

test('list page paths', async () => {
  server.listen({ onUnhandledRequest: 'error' })

  expect(await listPagePaths()).toMatchObject(mockAllPaths)

  server.close()
})

import { GET_PAGE_CONTENT_BY_PATHNAME, LIST_PAGE_PATHS } from '../../../../api/constants'
import { graphql } from 'msw'
import { mockPageContent, mockPaths } from './constants'
import { setupServer } from 'msw/node'
import type { PageContentProps } from '../../../../components/Main/PageContent'
import type { Path } from '../../../../api/types'

const handler = [
  graphql.query(LIST_PAGE_PATHS, (_, res, ctx) => {
    const items: Path[] = mockPaths

    return res(
      ctx.data({
        pageContentCollection: {
          items,
        },
      }),
    )
  }),
  graphql.query(GET_PAGE_CONTENT_BY_PATHNAME, (_, res, ctx) => {
    const items: PageContentProps[] = [mockPageContent]

    return res(
      ctx.data({
        pageContentCollection: {
          items,
        },
      }),
    )
  }),
]

export default setupServer(...handler)

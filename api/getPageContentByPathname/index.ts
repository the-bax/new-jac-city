import { CONTENTFUL_API_URL, GET_PAGE_CONTENT_BY_PATHNAME, headers } from '../constants'
import { HttpRequestMethod } from '../types'
import type { PageContentProps } from '../../components/Main/PageContent'
import type { PageContentResponseBody } from '../types'

export default async function getPageContentByPathname(pathname: string): Promise<PageContentProps> {
  const body = JSON.stringify({
    operationName: GET_PAGE_CONTENT_BY_PATHNAME,
    query: `query ${GET_PAGE_CONTENT_BY_PATHNAME} {
      pageContentCollection(where: {pathname: "${pathname}"}) {
        items {
          content
          title
        }
      }
    }`,
  })

  const result = await fetch(CONTENTFUL_API_URL, {
    method: HttpRequestMethod.POST,
    headers,
    body,
  })

  const json: PageContentResponseBody = await result.json()
  const [pageContent] = json.data.pageContentCollection.items

  return pageContent
}

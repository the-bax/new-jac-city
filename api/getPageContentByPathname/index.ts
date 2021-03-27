import { CONTENTFUL_API_URL, headers } from '../constants'
import { GET_PAGE_CONTENT_BY_PATHNAME } from './constant'
import { HttpRequestMethod } from '../types'
import type { PageContentProps } from '../../components/Main/PageContent'

export default async function getPageContentByPathname(pathname: string): Promise<PageContentProps | undefined> {
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

  const json = await result.json()
  const [pageContent] = json?.data?.pageContentCollection?.items || []

  return pageContent
}

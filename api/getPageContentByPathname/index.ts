import { CONTENTFUL_API_URL, headers, HttpRequestMethod } from '../constants'
import type { PageContentProps } from '../../components/Main/PageContent'

export default async function getPageContentByPathname(pathname: string): Promise<PageContentProps | undefined> {
  const body = JSON.stringify({
    operationName: 'GetPageContentByPathname',
    query: `query GetPageContentByPathname {
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

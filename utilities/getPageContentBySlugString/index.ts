import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, HttpRequestMethod } from '../constants'
import type { PageContentProps } from '../../components/Main/PageContent'

export default async function getPageContentBySlugString(slugString: string): Promise<PageContentProps> {
  const queryObjName = 'pageContent'
  const operationName = 'PageContentBySlugString'
  const query = `
    query ${operationName}($slugString: String!) {
      ${queryObjName}Collection(where: {slugString: $slugString}) {
        items {
          title
          content
        }
      }
    }
  `
  const variables = { slugString }

  const res = await fetch(CONTENTFUL_API_URL, {
    method: HttpRequestMethod.POST,
    headers: {
      Authorization: CONTENTFUL_API_ACCESS_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName,
      query,
      variables,
    }),
  })
  const { data } = await res.json()
  // pageContentCollection can only contains one or none element. Since slugString is an unique field.
  const [pageContent]: PageContentProps[] = data[queryObjName + 'Collection'].items

  return pageContent
}

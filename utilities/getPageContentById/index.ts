import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, HttpRequestMethod } from '../constants'
import type { PageContentProps } from '../../components/Main/PageContent'

export default async function getPageContentById(id: string): Promise<PageContentProps> {
  const queryObjName = 'pageContent'
  const operationName = 'PageContentById'
  const query = `
    query ${operationName}($id: String!) {
      ${queryObjName}(id: $id) {
        title
        content
      }
    }
  `
  const variables = { id }

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

  return data[queryObjName]
}

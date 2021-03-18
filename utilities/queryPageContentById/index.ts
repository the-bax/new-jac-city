import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, HttpRequestMethod } from '../constants'
import type { PageContentProps } from '../../components/Main/PageContent'

export default async function queryPageContentById(id: string): Promise<PageContentProps> {
  const QUERY_OBJ_NAME = 'pageContent'
  // Capitalize first letter of OBJ_NAME (e.g., if QUERY_OBJ_NAME is "obj", operationName will be "Obj").
  const operationName = QUERY_OBJ_NAME[0].toUpperCase() + QUERY_OBJ_NAME.slice(1)
  const query = `
    query ${operationName}($id: String!) {
      ${QUERY_OBJ_NAME}(id: $id) {
        title
        content
      }
    }
  `
  const variables = { id }

  const res = await fetch(CONTENTFUL_API_URL, {
    method: HttpRequestMethod.POST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: CONTENTFUL_API_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      operationName,
      query,
      variables,
    }),
  })
  const { data } = await res.json()

  return data[QUERY_OBJ_NAME]
}

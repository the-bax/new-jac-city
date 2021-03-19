import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, HttpRequestMethod } from '../constants'

export type PageContentsWithSlugString = {
  slugString: string
}

export default async function getAllPageContentsWithSlugString(): Promise<PageContentsWithSlugString[]> {
  const queryObjName = 'pageContent'
  const operationName = 'PageContentsSlugArray'
  const query = `
    query ${operationName} {
      ${queryObjName}Collection {
        items {
          slugString
        }
      }
    }
  `

  const res = await fetch(CONTENTFUL_API_URL, {
    method: HttpRequestMethod.POST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: CONTENTFUL_API_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      operationName,
      query,
    }),
  })
  const { data } = await res.json()

  return data[queryObjName + 'Collection'].items
}

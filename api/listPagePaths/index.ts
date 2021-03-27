import { CONTENTFUL_API_URL, headers } from '../constants'
import { HttpRequestMethod } from '../types'
import type { Path } from '../types'

export default async function listPagePaths(): Promise<Path[]> {
  const body = JSON.stringify({
    operationName: 'ListPagePaths',
    query: `query ListPagePaths {
      pageContentCollection {
        items {
          pathname
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

  return json?.data?.pageContentCollection?.items || []
}

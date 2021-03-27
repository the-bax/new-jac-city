import { CONTENTFUL_API_URL, headers } from '../constants'
import { HttpRequestMethod } from '../types'
import { LIST_PAGE_PATHS } from './constants'
import type { Path } from '../types'

export default async function listPagePaths(): Promise<Path[]> {
  const body = JSON.stringify({
    operationName: LIST_PAGE_PATHS,
    query: `query ${LIST_PAGE_PATHS} {
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

import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, HttpRequestMethod } from './constants'
import type { PageContentProps } from '../../components/Main/PageContent'

type CollectionData = { pageContentCollection: { items: Pathname[] } }
type ItemData = { pageContentCollection: { items: [PageContentProps] } }
type Data = CollectionData | ItemData
export type Pathname = { pathname: string }

async function fetchGraphQl(operationName: string, query: string): Promise<Data> {
  const res = await fetch(CONTENTFUL_API_URL, {
    method: HttpRequestMethod.POST,
    headers: {
      Authorization: CONTENTFUL_API_ACCESS_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operationName,
      query,
    }),
  })

  const { data }: { data: Data } = await res.json()

  return data
}

export async function getAllPathnames(): Promise<Pathname[] | []> {
  const operationName = 'GetAllPathnames'
  const query = `
    query ${operationName} {
      pageContentCollection {
        items {
          pathname
        }
      }
    }
  `

  const data: Data = (await fetchGraphQl(operationName, query)) as CollectionData

  return data.pageContentCollection.items
}

export async function getPageContentByPathname(pathname: string): Promise<PageContentProps | undefined> {
  const operationName = 'GetPageContentByPathname'
  const query = `
    query ${operationName} {
      pageContentCollection(where: {pathname: "${pathname}"}) {
        items {
          content
          title
        }
      }
    }
    `
  const data: ItemData = <ItemData>await fetchGraphQl(operationName, query)

  return data.pageContentCollection.items?.[0]
}

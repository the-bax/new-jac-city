import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, HttpRequestMethod } from './constants'
import type { PageContentProps } from '../../components/Main/PageContent'
import type { PageContentsWithSlugString } from '../../pages/[[...slug]]'

type ItemData = { pageContentCollection: { items: [PageContentProps] } }
type CollectionData = { pageContentCollection: { items: PageContentsWithSlugString[] } }
type Data = ItemData | CollectionData

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

function extractPageContent(data: ItemData): PageContentProps {
  return data.pageContentCollection?.items?.[0]
}

export async function getPageContentBySlugString(slugString: string): Promise<PageContentProps> {
  const operationName = 'PageContentBySlugString'
  const query = `
    query ${operationName} {
      pageContentCollection(where: {slugString: "${slugString}"}) {
        items {
          content
          title
        }
      }
    }
    `
  const data: ItemData = <ItemData>await fetchGraphQl(operationName, query)

  return extractPageContent(data)
}

function extractAllPageContents(data: CollectionData): PageContentsWithSlugString[] {
  return data.pageContentCollection?.items
}

export async function getAllPageContentsWithSlugString(): Promise<PageContentsWithSlugString[]> {
  const operationName = 'PageContentsSlugArray'
  const query = `
    query ${operationName} {
      pageContentCollection {
        items {
          slugString
        }
      }
    }
  `

  const data: Data = <CollectionData>await fetchGraphQl(operationName, query)

  return extractAllPageContents(data)
}

import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, HttpRequestMethod } from './constants'
import type { PageContentProps } from '../../components/Main/PageContent'
import type { PageContentsWithSlugString } from '../../pages/[[...slug]]'

type EmptyObject = Record<string, never>
type CollectionVariables = EmptyObject
type Id = { id: string }
type SlugString = { slugString: string }
type ItemVariables = SlugString | Id
type Data<T> = T extends ItemVariables
  ? { pageContentCollection: { items: [PageContentProps] } }
  : T extends CollectionVariables
  ? { pageContentCollection: { items: PageContentsWithSlugString[] } }
  : never

async function fetchGraphQl<T extends CollectionVariables | ItemVariables>(
  operationName: string,
  query: string,
  variables: T,
): Promise<Data<T>> {
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

  // todo: move to extractXxx method
  const { data }: { data: Data<T> } = await res.json()

  return data
}

function extractPageContent(data: Data<ItemVariables>): PageContentProps {
  return data?.pageContentCollection?.items[0]
}

export async function getPageContentBySlugString(slugString: string): Promise<PageContentProps> {
  const operationName = 'PageContentBySlugString'
  const query = `
    query ${operationName}($slugString: String!) {
      pageContentCollection(where: {slugString: $slugString}) {
        items {
          content
          title
        }
      }
    }
  `
  const variables: SlugString = { slugString }

  const data: Data<ItemVariables> = await fetchGraphQl(operationName, query, variables)

  return extractPageContent(data)
}

function extractAllPageContents(data: Data<CollectionVariables>): PageContentsWithSlugString[] {
  return data?.pageContentCollection?.items
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
  const variables = {}

  const data: Data<CollectionVariables> = await fetchGraphQl(operationName, query, variables)

  return extractAllPageContents(data)
}

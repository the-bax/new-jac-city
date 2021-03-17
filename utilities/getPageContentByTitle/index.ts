import { CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL } from '../constants'
import type { PageContentProps } from '../../components/Main/PageContent'

export default async function getPageContentByTitle(title: string): Promise<PageContentProps> {
  const GET_PAGE_CONTENT_BY_TITLE_GRAPHQL_QUERY = `
    {
      articleCollection(where: {title: "${title}"}) {
        items {
          title
          content
        }
      }
    }
  `
  const res = await fetch(CONTENTFUL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: CONTENTFUL_API_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query: GET_PAGE_CONTENT_BY_TITLE_GRAPHQL_QUERY }),
  })
  const { data } = await res.json()
  // articleCollection can only contains zero or one article. Since title is an unique field.
  const [pageContent]: PageContentProps[] = data.articleCollection.items

  return pageContent
}

import { APPLICATION_JSON, CONTENTFUL_API_ACCESS_TOKEN, CONTENTFUL_API_URL, POST } from '../constants'

export type Article = {
  title: string
  content: string
}

export default async function getArticleByTitle(title: string): Promise<Article> {
  const GET_ARTICLE_BY_TITLE_GRAPHQL_QUERY = `
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
    method: POST,
    headers: {
      'Content-Type': APPLICATION_JSON,
      Authorization: CONTENTFUL_API_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query: GET_ARTICLE_BY_TITLE_GRAPHQL_QUERY }),
  })
  const { data } = await res.json()
  // articleCollection can only contains zero or one article. Since title is an unique field.
  const article: Article = data.articleCollection.items[0]

  return article
}

export type Article = {
  title: string
  content: string
}

export default async function getArticleByTitle(title: string): Promise<Article> {
  const query = `
    {
      articleCollection(where: {title: "${title}"}) {
        items {
          title
          content
        }
      }
    }
  `
  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/zqvr29h6rh51/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer qVGC4H5ZmObAQMKyniPJNtNjtGkfmhi_OgVVy9jmtR8',
    },
    body: JSON.stringify({ query }),
  })

  const { data } = await res.json()

  // articleCollection can only contains zero or one article. Since title is an unique field.
  const article: Article = data.articleCollection.items[0]

  return article
}

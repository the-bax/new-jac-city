import getArticleByTitle, { Article } from '../../utilities/getArticleByTitle'
import { GetStaticProps } from 'next'

export type ContentfulProps = {
  article: Article
}

export default function Contentful({ article }: ContentfulProps): JSX.Element {
  return (
    <>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const ARTICLE_TITLE = 'JS'

  const article: Article = await getArticleByTitle(ARTICLE_TITLE)

  return {
    props: {
      article,
    },
  }
}

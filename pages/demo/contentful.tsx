import { GetStaticProps } from 'next'
import getArticleByTitle, { Article } from '../../utilities/getArticleByTitle'

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

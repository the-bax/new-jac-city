import { GetStaticProps } from 'next'
import getArticleByTitle, { Article } from '../../utilities/getArticleByTitle'

export type ContentfulProps = {
  article: Article
}

export default function Contentful({ article }: ContentfulProps): JSX.Element {
  return (
    <>
      <div>{article.title}</div>
      <div>{article.content}</div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const article = await getArticleByTitle('JS')
  return {
    props: {
      article,
    },
  }
}

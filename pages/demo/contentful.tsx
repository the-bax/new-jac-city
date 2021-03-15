import Article, { ArticleProps } from '../../components/Article'
import getArticleByTitle from '../../utilities/getArticleByTitle'
import { GetStaticProps } from 'next'
import React from 'react'

export default function Contentful({ title, content }: ArticleProps): JSX.Element {
  return <Article title={title} content={content} />
}

export const getStaticProps: GetStaticProps = async () => {
  const ARTICLE_TITLE = 'JS'

  const article: ArticleProps = await getArticleByTitle(ARTICLE_TITLE)

  return {
    props: article,
  }
}

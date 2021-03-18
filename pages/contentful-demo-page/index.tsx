import queryPageContentById from '../../utilities/queryPageContentById'
import { GetStaticProps } from 'next'
import PageContent from '../../components/Main/PageContent'
import type { PageContentProps } from '../../components/Main/PageContent'
import React from 'react'

export default function Contentful({ title, content }: PageContentProps): JSX.Element {
  return <PageContent title={title} content={content} />
}

export const getStaticProps: GetStaticProps = async () => {
  const JS_PAGE_CONTENT_ID = '6pGkzTAVHrgYr08jsTTvq6'
  const pageContent: PageContentProps = await queryPageContentById(JS_PAGE_CONTENT_ID)

  return { props: pageContent }
}

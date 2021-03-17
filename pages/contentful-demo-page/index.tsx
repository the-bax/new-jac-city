import getPageContentByTitle from '../../utilities/getPageContentByTitle'
import { GetStaticProps } from 'next'
import PageContent from '../../components/Main/PageContent'
import type { PageContentProps } from '../../components/Main/PageContent'
import React from 'react'

export default function Contentful({ title, content }: PageContentProps): JSX.Element {
  return <PageContent title={title} content={content} />
}

export const getStaticProps: GetStaticProps = async () => {
  const PAGE_CONTENT_TITLE = 'JS'

  const pageContent: PageContentProps = await getPageContentByTitle(PAGE_CONTENT_TITLE)

  return {
    props: pageContent,
  }
}

import { getAllPageContentsWithSlugString, getPageContentBySlugString } from '../../utilities/api'
import type { GetStaticPaths, GetStaticProps } from 'next'
import PageContent from '../../components/Main/PageContent'
import type { PageContentProps } from '../../components/Main/PageContent'
import React from 'react'

export type PageContentsWithSlugString = {
  slugString: string
}
type SitePageProps = {
  pageContent: PageContentProps
}

export default function SitePage({ pageContent }: SitePageProps): JSX.Element {
  return <PageContent content={pageContent.content} title={pageContent.title} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugString: string = (params?.slug as string[])?.join('/') ?? 'index'
  const pageContent = (await getPageContentBySlugString(slugString)) as PageContentProps

  return { props: { pageContent } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  type Path = { params: { slug: string[] } }

  const allPageContentsWithSlugString: PageContentsWithSlugString[] = await getAllPageContentsWithSlugString()
  const paths: Path[] = [
    ...allPageContentsWithSlugString.map(({ slugString }) => ({
      params: { slug: slugString.split('/') },
    })),
    { params: { slug: [] } },
  ]

  return {
    fallback: false,
    paths,
  }
}

import { getAllPathnames, getPageContentByPathname } from '../../utilities/api'
import type { GetStaticPaths, GetStaticProps } from 'next'
import PageContent from '../../components/Main/PageContent'
import type { PageContentProps } from '../../components/Main/PageContent'
import React from 'react'
import type { Pathname } from '../../utilities/api'

type SitePageProps = {
  pageContent: PageContentProps
}

export default function SitePage({ pageContent }: SitePageProps): JSX.Element {
  return <PageContent content={pageContent.content} title={pageContent.title} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pathname: string = (params?.slug as string[])?.join('/') ?? 'index'
  const pageContent = await getPageContentByPathname(pathname)

  return { props: { pageContent } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  type ParamWithSlug = { params: { slug: string[] } }

  const allPathnames = (await getAllPathnames()) as Pathname[]
  const paths: ParamWithSlug[] = [
    ...allPathnames.map(({ pathname }) => ({
      params: { slug: pathname.split('/') },
    })),
    { params: { slug: [] } },
  ]

  return {
    fallback: false,
    paths,
  }
}

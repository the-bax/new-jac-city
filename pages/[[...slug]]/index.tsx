import * as React from 'react'
import getPageContentByPathname from '../../api/getPageContentByPathname'
import listPagePaths from '../../api/listPagePaths'
import PageContent from '../../components/Main/PageContent'
import type { PageContentProps } from '../../components/Main/PageContent'
import type { Path } from '../../api/types'

export type SitePageProps = {
  pageContent: PageContentProps
}

export type PageParams = {
  params: {
    slug?: string[]
  }
}

export type StaticProps = {
  props: {
    pageContent?: Record<string, string>
  }
}

export type StaticPaths = {
  fallback: boolean
  paths: PageParams[]
}

export const getStaticProps = async ({ params: { slug } }: PageParams): Promise<StaticProps> => {
  const pathname: string = slug?.join('/') ?? 'index'
  const pageContent = await getPageContentByPathname(pathname)

  return { props: { pageContent } }
}

export const getStaticPaths = async (): Promise<StaticPaths> => {
  const pagePaths: Path[] = await listPagePaths()

  return {
    fallback: false,
    paths: pagePaths.map<PageParams>(({ pathname }) => ({
      params: {
        slug: pathname === 'index' ? undefined : pathname.split('/'),
      },
    })),
  }
}

export default function SitePage({ pageContent }: SitePageProps): JSX.Element {
  return <PageContent content={pageContent.content} title={pageContent.title} />
}

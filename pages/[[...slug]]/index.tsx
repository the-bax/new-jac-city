import * as React from 'react'
import getPageContentByPathname from '../../api/getPageContentByPathname'
import listPagePaths from '../../api/listPagePaths'
import PageContent from '../../components/Main/PageContent'
import type { Path } from '../../api/types'
import type { PageParams, PagePath, SitePageProps, StaticPaths, StaticProps } from '../_types'

export default function SitePage({ pageContent }: SitePageProps): JSX.Element {
  return <PageContent content={pageContent.content} title={pageContent.title} />
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
    paths: pagePaths.map<PagePath>(({ pathname }) => ({
      params: {
        slug: pathname === 'index' ? [] : pathname.split('/'),
      },
    })),
  }
}

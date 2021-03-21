import getAllPageContentsWithSlugString from '../../utilities/getAllPageContentsWithSlugString'
import getPageContentBySlugString from '../../utilities/getPageContentBySlugString'
import type { GetStaticPaths, GetStaticProps } from 'next'
import PageContent from '../../components/Main/PageContent'
import type { PageContentProps } from '../../components/Main/PageContent'
import type { PageContentsWithSlugString } from '../../utilities/getAllPageContentsWithSlugString'
import React from 'react'

type SitePageProps = {
  pageContent: PageContentProps
}

export default function SitePage({ pageContent }: SitePageProps): JSX.Element {
  return <PageContent content={pageContent.content} title={pageContent.title} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slugString: string

  if (params?.slug) {
    // params.slug = [ 'demo', 'js' ]
    // slugString = 'demo/js'
    slugString = (params?.slug as string[]).join('/')
  } else slugString = 'index'

  const pageContent: PageContentProps = await getPageContentBySlugString(slugString)

  return { props: { pageContent } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // allPageContentsWithSlugString = [ { slugString: 'demo/js' }, { slugString: 'demo/python' } ]
  const allPageContentsWithSlugString: PageContentsWithSlugString[] = await getAllPageContentsWithSlugString()
  // paths: [{ params: { slug: ['demo', 'js'] } }, { params: { slug: ['demo', 'python'] } }],
  let paths = allPageContentsWithSlugString.map(({ slugString }) => ({ params: { slug: slugString.split('/') } }))
  // add the index page path
  paths = paths.concat({ params: { slug: [] } })

  return {
    fallback: false,
    paths,
  }
}

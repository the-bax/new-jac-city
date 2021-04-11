import type { PageContentProps } from '../components/Main/PageContent'

export type SitePageProps = {
  pageContent: PageContentProps
}

export type PageParams = {
  params: {
    slug?: string[]
  }
}

export type StaticProps = {
  props: SitePageProps
}

export type StaticPaths = {
  fallback: boolean
  paths: PageParams[]
}

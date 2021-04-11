import type { PageContentProps } from '../components/Main/PageContent'

export type PageContentResponseBody = { data: { pageContentCollection: { items: PageContentProps[] } } }
export type Path = { pathname: string }
export type PathsResponseBody = { data: { pageContentCollection: { items: Path[] } } }

export enum HttpRequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

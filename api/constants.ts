export const CONTENTFUL_API_ACCESS_TOKEN = 'Bearer qVGC4H5ZmObAQMKyniPJNtNjtGkfmhi_OgVVy9jmtR8'
export const CONTENTFUL_API_URL = 'https://graphql.contentful.com/content/v1/spaces/zqvr29h6rh51/'

export enum HttpRequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

export const headers = {
  Authorization: CONTENTFUL_API_ACCESS_TOKEN,
  'Content-Type': 'application/json',
}

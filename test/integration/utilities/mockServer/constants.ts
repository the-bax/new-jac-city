import type { PageContentProps } from '../../../../components/Main/PageContent'
import type { Path } from '../../../../api/types'

export const mockPaths: Path[] = [
  {
    pathname: 'index',
  },
  {
    pathname: 'demo/js',
  },
]

export const mockPageContent: PageContentProps = {
  content: 'mock content',
  title: 'mock title',
}

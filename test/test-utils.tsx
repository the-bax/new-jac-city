import { render } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import type { RenderOptions, RenderResult } from '@testing-library/react'

export type ProvidersProps = {
  children?: ReactNode
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  return <>{children}</>
}

const customRender = (ui: ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }

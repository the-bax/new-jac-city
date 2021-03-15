import { render } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'

const Providers = ({ children }) => {
  return children
}

const customRender = (ui: React.ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }

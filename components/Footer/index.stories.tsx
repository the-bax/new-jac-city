import Footer from '.'
import MockMain from './MockMain'
import type { Meta } from '@storybook/react'
import type { ReactElement } from 'react'

const meta: Meta = {
  component: Footer,
  decorators: [
    (Story: () => ReactElement): JSX.Element => (
      <>
        <MockMain />
        <Story />
      </>
    ),
  ],
  parameters: {
    a11y: {
      element: '#root *:not(main, main *)',
    },
    layout: 'fullscreen',
  },
  title: 'components/Footer',
}

export const Default = (): JSX.Element => <Footer />

export default meta

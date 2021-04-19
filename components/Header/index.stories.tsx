import Header from '.'
import MockMain from './MockMain'
import type { Meta } from '@storybook/react'
import type { ReactElement } from 'react'

const meta: Meta = {
  component: Header,
  decorators: [
    (Story: () => ReactElement): JSX.Element => (
      <>
        <Story />
        <MockMain />
      </>
    ),
  ],
  parameters: {
    a11y: {
      element: '#root *:not(main, main *)',
    },
    layout: 'fullscreen',
  },
  title: 'components/Header',
}

export const Default = (): JSX.Element => <Header />

export default meta

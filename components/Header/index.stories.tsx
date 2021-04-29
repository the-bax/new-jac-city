import Header from '.'
import MockBlock from './MockBlock'
import type { Meta } from '@storybook/react'
import type { ReactElement } from 'react'

const meta: Meta = {
  component: Header,
  decorators: [
    (Story: () => ReactElement): JSX.Element => (
      <>
        <Story />
        <MockBlock>Section 1</MockBlock>
        <MockBlock>Section 2</MockBlock>
        <MockBlock>Section 3</MockBlock>
        <MockBlock>Section 4</MockBlock>
      </>
    ),
  ],
  parameters: {
    a11y: {
      element: '#root :not([class*="mockBlock"]):not([class*="mockBlock"] *)',
    },
    layout: 'fullscreen',
  },
  title: 'components/Header',
}

export const Default = (): JSX.Element => <Header />

export default meta

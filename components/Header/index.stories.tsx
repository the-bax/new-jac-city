import Header from '.'
import MockBlock from '../mock/Block'
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
    layout: 'fullscreen',
  },
  title: 'components/Header',
}

export const Default = (): JSX.Element => <Header />

export default meta

import MockBlock from '../MockBlock'
import SecondaryNav from '.'
import type { Meta } from '@storybook/react'
import type { ReactElement } from 'react'

const meta: Meta = {
  component: SecondaryNav,
  decorators: [
    (Story: () => ReactElement): JSX.Element => {
      return (
        <>
          <MockBlock>Header</MockBlock>
          <Story />
          <MockBlock id="section-one">Section 1</MockBlock>
          <MockBlock id="section-two">Section 2</MockBlock>
          <MockBlock id="section-three">Section 3</MockBlock>
          <MockBlock id="section-four">Section 4</MockBlock>
        </>
      )
    },
  ],
  parameters: {
    a11y: {
      element: '#root :not([class*="mockBlock"]):not([class*="mockBlock"] *)',
    },
    layout: 'fullscreen',
  },
  title: 'components/Header/SecondaryNav',
}

export const Default = (): JSX.Element => <SecondaryNav />

export default meta

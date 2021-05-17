import A from '.'
import MockBlock from '../../mock/Block'
import type { AProps } from '.'
import type { Meta, Story } from '@storybook/react'
import type { ReactElement } from 'react'

const meta: Meta = {
  component: A,
  decorators: [
    (Story: () => ReactElement): JSX.Element => {
      return (
        <>
          <Story />
          <MockBlock id="section-one">Section One</MockBlock>
        </>
      )
    },
  ],
  title: 'components/library/A',
}

const Template: Story<AProps> = (args) => <A {...args}>Go to section one</A>

export const OpenInCurrentTab = Template.bind({})
OpenInCurrentTab.args = {
  ariaLabel: 'Anchor aria-label',
  href: '#section-one',
}

export const OpenInNewTab = Template.bind({})
OpenInNewTab.args = {
  ariaLabel: 'Anchor aria-label',
  href: '#section-one',
  target: '_blank',
}

export default meta

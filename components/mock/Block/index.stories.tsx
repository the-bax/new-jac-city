import Block from '.'
import type { BlockProps } from '.'
import type { Meta, Story } from '@storybook/react'

const meta: Meta = {
  component: Block,
  title: 'components/mock/Block',
}

const Template: Story<BlockProps> = (args) => <Block {...args}>Block</Block>

export const TallBlock = Template.bind({})
TallBlock.args = {}

export const ShortBlock = Template.bind({})
ShortBlock.args = {
  height: 'short',
}

export default meta

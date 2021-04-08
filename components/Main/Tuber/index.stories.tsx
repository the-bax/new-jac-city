import Tuber from '.'
import type { Meta, Story } from '@storybook/react'
import type { TuberProps } from '.'

const meta: Meta = {
  component: Tuber,
  title: 'Tuber',
}

const Template: Story<TuberProps> = (args) => <Tuber {...args} />

export const AGathering = Template.bind({})
AGathering.args = {
  src: 'https://www.youtube.com/embed/4jUMUcCuMJ4',
}

export const Live = Template.bind({})
Live.args = {
  src: 'https://www.youtube.com/embed/IPYD_OjoMzA',
}

export default meta

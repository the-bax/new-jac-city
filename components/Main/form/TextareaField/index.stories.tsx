import TextareaField from '.'
import type { TextareaFieldProps } from '.'
import type { Meta, Story } from '@storybook/react'

const meta: Meta = {
  component: TextareaField,
  title: 'components/Main/form/TextareaField',
}

const Template: Story<TextareaFieldProps> = (args) => <TextareaField {...args} />

export const WithLabel = Template.bind({})
WithLabel.args = {
  id: 'name',
  label: 'Name',
  maxLength: 500,
  name: 'name',
  placeholder: 'Name',
  required: true,
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  id: 'name',
  maxLength: 500,
  name: 'name',
  placeholder: 'Name',
}

export default meta

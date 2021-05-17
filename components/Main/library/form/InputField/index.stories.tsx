import InputField from '.'
import type { InputFieldProps } from '.'
import type { Meta, Story } from '@storybook/react'

const meta: Meta = {
  component: InputField,
  title: 'components/Main/library/form/InputField',
}

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />

export const WithLabel = Template.bind({})
WithLabel.args = {
  id: 'name',
  label: 'Name',
  name: 'name',
  placeholder: 'Name',
  required: true,
  type: 'text',
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  id: 'name',
  name: 'name',
  placeholder: 'Name',
  type: 'text',
}

export default meta

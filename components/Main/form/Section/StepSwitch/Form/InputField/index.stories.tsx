import InputField from '.'
import { useState } from 'react'
import type { InputFieldProps } from './types'
import type { Meta, Story } from '@storybook/react'

const meta: Meta = {
  component: InputField,
  title: 'components/Main/form/Section/StepSwitch/Form/InputField',
}

const Template: Story<InputFieldProps> = (args) => {
  const [value, setValue] = useState('')
  return <InputField {...args} setValue={setValue} value={value} />
}

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

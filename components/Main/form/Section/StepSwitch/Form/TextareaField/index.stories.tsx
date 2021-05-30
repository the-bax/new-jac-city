import TextareaField from '.'
import { useState } from 'react'
import type { Meta, Story } from '@storybook/react'
import type { TextareaFieldProps } from './types'

const meta: Meta = {
  component: TextareaField,
  title: 'components/Main/form/Section/StepSwitch/Form/TextareaField',
}

const Template: Story<TextareaFieldProps> = (args) => {
  const [value, setValue] = useState('')
  return <TextareaField {...args} setValue={setValue} value={value} />
}

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

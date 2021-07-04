import Form from '.'
import Block from '../../../../../../library/mocks/Block'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Form,
  title: 'components/Main/form/Section/StepSwitch/Form',
}

function mockSubmit() {
  console.log('mock submit')
}

export const Default = (): JSX.Element => (
  <Form onSubmit={mockSubmit}>
    <Block height="short">Input</Block>
    <Block height="short">Input</Block>
    <Block height="short">Button</Block>
  </Form>
)

export default meta

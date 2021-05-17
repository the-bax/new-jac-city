import Block from '../../../../mock/Block'
import Form from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Form,
  title: 'components/Main/library/form/Form',
}

export const Default = (): JSX.Element => (
  <Form>
    <Block height="short">Input</Block>
    <Block height="short">Input</Block>
    <Block height="short">Button</Block>
  </Form>
)

export default meta

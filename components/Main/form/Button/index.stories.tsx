import Button from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Button,
  title: 'components/Main/form/Button',
}

export const Default = (): JSX.Element => <Button caption="Click me" />

export default meta

import Button from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Button,
  title: 'components/Main/library/Button',
}

export const Default = (): JSX.Element => <Button>Click Me</Button>

export default meta

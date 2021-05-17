import SuccessConfirmation from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: SuccessConfirmation,
  title: 'components/Main/library/form/SuccessConfirmation',
}

export const Default = (): JSX.Element => (
  <SuccessConfirmation message="Successfully submitted!">Click Me</SuccessConfirmation>
)

export default meta

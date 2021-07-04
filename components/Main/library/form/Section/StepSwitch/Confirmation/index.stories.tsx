import Confirmation from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Confirmation,
  title: 'components/Main/library/form/Section/StepSwitch/Confirmation',
}

export const Default = (): JSX.Element => <Confirmation message="Successfully submitted!">Click Me</Confirmation>

export default meta

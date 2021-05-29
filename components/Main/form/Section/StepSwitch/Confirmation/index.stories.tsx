import Confirmation from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Confirmation,
  title: 'components/Main/form/Section/StepSwitch/Confirmation',
}

function mockNext() {
  console.log('mock next')
}

export const Default = (): JSX.Element => (
  <Confirmation message="Successfully submitted!" next={mockNext}>
    Click Me
  </Confirmation>
)

export default meta

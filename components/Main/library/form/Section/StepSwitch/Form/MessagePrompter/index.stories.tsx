import MessagePrompter from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: MessagePrompter,
  title: 'components/Main/form/Section/StepSwitch/Form/MessagePrompter',
}

export const Default = (): JSX.Element => <MessagePrompter>{['error one', 'error two']}</MessagePrompter>

export default meta

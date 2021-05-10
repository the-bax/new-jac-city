import NewsletterSignUp from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: NewsletterSignUp,
  title: 'components/Main/NewsletterSignUp',
}

export const Default = (): JSX.Element => <NewsletterSignUp />

export default meta

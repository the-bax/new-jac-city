import Bandcamp from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Bandcamp,
  title: 'components/Header/Bandcamp',
}

export const Default = (): JSX.Element => <Bandcamp />

export default meta

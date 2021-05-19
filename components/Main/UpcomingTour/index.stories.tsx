import Block from '../../library/mocks/Block'
import UpcomingTour from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: UpcomingTour,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'components/Main/UpcomingTour',
}

export const Default = (): JSX.Element => (
  <UpcomingTour content={<Block>Content</Block>} sidebar={<Block>Sidebar</Block>} />
)

export default meta

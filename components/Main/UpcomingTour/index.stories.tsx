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

export const Default = (): JSX.Element => <UpcomingTour intro={<Block>Intro</Block>} events={<Block>Events</Block>} />

export default meta

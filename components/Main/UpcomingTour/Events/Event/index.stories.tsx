import Event from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Event,
  title: 'components/Main/UpcomingTour/Events/Event',
}

export const Default = (): JSX.Element => (
  <Event address="Manawatu Jazz and Blues Festival, Globe theatre. 8:00pm, June 3rd" city="PALMERSTON NORTH" />
)

export default meta

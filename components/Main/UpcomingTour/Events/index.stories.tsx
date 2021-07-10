import Events from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: Events,
  title: 'components/Main/UpcomingTour/Events',
}

const events = [
  {
    address: 'Manawatu Jazz and Blues Festival, Globe theatre. 8:00pm, June 3rd',
    city: 'PALMERSTON NORTH',
    href: '.',
  },
  {
    address: 'Te Raukura ki Kāpiti, Kāpiti Performing Arts Center. 7:30pm, June 5th',
    city: 'KĀPITI COAST',
    href: '.',
  },
  {
    address: 'Wellington Jazz Festival, City Gallery Auditorium. 5:00pm, June 12th',
    city: 'WELLINGTON',
    href: '.',
  },
  {
    address: '03 Sessions, Space Academy. 8:00pm, June 17th',
    city: 'CHRISTCHURCH',
    href: '.',
  },
  {
    address: 'Oamaru Opera House. 8:00pm, June 18th',
    city: 'OAMARU',
    href: '.',
  },
  {
    address: 'Dunedin Jazz Club Concert Series, Hanover Hall. 8:00pm, June 19th',
    city: 'DUNEDIN',
    href: '.',
  },
  {
    address: 'Creative Jazz Club, Anthology Lounge. 8:00pm, August 25th',
    city: 'AUCKLAND',
    href: '.',
  },
  {
    address: 'Nivara Lounge. 8:00pm, August 26th',
    city: 'HAMILTON',
    href: '.',
  },
  {
    address: 'Fairfield House. 7:30pm, September 3rd',
    city: 'NELSON',
    href: '.',
  },
  {
    address: 'Chanel Arts Centre. 7:30pm, September 4th',
    city: 'MOTUEKA',
    href: '.',
  },
  {
    address: 'The Mussel Inn. 8:00pm, September 5th',
    city: 'GOLDEN BAY',
    href: '.',
  },
]

export const Default = (): JSX.Element => <Events events={events} />

export default meta

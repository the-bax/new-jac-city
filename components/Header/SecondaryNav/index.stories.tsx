import SecondaryNav from '.'
import type { Meta, Story } from '@storybook/react'
import { ReactElement } from 'react'

const style = {
  backgroundColor: 'rgb(245,245,245)',
  border: '2px dashed rgb(220,220,220)',
  color: 'rgb(170,170,170)',
  fontSize: 'large',
  height: '18rem',
  lineHeight: '18rem',
  textIndent: '2ch',
}

const Template: Story<Record<string, never>> = (args) => <SecondaryNav {...args} />

const meta: Meta = {
  component: SecondaryNav,
  title: 'SecondaryNav',
  decorators: [
    (Story: () => ReactElement): JSX.Element => {
      return (
        <>
          <header style={style}>Header</header>
          <Story />
          <main>
            <section style={style} id="section-one">
              Section 1
            </section>
            <section style={style} id="section-two">
              Section 2
            </section>
            <section style={style} id="section-three">
              Section 3
            </section>
            <section style={style} id="section-four">
              Section 4
            </section>
          </main>
        </>
      )
    },
  ],
  parameters: {
    a11y: {
      element: '#root header ~ *:not(main)',
    },
  },
}

export const Default = Template.bind({})

export default meta

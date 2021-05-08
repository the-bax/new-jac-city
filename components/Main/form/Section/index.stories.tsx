import MockBlock from '../../../MockBlock'
import Section from '.'
import type { Meta, Story } from '@storybook/react'
import type { SectionProps } from '.'

const meta: Meta = {
  component: Section,
  title: 'components/Main/form/Section',
}

const Template: Story<SectionProps> = (args) => (
  <Section {...args}>
    <MockBlock>Form</MockBlock>
  </Section>
)

export const WithDescription = Template.bind({})
WithDescription.args = {
  ariaLabel: 'Section ariaLabel.',
  description: 'Section description.',
  header: 'Section header',
}

export const WithoutDescription = Template.bind({})
WithoutDescription.args = {
  ariaLabel: 'Section ariaLabel.',
  header: 'Section header',
}

export default meta

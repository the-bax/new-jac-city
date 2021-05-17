import Block from '../../../../mock/Block'
import Section from '.'
import type { Meta, Story } from '@storybook/react'
import type { SectionProps } from '.'

const meta: Meta = {
  component: Section,
  title: 'components/Main/library/form/Section',
}

const Template: Story<SectionProps> = (args) => (
  <Section {...args}>
    <Block>Form</Block>
  </Section>
)

export const WithDescription = Template.bind({})
WithDescription.args = {
  ariaLabel: 'Section aria-label.',
  description: 'Section description.',
  header: 'Section header',
  maxWidth: '30rem',
}

export const WithoutDescription = Template.bind({})
WithoutDescription.args = {
  ariaLabel: 'Section aria-label.',
  header: 'Section header',
  maxWidth: '30rem',
}

export default meta

import Block from '../../../../mock/Block'
import Button from '../../../Button'
import StepController from '.'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: StepController,
  title: 'components/Main/form/Section/StepController',
}

const renderConfirmation = (nextStep: () => void) => {
  return (
    <Block>
      <Button onClick={nextStep}>Confirmation</Button>
    </Block>
  )
}

const renderForm = (nextStep: () => void) => {
  return (
    <Block>
      <Button onClick={nextStep}>Form</Button>
    </Block>
  )
}

export const Default = (): JSX.Element => (
  <StepController renderConfirmation={renderConfirmation} renderForm={renderForm} />
)

export default meta

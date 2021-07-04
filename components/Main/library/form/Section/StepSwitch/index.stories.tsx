import Button from '../../../Button'
import Block from '../../../../../library/mocks/Block'
import StepSwitch, { NextContext } from '.'
import { useContext } from 'react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  component: StepSwitch,
  title: 'components/Main/form/Section/StepSwitch',
}

type StepProps = {
  step: number
}

const Step = ({ step }: StepProps): JSX.Element => {
  const next = useContext(NextContext)

  return (
    <Block>
      Step {step} <Button onClick={next}>Next</Button>
    </Block>
  )
}

export const Default = (): JSX.Element => (
  <StepSwitch>{[<Step key={0} step={0} />, <Step key={1} step={1} />]}</StepSwitch>
)

export default meta

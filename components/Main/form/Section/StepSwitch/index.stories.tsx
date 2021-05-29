import Block from '../../../../mock/Block'
import Button from '../../../Button'
import StepSwitch, { NextContext } from '.'
import type { Meta } from '@storybook/react'
import { useContext } from 'react'

const meta: Meta = {
  component: StepSwitch,
  title: 'components/Main/form/Section/StepSwitch',
}

const Step0 = (): JSX.Element => {
  const next = useContext(NextContext)

  return (
    <Block>
      Step 0 <Button onClick={next}>Next</Button>
    </Block>
  )
}

const Step1 = (): JSX.Element => {
  const next = useContext(NextContext)

  return (
    <Block>
      Step 1 <Button onClick={next}>Next</Button>
    </Block>
  )
}

export const Default = (): JSX.Element => <StepSwitch>{[<Step0 key={0} />, <Step1 key={1} />]}</StepSwitch>

export default meta

import Confirmation from '../../form/Section/StepSwitch/Confirmation'
import { NextContext } from '../../form/Section/StepSwitch'
import { useContext } from 'react'
import type { Next } from '../../form/Section/StepSwitch/types'

export default function SignUpConfirmation(): JSX.Element {
  const next = useContext<Next>(NextContext)

  return (
    <Confirmation message="You're in! Keep an eye out for a confirmation email!" next={next}>
      Add Another Email
    </Confirmation>
  )
}

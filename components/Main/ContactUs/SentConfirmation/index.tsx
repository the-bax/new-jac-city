import Confirmation from '../../form/Section/StepSwitch/Confirmation'
import { NextContext } from '../../form/Section/StepSwitch'
import { useContext } from 'react'
import type { Next } from '../../form/Section/StepSwitch/types'

export default function ContactUs(): JSX.Element {
  const next = useContext<Next>(NextContext)

  return (
    <Confirmation message="Your message has been sent successfully!" next={next}>
      Send Another Message
    </Confirmation>
  )
}

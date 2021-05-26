import { useState } from 'react'
import type { ReactNode } from 'react'

export type StepControllerProps = {
  renderConfirmation: (nextStep: () => void) => ReactNode
  renderForm: (nextStep: () => void) => ReactNode
}

export default function StepController({ renderConfirmation, renderForm }: StepControllerProps): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const setIsSubmittedFalse = () => {
    setIsSubmitted(false)
  }

  const setIsSubmittedTrue = () => {
    setIsSubmitted(true)
  }

  return <>{isSubmitted ? renderConfirmation(setIsSubmittedFalse) : renderForm(setIsSubmittedTrue)}</>
}

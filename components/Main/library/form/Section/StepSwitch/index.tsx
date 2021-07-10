import mod from './utilities/mod'
import { createContext, useState } from 'react'
import type { Next, StepSwitchProps } from './types'

export const NextContext = createContext<Next>(() => {
  return undefined
})

export default function StepSwitch({ children }: StepSwitchProps): JSX.Element {
  const [step, setStep] = useState(0)
  const stepLength = children.length

  const next = () => {
    setStep(mod(step + 1, stepLength))
  }

  return <NextContext.Provider value={next}>{children[step]}</NextContext.Provider>
}

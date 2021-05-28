import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Next = () => void
export type StepSwitchProps = {
  children: Array<ReactNode>
}

export const NextContext = createContext<Next>(() => {
  console.log('next step')
})

function mod(n: number, m: number) {
  return ((n % m) + m) % m
}

export default function StepSwitch({ children }: StepSwitchProps): JSX.Element {
  const stepLength = children.length
  const [step, setStep] = useState(0)

  const next = () => {
    setStep(mod(step + 1, stepLength))
  }

  return <NextContext.Provider value={next}>{children[step]}</NextContext.Provider>
}

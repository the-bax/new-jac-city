import MessageForm from './MessageForm'
import Section from '../library/form/Section'
import StepSwitch from '../library/form/Section/StepSwitch'
import SubmissionConfirmation from './SubmissionConfirmation'

export default function ContactUs(): JSX.Element {
  return (
    <Section
      ariaLabel="Contact us."
      description="Any feedback? Please fill out our quick online inquiry form to send us a message."
      header="Contact Us"
      maxWidth="30rem"
    >
      <StepSwitch>{[<MessageForm key={0} />, <SubmissionConfirmation key={1} />]}</StepSwitch>
    </Section>
  )
}

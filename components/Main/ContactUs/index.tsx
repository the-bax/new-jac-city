import MessageForm from './MessageForm'
import Section from '../form/Section'
import SentConfirmation from './SentConfirmation'
import StepSwitch from '../form/Section/StepSwitch'

export default function ContactUs(): JSX.Element {
  return (
    <Section
      ariaLabel="Contact us."
      description="Any feedback? Please fill out our quick online inquiry form to send us a message."
      header="Contact Us"
      maxWidth="30rem"
    >
      <StepSwitch>{[<MessageForm key={0} />, <SentConfirmation key={1} />]}</StepSwitch>
    </Section>
  )
}

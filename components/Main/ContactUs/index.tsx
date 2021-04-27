import React, { useState } from 'react'
import MessageForm from './MessageForm'
import style from './ContactUs.module.css'

export default function ContactUs(): JSX.Element {
  const [isSuccessful, setIsSuccessful] = useState(false)

  return (
    <section aria-label="Contact us." className={style.section}>
      <h2>Contact Us</h2>
      <p className={style.intro}>Any feedback? Please fill out our quick online inquiry form to send us a message.</p>
      <div className={style.wrapper}>
        {isSuccessful ? (
          <p>Your message has been sent successfully!</p>
        ) : (
          <MessageForm setIsSuccessful={setIsSuccessful}></MessageForm>
        )}
      </div>
    </section>
  )
}

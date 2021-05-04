import React, { useState } from 'react'
import style from './SignUpForm.module.css'
import type { ChangeEvent } from 'react'

export default function SignUpForm(): JSX.Element {
  const [email, setEmail] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  return (
    <form
      action="https://gmail.us1.list-manage.com/subscribe/post?u=9141e689df0aab3225e661f8b&amp;id=69004741a3"
      className={style.form}
      method="post"
    >
      <input name="EMAIL" onChange={handleChange} placeholder="Enter Email" required type="email" value={email} />
      <input name="b_9141e689df0aab3225e661f8b_69004741a3" readOnly type="hidden" value="" />
      <input name="subscribe" readOnly type="hidden" value="Subscribe" />
      <button type="submit">Join</button>
    </form>
  )
}

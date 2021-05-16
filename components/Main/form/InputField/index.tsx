import React, { useState } from 'react'
import style from './InputField.module.css'
import type { ChangeEvent } from 'react'

export type InputFieldProps = {
  id: string
  label?: string
  name: string
  placeholder?: string
  required?: boolean
  type: 'email' | 'password' | 'text'
}

export default function InputField({ id, label, name, placeholder, required, type }: InputFieldProps): JSX.Element {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className={style.wrapper}>
      {label ? (
        <label className={required ? style.required : undefined} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className={style.input}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </div>
  )
}

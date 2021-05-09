import React, { useState } from 'react'
import style from './TextareaField.module.css'
import type { ChangeEvent } from 'react'

export type TextareaFieldProps = {
  id: string
  label?: string
  maxLength?: number
  name: string
  placeholder?: string
  required?: boolean
}

export default function TextareaField({
  id,
  label,
  maxLength: maxBodyLength,
  name,
  placeholder,
  required = false,
}: TextareaFieldProps): JSX.Element {
  const [value, setValue] = useState('')
  const [bodyLength, setBodyLength] = useState(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value)
    setBodyLength(event.target.value.length)
  }

  return (
    <div className={style.wrapper}>
      {label ? (
        <label className={required ? style.required : undefined} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <textarea
        className={style.textarea}
        id={id}
        maxLength={maxBodyLength}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
      {maxBodyLength ? <span>{bodyLength}</span> : null}
    </div>
  )
}

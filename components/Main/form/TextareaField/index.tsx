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
  maxLength,
  name,
  placeholder,
  required = false,
}: TextareaFieldProps): JSX.Element {
  const [value, setValue] = useState('')
  const [length, setLength] = useState(0)

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    setLength(event.target.value.length)
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
        maxLength={maxLength}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
      {maxLength ? <span className={style.span}>{length}</span> : null}
    </div>
  )
}

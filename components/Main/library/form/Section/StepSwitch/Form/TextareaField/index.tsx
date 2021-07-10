import Counter from './Counter'
import style from './TextareaField.module.css'
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { TextareaFieldProps } from './types'

export default function TextareaField({
  id,
  label,
  lengthLimit,
  name,
  placeholder,
  required = false,
  setValue,
  value,
}: TextareaFieldProps): JSX.Element {
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
        aria-label={label ? undefined : placeholder}
        className={style.textarea}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
      {lengthLimit ? <Counter count={lengthLimit - length} /> : null}
    </div>
  )
}

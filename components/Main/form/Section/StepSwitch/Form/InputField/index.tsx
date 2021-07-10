import style from './InputField.module.css'
import type { ChangeEvent } from 'react'
import type { InputFieldProps } from './types'

export default function InputField({
  id,
  label,
  name,
  placeholder,
  required,
  setValue,
  type,
  value,
}: InputFieldProps): JSX.Element {
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
        aria-label={label ? undefined : placeholder}
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

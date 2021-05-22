import style from './InputField.module.css'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'

export type InputFieldProps = {
  id?: string
  label?: string
  name: string
  placeholder?: string
  required?: boolean
  setValue: Dispatch<SetStateAction<string>>
  type: 'email' | 'password' | 'text'
  value: string
}

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

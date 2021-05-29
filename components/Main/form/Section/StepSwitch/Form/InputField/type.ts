export type InputFieldProps = {
  id?: string
  label?: string
  name: string
  placeholder?: string
  required?: boolean
  setValue: (value: string) => void
  type: 'email' | 'password' | 'text'
  value: string
}

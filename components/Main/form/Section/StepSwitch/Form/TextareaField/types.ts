export type TextareaFieldProps = {
  id: string
  label?: string
  maxLength?: number
  name: string
  placeholder?: string
  required?: boolean
  setValue: (value: string) => void
  value: string
}

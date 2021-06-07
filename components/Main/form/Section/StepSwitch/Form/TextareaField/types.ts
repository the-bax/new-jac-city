export type TextareaFieldProps = {
  id: string
  label?: string
  lengthLimit?: number
  name: string
  placeholder?: string
  required?: boolean
  setValue: (value: string) => void
  value: string
}

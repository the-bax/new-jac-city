import style from './Block.module.css'

export type MockBlockProps = {
  children?: React.ReactNode
  id?: string
}

export default function MockBlock({ children, id }: MockBlockProps): JSX.Element {
  return (
    <div className={style.mockBlock} id={id}>
      {children}
    </div>
  )
}

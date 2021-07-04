import style from './Counter.module.css'

export type CounterProps = {
  count: number
}

export default function Counter({ count }: CounterProps): JSX.Element {
  return <span className={count >= 0 ? style.positive : style.nagetative}>{count}</span>
}

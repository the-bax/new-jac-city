import style from './Cover.module.css'

export default function Cover(): JSX.Element {
  return (
    <img
      alt="A Gathering album cover: swans gathering around a pool bearing an odd symbol"
      className={style.cover}
      height={306}
      src="/nerve-cover.jpg"
      width={306}
    />
  )
}

import EmbeddedContent from '../EmbeddedContent'
import style from './Tuber.module.css'

export type TuberProps = {
  allow?: string
  height?: string | number
  src: string
  width?: string | number
}

export default function Tuber({
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  src,
}: TuberProps) {
  return (
    <section className={style.tuber}>
      <EmbeddedContent allow={allow} allowFullScreen={true} src={src} />
    </section>
  )
}

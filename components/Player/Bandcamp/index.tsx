import EmbeddedContent from '../../EmbeddedContent'
import style from './Bandcamp.module.css'

export default function Bandcamp(): JSX.Element {
  return (
    <section className={style.bandcamp}>
      <EmbeddedContent
        src="https://bandcamp.com/EmbeddedPlayer/album=2195993812/size=large/bgcol=transparent/linkcol=0687f5/artwork=none/transparent=true/"
        title="Nerve by The Jac"
      />
    </section>
  )
}

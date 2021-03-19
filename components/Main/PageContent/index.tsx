import style from './PageContent.module.css'

export type PageContentProps = {
  content: string
  title: string
}

export default function PageContent({ title, content }: PageContentProps): JSX.Element {
  return (
    <article className={style.article}>
      <header>
        <h2 className={style.title}>{title}</h2>
      </header>
      <p className={style.content}>{content}</p>
    </article>
  )
}

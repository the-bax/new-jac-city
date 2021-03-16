import style from './Article.module.css'

export type ArticleProps = {
  title: string
  content: string
}

export default function Article({ title, content }: ArticleProps): JSX.Element {
  return (
    <main className={style.box}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.content}>{content}</p>
    </main>
  )
}

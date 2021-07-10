import type { ReactNode } from 'react'
import { renderMessage } from './utilities/renderMessage'

export type MessagePrompterProps = {
  children: string[]
}

export default function MessagePrompter({ children }: MessagePrompterProps): JSX.Element {
  return <>{children.map<ReactNode>(renderMessage)}</>
}

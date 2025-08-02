import type { ReactNode } from 'react'
import './block.css'

type Props = {
  children: ReactNode
  className?: string
}

export const Block = ({ children, className }: Props) => {
  return <div className={`block ${className}`}>{children}</div>
}

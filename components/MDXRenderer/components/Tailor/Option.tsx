import { ReactNode } from 'react'

type Props = {
  value?: string
  children: ReactNode
}

export default function Option({ children, value = '' }: Props) {
  return <option value={value}>{children}</option>
}

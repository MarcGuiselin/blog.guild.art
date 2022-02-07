import { ReactNode } from 'react'
import { useChoices } from './context'

type Props = {
  name: string
  children: ReactNode
}

export default function Select({ children, name }: Props) {
  const { get, set } = useChoices()

  return (
    <select value={get(name)} onChange={($evt) => set(name, $evt.target.value)}>
      {children}
    </select>
  )
}

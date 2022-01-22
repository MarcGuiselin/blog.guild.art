import { ReactNode } from 'react'
import { useSavedState } from '@/lib/hooks'
import { Choices } from './context'

export type State = {
  [name: string]: string
}

type Props = {
  children: ReactNode
}

export default function Provider({ children }: Props) {
  const [state, setState, clear] = useSavedState<State>('article-state')

  return (
    <Choices.Provider
      children={children}
      value={{
        get(name) {
          return state[name] || ''
        },
        set(name, value) {
          setState({ ...state, [name]: value })
        },
        clear,
        changed: Object.keys(state).length > 0,
      }}
    />
  )
}

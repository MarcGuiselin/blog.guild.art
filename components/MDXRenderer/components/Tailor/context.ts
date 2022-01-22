import { createContext, useContext } from 'react'

export type ChoicesType = {
  get: (name: string) => string | undefined
  set: (name: string, value: string) => void
  clear: () => void
  changed: boolean
}

export const Choices = createContext<ChoicesType>({
  get: () => '',
  set: () => {},
  clear: () => {},
  changed: false,
})

export const useChoices = () => useContext(Choices)

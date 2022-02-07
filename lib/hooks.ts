import { useState, useEffect } from 'react'

type JSONPrimitive = string | number | boolean | null
type JSONValue = JSONPrimitive | JSONObject | JSONArray
type JSONObject = { [member: string]: JSONValue }
type JSONArray = Array<JSONValue>

function getSavedState<T>(name: string): T | undefined {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (e) {
    return undefined
  }
}

function setSavedState<T>(name: string, state: T) {
  try {
    const old = getSavedState<T>(name) || {}
    const newState = { ...old, ...state }
    localStorage.setItem(name, JSON.stringify(newState))
  } catch (e) {}
}

function clearSavedState(name: string) {
  try {
    localStorage.removeItem(name)
  } catch (e) {}
}

export function useSavedState<T extends JSONObject>(name: string) {
  const [state, setState] = useState<T>({} as T)

  useEffect(() => setState(getSavedState<T>(name) || ({} as T)), [name, setState])

  return [
    state,
    (state: T) => {
      setState(state)
      setSavedState(name, state)
    },
    () => {
      setState({} as T)
      clearSavedState(name)
    },
  ] as [T, (state: T) => void, () => void]
}

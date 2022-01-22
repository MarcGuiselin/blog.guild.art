import { ReactNode } from 'react'
import { useChoices } from './context'
import { State } from './Provider'

type Condition = {
  if?: (get: (name: string) => string) => boolean
  none?: State
}

type Props = Condition & {
  children: ReactNode
}

function useShow({ if: iff, none }: Condition) {
  const { get } = useChoices()
  return (!iff || iff(get)) && (!none || Object.entries(none).every(([k, v]) => get(k) !== v))
}

function ShowProd({ children, ...conditional }: Props) {
  const show = useShow(conditional)
  if (show) return children
  return null
}

function ShowDev({ children, ...conditional }: Props) {
  const show = useShow(conditional)

  return (
    <div
      className={`outline outline-4 p-2 ${
        show ? 'outline-green-500' : 'outline-red-500 opacity-50'
      }`}
    >
      {children}
    </div>
  )
}

const isProduction = process.env.NODE_ENV === 'production'

// eslint-disable-next-line import/no-anonymous-default-export
const Show = isProduction ? ShowProd : ShowDev
export default Show

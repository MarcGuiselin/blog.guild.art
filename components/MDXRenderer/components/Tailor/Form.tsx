import { ReactNode } from 'react'
import { useChoices } from './context'

type Props = {
  children: ReactNode
}

export default function Form({ children }: Props) {
  const { clear, changed } = useChoices()
  return (
    <div className="relative p-4 not-prose" role="menu">
      <div className="z-0 absolute top-2 bottom-2 -left-6 -right-6 rounded-3xl bg-rainbow opacity-10 blur-xl translate-y-[0px]" />
      <div className="z-10 relative bg-slate-50 dark:bg-onyx-700 px-4 py-2 rounded-lg space-y-4 shadow-lg">
        <div className="text-center">
          <h2 className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Use this tool to shorten the article
          </h2>
          <p className="text font-normal text-gray-500 dark:text-gray-400">
            Answer the questions below to get started
          </p>
        </div>
        <div className="py-2 px-6 space-y-4" role="group">
          {children}
          <div className="px-6 py-2 text-center overflow-hidden">
            <button
              type="submit"
              role="menuitem"
              className={`bg-onyx-800 transition border border-transparent rounded-full shadow-sm py-2 px-8 inline-flex justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                changed
                  ? 'cursor-pointer hover:bg-red-700 focus:bg-red-700 focus:ring-red-500 text-white'
                  : 'cursor-not-allowed text-gray-500 dark:text-gray-400'
              }`}
              onClick={clear}
              disabled={!changed}
            >
              Reset (Clear my choices)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { ReactNode } from 'react'
import { useChoices } from './context'
import Twemoji from '@/components/Twemoji'

type Props = {
  title?: string
  subtitle?: string
  children: ReactNode
}

export default function Form({
  title = 'Use this tool to shorten the article! 🤟',
  subtitle = 'Answer the questions below to get started',
  children,
}: Props) {
  const { clear, changed } = useChoices()
  return (
    <div className="relative px-0 sm:px-4 py-4 not-prose" role="menu">
      <div className="z-0 absolute top-2 bottom-2 -left-6 -right-6 rounded-3xl bg-rainbow opacity-10 blur-xl translate-y-[0px]" />
      <div className="z-10 relative bg-slate-50 dark:bg-onyx-700 px-4 py-2 rounded-lg space-y-4 shadow-lg">
        <div className="text-center">
          <Twemoji
            tag="h2"
            className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100"
            text={title}
          />
          <Twemoji
            tag="p"
            className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"
            text={subtitle}
          />
        </div>
        <div
          className="py-2 sm:px-6 space-y-4 divide-y divide-slate-300 dark:divide-onyx-900"
          role="group"
        >
          {children}
        </div>
        <div className="px-6 py-2 text-center overflow-hidden">
          <button
            type="submit"
            role="menuitem"
            className={`bg-slate-300 dark:bg-onyx-800 transition border border-transparent rounded-full shadow-sm py-2 px-8 inline-flex justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-black dark:text-white ${
              changed
                ? 'cursor-pointer hover:bg-red-300 focus:bg-red-300 focus:ring-red-500 dark:hover:bg-red-700 dark:focus:bg-red-700'
                : 'cursor-not-allowed text-opacity-70 dark:text-opacity-70'
            }`}
            onClick={clear}
            disabled={!changed}
          >
            Reset{changed ? ' (Clear my choices)' : ''}
          </button>
        </div>
      </div>
    </div>
  )
}

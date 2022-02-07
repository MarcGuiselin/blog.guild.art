import { ReactNode, useEffect, useRef, useState } from 'react'
import { useSavedState } from '@/lib/hooks'
import wordCounter from '@/lib/utils/wordCounter'
import { Choices } from './context'
import toast, { Toaster } from 'react-hot-toast'
import { RiTimer2Line } from 'react-icons/ri'
import { BsX } from 'react-icons/bs'

export type State = {
  [name: string]: string
}

type Props = {
  children: ReactNode
}

let prevToastId = ''

export default function Provider({ children }: Props) {
  const [state, setState, clear] = useSavedState<State>('article-state')
  const changed = Object.keys(state).length > 0
  const [wordCount, setWordCount] = useState<number>(0)
  const container = useRef<HTMLDivElement>()

  useEffect(() => {
    const prose = container?.current?.querySelector('.prose')
    if (prose) {
      const newWordCount = wordCounter(prose)

      toast.remove(prevToastId)

      if (wordCount != 0 && newWordCount != wordCount) {
        const diff = newWordCount - wordCount
        const positive = diff > 0

        prevToastId = toast.custom(
          ({ id, visible, duration }) => (
            <div className="w-full">
              <div className="w-full max-w-3xl xl:max-w-5xl mx-auto xl:grid xl:grid-cols-4 xl:gap-x-6">
                <div className="xl:col-span-3 xl:row-span-2 xl:col-start-2">
                  <div
                    className={`mx-auto flex flex-row justify-center items-center gap-2 px-2 sm:gap-4 sm:px-4 py-2 bg-slate-50 dark:bg-onyx-700 rounded-lg max-w-fit shadow-2xl ${
                      visible ? 'animate-enter' : 'animate-leave'
                    }`}
                  >
                    <div
                      className={`text-white text-xl p-2 rounded-lg ${
                        positive ? 'bg-red-500' : 'bg-green-500'
                      }`}
                    >
                      <RiTimer2Line
                        className={positive ? 'animate-time-backward' : 'animate-time-forward'}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-base sm:text-lg font-semibold leading-none tracking-wider pb-1">
                        {positive ? 'Slower Read' : 'Quicker read!'}
                      </h1>
                      <p className="text-sm sm:text-base">
                        This article is {Math.abs(diff)} words {positive ? 'longer' : 'shorter'}
                      </p>
                    </div>
                    {changed && (
                      <button
                        type="submit"
                        role="menuitem"
                        className="hidden sm:block bg-slate-300 dark:bg-onyx-800 transition border border-transparent rounded-full shadow-sm py-2 px-8 justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer hover:bg-red-300 focus:bg-red-300 focus:ring-red-500 dark:hover:bg-red-700 dark:focus:bg-red-700 text-black dark:text-white"
                        onClick={clear}
                      >
                        Reset (Clear my choices)
                      </button>
                    )}
                    <button
                      type="submit"
                      role="menuitem"
                      className="block bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 transition border border-transparent rounded-full shadow-sm p-2 justify-center text-sm font-medium cursor-pointer hover:bg-opacity-20 focus:bg-opacity-20 text-black dark:text-white"
                      onClick={() => toast.remove(id)}
                    >
                      <span className="sr-only">Close Notification</span>
                      <BsX className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
          {
            duration: 5500,
          }
        )
      }

      setWordCount(newWordCount)
    }
  }, [state, container])

  return (
    <Choices.Provider
      value={{
        get(name) {
          return state[name] || ''
        },
        set(name, value) {
          setState({ ...state, [name]: value })
        },
        clear,
        changed,
      }}
    >
      <div ref={container}>{children}</div>
      <Toaster />
    </Choices.Provider>
  )
}

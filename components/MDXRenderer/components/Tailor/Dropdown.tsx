import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsCheck2, BsX, BsQuestion, BsChevronDown } from 'react-icons/bs'
import { useChoices } from './context'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  name: string
  label: string
  options: {
    [key: string]:
      | string
      | {
          title: string
          description?: string
        }
  }[]
}

export default function Dropdown({ name, label, options }: Props) {
  const { get, set } = useChoices()

  const currentValue = get(name)
  const selected = options[currentValue]
  const selectedTitle = typeof selected === 'string' ? selected : selected.title
  const Icon = {
    '': BsQuestion,
    yes: BsCheck2,
    no: BsX,
  }[currentValue]

  return (
    <Listbox value={currentValue} onChange={(value) => set(name, value)}>
      {({ open }) => (
        <div className="not-prose flex flex-col sm:flex-row gap-1 w-full pt-4 px-2" role="menuitem">
          <Listbox.Label className="self-start sm:self-center text-base sm:text-lg flex-grow text-gray-900 dark:text-gray-100">
            {label}
          </Listbox.Label>
          <div className="relative flex-shrink-0 self-end">
            <div className="shadow-sm rounded-md divide-x divide-primary-600">
              <div className="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-600">
                <div className="relative inline-flex flex-grow items-center bg-primary-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
                  {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
                  <p className="ml-2.5 text-sm font-medium">{selectedTitle}</p>
                </div>
                <Listbox.Button className="relative inline-flex items-center bg-primary-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500">
                  <span className="sr-only">{label}</span>
                  <BsChevronDown className="h-5 w-5 text-white" aria-hidden="true" />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                {Object.entries(options).map(([value, option]) => {
                  const titleOnly = typeof option === 'string'
                  const title = titleOnly ? option : option.title
                  const description = titleOnly ? undefined : option.description
                  return (
                    <Listbox.Option
                      key={value}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-primary-500' : 'text-gray-900',
                          'cursor-default select-none relative p-4 text-sm'
                        )
                      }
                      value={value}
                    >
                      {({ selected, active }) => (
                        <div className="flex flex-col">
                          <div className="flex justify-between">
                            <p className={selected ? 'font-semibold' : 'font-normal'}>{title}</p>
                            {selected ? (
                              <span className={active ? 'text-white' : 'text-primary-500'}>
                                <BsCheck2 className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </div>
                          {description && (
                            <p
                              className={classNames(
                                active ? 'text-primary-200' : 'text-gray-500',
                                'mt-2'
                              )}
                            >
                              {description}
                            </p>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  )
                })}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  )
}

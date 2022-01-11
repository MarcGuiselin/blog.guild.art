type Props = React.HTMLAttributes<HTMLDivElement>

export function Title({ children, ...rest }: Props) {
  return (
    <h1
      {...rest}
      className="text-3xl font-extrabold font-display leading-9 tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
    >
      {children}
    </h1>
  )
}

export function Subtitle({ children, ...rest }: Props) {
  return (
    <p {...rest} className="text-lg leading-7 text-gray-500 dark:text-gray-400">
      {children}
    </p>
  )
}

export function Heading({ children, ...rest }: Props) {
  return (
    <div {...rest} className="pt-6 pb-8 space-y-2 md:space-y-5">
      {children}
    </div>
  )
}

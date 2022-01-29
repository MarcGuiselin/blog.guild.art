type Props = React.HTMLAttributes<HTMLDivElement>

export default function Separator({ children, ...rest }: Props) {
  return (
    <div {...rest} className="font-display text-center mx-4 py-2 relative">
      {children && (
        <span className="relative z-10 inline-block not-prose include-word-count text-lg font-semibold px-4 py-1 bg-primary-200 dark:bg-onyx-700 rounded-full">
          {children}
        </span>
      )}
      <div className="absolute top-1/2 w-full border-b-2 border-primary-200 dark:border-onyx-700" />
    </div>
  )
}

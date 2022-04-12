type Props = React.HTMLAttributes<HTMLDivElement> & {
  to: string
}

export default function Copyright({ children, to, ...rest }: Props) {
  return (
    <div
      {...rest}
      className="font-display font-bold text-center text-sm relative bg-slate-50 dark:bg-onyx-700 rounded-lg pb-1"
    >
      {children}
      {to}
    </div>
  )
}

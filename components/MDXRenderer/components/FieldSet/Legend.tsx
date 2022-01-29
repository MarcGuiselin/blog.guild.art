type Props = React.HTMLAttributes<HTMLLegendElement>

export default function Legend({ children, ...rest }: Props) {
  return (
    <legend
      {...rest}
      className="not-prose include-word-count text-lg px-4 py-2 relative -left-4 bg-primary-200 dark:bg-onyx-700 rounded-lg text-justify"
    >
      {children}
    </legend>
  )
}

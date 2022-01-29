type Props = React.HTMLAttributes<HTMLDivElement>

export default function Check({ children, ...rest }: Props) {
  return (
    <div {...rest} className="relative flex items-start justify-start px-4">
      <div className="flex items-center pt-[.4em]">
        <input
          id="offers"
          aria-describedby="offers-description"
          name="offers"
          type="checkbox"
          className="focus:ring-primary-600 h-4 w-4 text-primary-600 border-gray-300 rounded"
        />
      </div>
      <label className="ml-3 text-justify">{children}</label>
    </div>
  )
}

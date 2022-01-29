import Show, { Condition } from '../Tailor/Show'

type Props = Condition & React.HTMLAttributes<HTMLFieldSetElement>

export default function Group({ children, if: iff, none, ...rest }: Props) {
  return (
    <Show if={iff} none={none}>
      <fieldset
        {...rest}
        className="ml-4 my-6 block bg-slate-50 dark:bg-onyx-800 py-4 drop-shadow-lg rounded-lg"
      >
        {children}
      </fieldset>
    </Show>
  )
}

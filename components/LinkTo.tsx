/* eslint-disable jsx-a11y/anchor-has-content */
import Link from './Link'

type Props = {
  href: string
  back?: boolean
} & React.HTMLAttributes<HTMLAnchorElement>

export default function LinkTo({ href, back = false, children, className = '', ...rest }: Props) {
  const arrow = (
    <svg
      className={`w-[1.5em] inline align-top transition fill-primary-500 group-hover:fill-primary-600 dark:group-hover:fill-primary-400 ${
        back ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'
      }`}
      strokeWidth="0"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
  return (
    <Link
      {...rest}
      href={href}
      className={`group transition text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 ${className}`}
    >
      {back && arrow}
      {children}
      {!back && arrow}
    </Link>
  )
}

import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

// mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/blog/tags/${kebabCase(text)}`}>
      <a className="mr-2 mt-1 transition text-sm font-medium tracking-wide capitalize text-gray-800 dark:text-white bg-neutral-200 dark:bg-onyx-700 px-[7px] py-[1px] rounded-full dark:hover:bg-primary-500">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag

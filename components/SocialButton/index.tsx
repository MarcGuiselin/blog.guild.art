import {
  AiFillMail as email,
  AiFillFacebook as facebook,
  AiOutlineTwitter as twitter,
  AiOutlineYoutube as youtube,
  AiFillInstagram as instagram,
  AiOutlineLink as website,
} from 'react-icons/ai'

const components = {
  website,
  email,
  facebook,
  youtube,
  twitter,
  instagram,
}

type Props = {
  kind: keyof typeof components
  href: string
  smaller?: boolean
}

export default function SocialIcon({ kind, href, smaller }: Props) {
  if (!href || (kind === 'email' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const Icon = components[kind]

  const name = kind === 'website' ? href.replace(/^https?:\/\/|\/$/gi, '') : kind
  const title = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase()

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      title={title}
    >
      <span className="sr-only">{title}</span>
      <Icon
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-violet-500 dark:hover:text-violet-400 transition ${
          smaller ? 'h-6 w-6' : 'h-8 w-8'
        }`}
      />
    </a>
  )
}

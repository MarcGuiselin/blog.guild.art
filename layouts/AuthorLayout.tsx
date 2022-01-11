import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, email, twitter } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">
          <Image
            src={avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="w-48 h-48 rounded-full"
          />
          <h1 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h1>
          <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">{company}</div>
          <div className="flex pt-6 space-x-3">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="twitter" href={twitter} />
          </div>
        </div>
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div>
      </div>
    </>
  )
}

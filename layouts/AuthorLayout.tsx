import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { CommonSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

interface Props {
  children: ReactNode
  frontMatter: AuthorFrontMatter
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, pronouns, company, email, twitter } = frontMatter

  return (
    <>
      <CommonSEO
        title={`About - ${name}`}
        description={`About me - ${name}`}
        ogType="profile"
        ogImage={avatar}
        twImage={avatar}
        twitter={twitter}
        twCardType="summary"
      />
      <div className="items-start space-y-2">
        <div className="bg-slate-50 dark:bg-onyx-800 max-w-max mx-auto rounded-lg shadow-lg divide-y-2 divide-slate-200 dark:divide-onyx-700 px-6">
          <div className="flex flex-col items-center mt-4 pt-8 pb-6 space-y-4">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 z-10 shadow-lg rounded-full overflow-hidden">
                <Image src={avatar} alt="avatar" width="128px" height="128px" />
              </div>
              <div className="absolute -inset-1 bg-rainbow blur-md rounded-full opacity-30 rotate-45" />
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="pb-2 flex space-x-2 items-center text-2xl font-display">
                <h1 className="font-semibold leading-8 tracking-tight">{name}</h1>
                <p className="opacity-80 font-extralight">({pronouns})</p>
              </div>
              <div className="text-gray-500 dark:text-white dark:text-opacity-60">{occupation}</div>
              <div className="text-gray-500 dark:text-white dark:text-opacity-60">{company}</div>
            </div>
          </div>
          <div className="flex space-x-3 justify-center py-4">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="twitter" href={twitter} />
          </div>
          <div className="py-4 prose dark:prose-dark xl:col-span-2 rounded-b-lg prose-p:text-justify">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

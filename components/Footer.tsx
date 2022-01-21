import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-4 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon
            kind="twitter"
            href={`https://twitter.com/${siteMetadata.twitter}`}
            size={6}
          />
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()} `}
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}

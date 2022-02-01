import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialRow from '@/components/SocialRow'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <SocialRow
          className="flex mb-4 space-x-4"
          smaller
          frontMatter={{
            email: siteMetadata.email,
            twitter: siteMetadata.twitter,
          }}
        />
        <div className="mb-4 text-sm">
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()} `}
          <Link href="/">Guild of Artists</Link>
        </div>
      </div>
    </footer>
  )
}

import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import PageBackground from './Page/PageBackground'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter()
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <PageBackground bottom />
      <SectionContainer>
        <div className="relative flex flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label="Tailwind CSS Blog">
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo className="h-7 w-auto sm:h-9 fill-black dark:fill-white" />
                  </div>
                  <div className="hidden h-6 text-2xl font-semibold font-display sm:block">
                    Guild Artists{router.pathname.split('/')[1] == 'blog' ? ' Blog' : ''}
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper

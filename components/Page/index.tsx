import { ReactNode } from 'react'
import PageBackground from './PageBackground'

type Props = {
  children: ReactNode
  pad?: boolean
}

export default function Page({ children, pad }: Props) {
  return (
    <div className="min-h-screen relative bg-onyx-900">
      <div className={`relative z-10 pt-4 pb-16 ${pad ? 'max-w-7xl mx-auto px-4 sm:px-6' : ''}`}>
        {children}
      </div>
      <div className="absolute bottom-0 w-full z-10 text-right py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-sm">
          Copyright &copy; {new Date().getFullYear()} Guild Artists
        </div>
      </div>
      <PageBackground />
      <PageBackground bottom />
    </div>
  )
}

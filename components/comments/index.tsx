import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import { PostFrontMatter } from 'types/PostFrontMatter'

interface Props {
  frontMatter: PostFrontMatter
}

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/comments/Utterances')
  },
  { ssr: false }
)
const DisqusComponent = dynamic(
  () => {
    return import('@/components/comments/Disqus')
  },
  { ssr: false }
)

const Comments = ({ frontMatter }: Props) => {
  let term
  switch (siteMetadata.comment.utterancesConfig.issueTerm) {
    case 'pathname':
      term = frontMatter.slug
      break
    case 'url':
      term = window.location.href
      break
    case 'title':
      term = frontMatter.title
      break
  }
  return (
    <>
      {siteMetadata.comment && siteMetadata.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={term} />
      )}
      {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
        <DisqusComponent frontMatter={frontMatter} />
      )}
    </>
  )
}

export default Comments

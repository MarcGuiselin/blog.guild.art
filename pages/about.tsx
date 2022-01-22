import MDXRenderer from '@/components/MDXRenderer'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

const DEFAULT_LAYOUT = 'PostSimple'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  post: { mdxSource: string; frontMatter: PostFrontMatter }
}> = async () => {
  const page = await getFileBySlug<PostFrontMatter>(['about'])
  const { mdxSource, frontMatter } = page
  return { props: { post: { mdxSource, frontMatter } } }
}

export default function About({
  post: { mdxSource, frontMatter },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}

import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Toc } from 'types/Toc'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticPaths() {
  const authors = getFiles('author')
  const paths = authors.map((p) => ({
    params: {
      slug: formatSlug(p.split('.')[0]),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  post: { mdxSource: string; toc: Toc; frontMatter: PostFrontMatter }
}> = async ({ params }) => {
  const slug = params.slug as string
  const post = await getFileBySlug<PostFrontMatter>(['author', slug])

  return {
    props: {
      post,
    },
  }
}

export default function About({
  post: { mdxSource, toc, frontMatter },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      toc={toc}
      frontMatter={frontMatter}
    />
  )
}

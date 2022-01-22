export type Link = { slug: string; title: string }

export type PostFrontMatter = {
  title: string
  date?: string
  tags: string[]
  lastmod?: string
  draft?: boolean
  parent?: Link
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  slug: string
  fileName: string
}

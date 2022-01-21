export type AuthorSocials = {
  email?: string
  facebook?: string
  twitter?: string
  youtube?: string
  instagram?: string
  website?: string
}

export type AuthorFrontMatter = {
  layout?: string
  name: string
  avatar: string
  occupation: string
  pronouns: string
  company: string
  slug: string
  summary?: string
} & AuthorSocials

import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import { PostFrontMatter } from 'types/PostFrontMatter'

// Use vercel domain in seo for preview deployments
const notProd = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
const siteUrl = siteMetadata.siteUrl
const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL
const baseUrl = (notProd && vercelUrl && `https://${vercelUrl}`) || siteUrl

interface CommonSEOProps {
  title: string
  description: string
  ogType: string
  ogImage:
    | string
    | {
        '@type': string
        url: string
      }[]
  twImage: string
  twitter?: string
  twCardType?: 'summary_large_image' | 'summary'
}

export const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  twitter,
  twCardType = 'summary_large_image',
}: CommonSEOProps) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${baseUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content={twCardType} />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      {twitter && <meta name="twitter:creator" content={twitter} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
    </Head>
  )
}

interface PageSEOProps {
  title: string
  description: string
}

export const PageSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = baseUrl + siteMetadata.socialBanner
  const twImageUrl = baseUrl + siteMetadata.socialBanner
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}

type AuthorSEOProps = {
  title: string
  description: string
  ogType?: string
  ogImage: string
  twImage: string
  twitter?: string
  twCardType?: 'summary_large_image' | 'summary'
}

export const AuthorSEO = ({ ogImage, twImage, ...rest }: AuthorSEOProps) => {
  return (
    <CommonSEO ogImage={baseUrl + ogImage} twImage={baseUrl + ogImage} ogType="website" {...rest} />
  )
}

export const TagSEO = ({ title, description }: PageSEOProps) => {
  const ogImageUrl = baseUrl + siteMetadata.socialBanner
  const twImageUrl = baseUrl + siteMetadata.socialBanner
  const router = useRouter()
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${baseUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  )
}

interface BlogSeoProps extends PostFrontMatter {
  authorDetails?: AuthorFrontMatter[]
  url: string
}

export const BlogSEO = ({
  authorDetails,
  title,
  summary,
  date,
  lastmod,
  url,
  images = [],
}: BlogSeoProps) => {
  const router = useRouter()
  const datePublished = date ? new Date(date).toISOString() : undefined
  const dateModified = lastmod || date ? new Date(lastmod || date).toISOString() : undefined
  const imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images

  const featuredImages = imagesArr.map((img) => {
    return {
      '@type': 'ImageObject',
      url: `${baseUrl}${img}`,
    }
  })

  let authorList
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      }
    })
  } else {
    authorList = {
      '@type': 'Person',
      name: siteMetadata.author,
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: title,
    image: featuredImages,
    datePublished,
    dateModified,
    author: authorList,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.author,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  }

  const twImageUrl = featuredImages[0].url

  return (
    <>
      <CommonSEO
        title={title}
        description={summary}
        ogType="article"
        ogImage={featuredImages}
        twImage={twImageUrl}
      />
      <Head>
        {datePublished && <meta property="article:published_time" content={datePublished} />}
        {dateModified && <meta property="article:modified_time" content={dateModified} />}
        <link rel="canonical" href={`${baseUrl}${router.asPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  )
}

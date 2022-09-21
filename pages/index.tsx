import Link from '@/components/Link'
import LinkTo from '@/components/LinkTo'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'
import * as Typo from '@/components/Typography'

const MAX_DISPLAY = 3

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col gap-4 py-10 px-2 items-center bg-slate-50 dark:bg-onyx-800 rounded-lg shadow-lg">
        <div className="max-w-min">
          <h1 className="text-2xl font-bold font-display leading-9 tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            We are The Artisans Cooperative
          </h1>
          <h2 className="text-xl font-bold font-display leading-9 tracking-wide text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Formerly the Guild of Artists
          </h2>
          <div className="pt-8 prose lg:prose-xl dark:prose-dark prose-p:text-justify prose-a:!font-bold">
            <p>
              Find us on our new home:{' '}
              <a href="https://artisans.coop/" rel="noopener noreferrer">
                artisans.coop
              </a>
            </p>
            <p>
              With the help of friends and artists around the globe we’re building a cooperative
              digital platform for artists to promote and sell unique commissioned art pieces.
            </p>
            <p>
              We’re a growing community of creatives, including both novices and professionals who
              sell many different kinds of artwork online. We communicate via{' '}
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
              . Join us on{' '}
              <a href="https://join.guild.art/" target="_blank" rel="noopener noreferrer">
                The Artisans Cooperative Discord server
              </a>
            </p>
          </div>
        </div>
        <LinkTo href="/about.html" className="text-xl">
          Learn more about our platform
        </LinkTo>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-onyx-700">
        <Typo.Heading>
          <Typo.Title2>Latest Community Posts</Typo.Title2>
          <Typo.Subtitle>
            Our global community of artists and makers share tips, guides and helpful tools for
            independent artists.
          </Typo.Subtitle>
        </Typo.Heading>
        <ul className="divide-y divide-gray-200 dark:divide-onyx-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-wide font-display">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <LinkTo href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                          Read more
                        </LinkTo>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <LinkTo href="/blog" aria-label="all posts">
            All Posts
          </LinkTo>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

const siteMetadata = {
  title: 'The Guild of Artists',
  author: '@guildofartists',
  description: 'A blog for the wider community of independent artists',
  language: 'en-us',
  siteUrl: 'https://guild.art',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@guild.art',
  twitter: 'https://twitter.com/guildofartists',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or umami
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'none', // supported providers: disqus
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata

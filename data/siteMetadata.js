const siteMetadata = {
  title: 'The Guild of Artists',
  author: '@guildofartists',
  description: "Let's help each other out!",
  language: 'en-us',
  siteUrl: 'https://guild.art',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@guild.art',
  twitter: 'guildofartists',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or umami
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: 'bb2aa05b-12c4-4a42-a6bb-7e4763853d06', // e.g. 123e4567-e89b-12d3-a456-426614174000
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

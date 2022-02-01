import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiWebsiteId}
        src="https://umami.guild.art/umami.js" // Replace with your umami instance
        data-do-not-track="true"
      />
    </>
  )
}

export default UmamiScript

const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const [prettierConfig, defaultPages, tagPages, blogPages, authorPages] = await Promise.all([
    prettier.resolveConfig('./.prettierrc.js'),
    globby(['pages/**', '!pages/**_**', '!pages/api/**', '!pages/404*', '!**/\\[*\\].*']),
    globby('public/blog/tags/**/*.xml'),
    globby('data/blog/**/*'),
    globby('data/author/**/*'),
  ])

  const pages = [
    ...defaultPages.map((page) => page.replace(/pages\/(index)?|\/index/g, '')),
    ...tagPages.map((page) => page.replace(/^public\/|\/feed/g, '')),
    ...blogPages.map((page) => page.replace('data/', '')),
    ...authorPages.map((page) => page.replace('data/', 'blog/')),
  ].map((m) => m.replace(/\.[^/\\]+$/, ''))

  // Order by path depth first, then alphabetically
  const pathComp = (a) => Math.min(a.split('/').length, 2)
  pages.sort((a, b) => pathComp(a) - pathComp(b) || a.localeCompare(b))

  console.log(pages)

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...pages.flatMap((page) => ['<url>', `<loc>${siteMetadata.siteUrl}${page}</loc>`, '</url>']),
    '</urlset>',
  ]

  const formatted = prettier.format(sitemap.join(''), {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()

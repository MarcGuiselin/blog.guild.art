import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import components from './components'

interface Props {
  layout: string
  mdxSource: string
  [key: string]: unknown
}

export default function MDXRenderer({ layout, mdxSource, ...rest }: Props) {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={components} {...rest} />
}

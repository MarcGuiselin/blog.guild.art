/* eslint-disable react/display-name */
import React, { useMemo, ReactNode } from 'react'
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import EmbedTweet from './EmbedTweet'
import Twemoji from './Twemoji'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout {...rest} />
}

function p({ children }: { children: ReactNode | ReactNode[] }) {
  if (Array.isArray(children))
    return (
      <p>
        {children.map((child, index) =>
          typeof child === 'string' ? <Twemoji key={index} text={child} /> : child
        )}
      </p>
    )
  else if (typeof children === 'string') return <Twemoji tag="p" text={children} />
  else return <p>{children}</p>
}

export const MDXComponents: ComponentMap = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
  EmbedTweet,
  Tweet: EmbedTweet,
  p,
}

interface Props {
  layout: string
  mdxSource: string
  [key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}

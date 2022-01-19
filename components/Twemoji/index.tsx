import { createElement, memo } from 'react'
import twemoji from 'twemoji'

type Props = {
  text: string
  tag?: string
  [key: string]: any
}

const Twemoji = ({ text, tag = 'span', ...other }: Props) =>
  createElement(tag, {
    ...other,
    dangerouslySetInnerHTML: {
      __html: twemoji.parse(text, {
        folder: 'svg',
        ext: '.svg',
      }),
    },
  })

export default memo(Twemoji)

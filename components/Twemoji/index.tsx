import { createElement, memo } from 'react'
import twemoji from 'twemoji'

type Props = {
  text: string | undefined | null | false
  tag?: string
  [key: string]: any
}

const Twemoji = ({ text, tag = 'span', ...other }: Props) =>
  text
    ? createElement(tag, {
        ...other,
        dangerouslySetInnerHTML: {
          __html: twemoji.parse(text, {
            folder: 'svg',
            ext: '.svg',
          }),
        },
      })
    : null

export default memo(Twemoji)

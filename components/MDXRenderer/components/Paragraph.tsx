import React, { ReactNode } from 'react'
import Twemoji from '../../Twemoji'

type Props = {
  children: ReactNode | ReactNode[]
}

export default function MDXParagraph({ children }: Props) {
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

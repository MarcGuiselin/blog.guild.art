export default function wordCounter(parent: Element) {
  if (parent.childElementCount) {
    let words = 0
    for (const child of parent.children) {
      if (
        typeof child.className == 'string' &&
        (!child.className.includes('not-prose') || child.className.includes('include-word-count'))
      )
        words += wordCounter(child)
    }
    return words
  } else {
    return parent.textContent?.split(/\s+/).length as number
  }
}

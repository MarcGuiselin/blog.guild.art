import { Toc } from 'types/Toc'

interface TOCInlineProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  const tocList = (
    <div className="not-prose flex justify-center">
      <div className="py-4 px-6 bg-slate-50 dark:bg-onyx-800 rounded-lg shadow-lg">
        <h2 className="text-center text-lg font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-xl pb-4">
          Skip to a part of the Article
        </h2>
        <ul>
          {filteredToc.map((heading) => (
            <li key={heading.value} className={`${heading.depth >= indentDepth && 'ml-6'}`}>
              <a href={heading.url}>{heading.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <>
      {asDisclosure ? (
        <details open>
          <summary className="pt-2 pb-2 ml-6 text-xl font-bold">Table of Contents</summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </>
  )
}

export default TOCInline

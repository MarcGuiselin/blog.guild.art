import Image from 'next/image'
import Twemoji from '../../../Twemoji'
import { FaDiscord } from 'react-icons/fa'

type DiscordReaction = {
  emoji: string
  count: number
}

type DiscordLine =
  | string
  | {
      line: string
      reactions: DiscordReaction[]
    }

type DiscordLines = DiscordLine | DiscordLine[]

type DiscordComment = {
  id: string
  author: {
    name: string
    avatar: string
    color: string
  }
  date: string
  text: DiscordLines
}

type Props = {
  data: DiscordComment
}

export default function EmbedDiscord({
  data: {
    id,
    author: { name, avatar, color },
    date,
    text,
  },
}: Props) {
  const commentUrl = `https://discord.com/channels/${id}`
  const lines = (Array.isArray(text) ? text : [text]).map((line) =>
    typeof line === 'string'
      ? {
          line,
          reactions: [],
        }
      : line
  )

  return (
    <div className="not-prose relative rounded-lg border border-slate-300 dark:border-[#32353B] px-4 py-3 my-3 w-full bg-white dark:bg-[#36393F] hover:bg-gray-50 dark:hover:bg-[#32353B] transition group">
      <a
        className="absolute right-3 -top-5 rounded-md bg-white dark:bg-[#36393F] p-2 border border-black border-opacity-20 group-hover:block hidden shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#2F3136] active:shadow-sm transition"
        href={commentUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-gray-800 dark:text-white text-sm font-bold flex align-middle">
          <FaDiscord className="inline w-5 h-5 mr-2" />
          See on Discord
        </div>
      </a>
      <div className="flex gap-4">
        <a
          className="flex h-10 w-10 flex-shrink-0"
          href={commentUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt={`${name}'s avatar`}
            height={40}
            width={40}
            src={`${avatar}?size=40`}
            className="rounded-full"
          />
        </a>
        <div className="">
          <div>
            <a
              className="hover:!underline"
              style={{ color }}
              href={commentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twemoji text={name} />
            </a>
            <span className="text-sm ml-2 opacity-70">{date}</span>
          </div>
          {lines.map(({ line, reactions }, i) => (
            <div key={i}>
              <Twemoji tag="div" text={line} />
              {reactions.length ? (
                <a
                  className="flex gap-2 text-sm"
                  href={commentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {reactions.map(({ emoji, count }) => (
                    <Twemoji
                      key={emoji}
                      tag="div"
                      className="px-2 py-1 bg-gray-100 dark:bg-[#2F3136] rounded text-gray-800 dark:text-white"
                      text={`${emoji} ${count}`}
                    />
                  ))}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

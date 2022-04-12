type Props = {
  title?: string
  id: string
}

export default function EmbedYoutube({ title = 'YouTube video player', id }: Props) {
  return (
    <div className="relative p-1 sm:p-2 bg-white rounded-lg sm:rounded-3xl">
      <div className="z-0 absolute top-2 bottom-2 -left-6 -right-6 rounded-3xl bg-rainbow opacity-10 blur-xl translate-y-[0px]" />
      <iframe
        className="relative z-10 w-full aspect-video rounded-lg sm:rounded-2xl shadow-lg"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

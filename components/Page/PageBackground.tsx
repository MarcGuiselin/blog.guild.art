type Props = {
  bottom?: boolean
}

export default function PageBackground({ bottom }: Props) {
  return (
    <div
      className={`absolute z-0 w-full overflow-hidden dark:bg-onyx-900 bg-[#d4d0e7] ${
        bottom ? 'bottom-0 rotate-180 dark:opacity-60 h-32' : 'top-0 h-44'
      }`}
    >
      <div
        className={`absolute -left-6 -right-6 w-auto h-8 bg-rainbow blur-xl dark:blur-2xl ${
          bottom ? '-top-12 dark:-top-16' : '-top-6'
        }`}
      />
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04] bg-striped" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent dark:to-onyx-900 to-primary-50" />
    </div>
  )
}

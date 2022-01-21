import SocialIcon from '../SocialButton'
import { AuthorSocials } from 'types/AuthorFrontMatter'

type Props = {
  className?: string
  smaller?: boolean
  frontMatter: AuthorSocials & {
    [key: string]: any
  }
}

export default function SocialRow({
  className = '',
  smaller,
  frontMatter: { website, email, facebook, twitter, youtube, instagram },
}: Props) {
  return (
    <div className={className}>
      {!!youtube && <SocialIcon kind="youtube" href={youtube} smaller={smaller} />}
      {!!twitter && (
        <SocialIcon kind="twitter" href={`https://twitter.com/${twitter}`} smaller={smaller} />
      )}
      {!!instagram && (
        <SocialIcon
          kind="instagram"
          href={`https://www.instagram.com/${instagram}`}
          smaller={smaller}
        />
      )}
      {!!email && <SocialIcon kind="email" href={`mailto:${email}`} smaller={smaller} />}
      {!!youtube && <SocialIcon kind="youtube" href={youtube} smaller={smaller} />}
      {!!facebook && <SocialIcon kind="facebook" href={facebook} smaller={smaller} />}
      {!!website && <SocialIcon kind="website" href={website} smaller={smaller} />}
    </div>
  )
}

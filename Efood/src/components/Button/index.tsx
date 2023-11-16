import { BtnAsBtn, BtnAsLink } from './styles'

type Props = {
  type: 'btn' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'btn') {
    return (
      <BtnAsBtn type="button" title={title} onClick={onClick}>
        {children}
      </BtnAsBtn>
    )
  }

  return (
    <BtnAsLink to={to as string} title={title}>
      {children}
    </BtnAsLink>
  )
}

export default Button

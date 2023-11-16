import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Menu = ({ description, image, title }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 153) {
      return descricao.slice(0, 150) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Description>{getDescription(description)}</S.Description>
      <Button type="btn" title="Clique aqui para adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </>
  )
}

export default Menu

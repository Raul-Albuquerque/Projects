import Star from '../../assets/images/star.svg'

import Tag from '../Tag'
import Button from '../Button'
import * as S from './styles'

type Props = {
  image: string
  tagName: string[]
  name: string
  ratingScore: number
  info: string
  id: number
}

const Restaurant = ({ image, tagName, name, ratingScore, info, id }: Props) => {
  const getInfo = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 245) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Card>
        <S.RestaurantImage src={image} alt={name} />
        <S.TagContainer>
          {tagName.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </S.TagContainer>
        <S.InfoContainer>
          <S.NameContainer>
            <h2>{name}</h2>
            <p>
              {' '}
              {ratingScore}
              <img src={Star} alt="avaliação" />
            </p>
          </S.NameContainer>
          <S.RestaurantInfo>{getInfo(info)}</S.RestaurantInfo>
          <Button
            type="link"
            to={`restaurant/${id}`}
            title="Clique aqui para conhecer este restaurante"
          >
            Saiba mais
          </Button>
        </S.InfoContainer>
      </S.Card>
    </>
  )
}

export default Restaurant

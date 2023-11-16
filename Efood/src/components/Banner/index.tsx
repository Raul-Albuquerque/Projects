import { Restaurante } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurant: Restaurante
}

const Banner = ({ restaurant }: Props) => {
  return (
    <S.Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <S.ContentContainer className="container">
        <h2>{restaurant.tipo}</h2>
        <h1>{restaurant.titulo}</h1>
      </S.ContentContainer>
    </S.Banner>
  )
}

export default Banner

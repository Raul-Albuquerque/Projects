import Restaurant from '../Restaurant'
import * as S from './styles'
import { Restaurante } from '../../pages/Home'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  const getTagName = (restaurant: Restaurante) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }
    tags.push(restaurant.tipo)

    return tags
  }

  return (
    <>
      <S.Section className="container">
        <S.RestaurantsList>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              image={restaurant.capa}
              tagName={getTagName(restaurant)}
              name={restaurant.titulo}
              ratingScore={restaurant.avaliacao}
              info={restaurant.descricao}
              id={parseInt(restaurant.id)}
            />
          ))}
        </S.RestaurantsList>
      </S.Section>
    </>
  )
}
export default RestaurantsList

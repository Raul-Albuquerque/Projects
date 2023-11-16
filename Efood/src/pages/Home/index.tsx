import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

import { useGetRestaurantListQuery } from '../../services/api'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data } = useGetRestaurantListQuery()

  if (data) {
    return (
      <>
        <Header headerLayout="home" />
        <RestaurantsList restaurants={data} />
      </>
    )
  }
  return (
    <div className="container">
      <h4>Carregando...</h4>
    </div>
  )
}

export default Home

import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MealsList from '../../components/MealsList'
import { useEffect, useState } from 'react'
import { Cardapio, Restaurante } from '../Home'

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurante>()
  const [cardapio, setCardapio] = useState<Cardapio>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  if (!restaurant && !cardapio) {
    return (
      <div className="container">
        <h4>Carregando...</h4>
      </div>
    )
  }

  return (
    <>
      <Header headerLayout="page" />
      <Banner restaurant={restaurant!} />
      <MealsList pratos={cardapio!} />
    </>
  )
}

export default Restaurant

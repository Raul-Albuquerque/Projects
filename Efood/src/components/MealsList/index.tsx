import { useState, useEffect } from 'react'
import Menu from '../Menu'
import {
  BtnAsLink2,
  MealsContainer,
  Modal,
  ModalContent,
  Overlay,
  Container
} from './styles'
import close from '../../assets/images/close.png'
import { Cardapio, Restaurante } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  pratos: Cardapio
}

const MealsList = ({ pratos }: Props) => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const [modalTitulo, setModalTitulo] = useState('')
  const [modalDescricao, setModalDescricao] = useState('')
  const [modalPorcao, setModalPorcao] = useState('')
  const [modalPreco, setModalPreco] = useState(0)
  const [meals, setMeals] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMeals(res))
  }, [id])

  if (!meals) {
    return <h3>Carregando...</h3>
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const addToCart = () => {
    dispatch(add(pratos))
    dispatch(open())
  }

  return (
    <>
      <MealsContainer>
        {meals.cardapio.map((meal) => (
          <Container
            key={meal.id}
            onClick={() => {
              setModalEstaAberto(true)
              setModalUrl(meal.foto)
              setModalTitulo(meal.nome)
              setModalDescricao(meal.descricao)
              setModalPorcao(meal.porcao)
              setModalPreco(meal.preco)
            }}
          >
            <Menu
              image={meal.foto}
              title={meal.nome}
              description={meal.descricao}
            />
          </Container>
        ))}
      </MealsContainer>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <div className="container">
          <img
            src={close}
            alt="ícone de fechar"
            onClick={() => setModalEstaAberto(false)}
          />
          <ModalContent>
            <div>
              <img src={modalUrl} />
            </div>
            <div>
              <h4>{modalTitulo}</h4>
              <p>{modalDescricao}</p>
              <p>Serve: {modalPorcao}</p>
              <BtnAsLink2
                to="/"
                title="Clique para adicionar ao carrinho"
                type="link"
                onClick={addToCart}
              >
                Adicionar ao carrinho - {formataPreco(modalPreco)}
              </BtnAsLink2>
            </div>
          </ModalContent>
        </div>
        <Overlay onClick={() => setModalEstaAberto(false)}></Overlay>
      </Modal>
    </>
  )
}

export default MealsList

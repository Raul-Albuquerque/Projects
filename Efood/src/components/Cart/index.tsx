import { useDispatch, useSelector } from 'react-redux'
import pizza from '../../assets/images/pizza.jpg'
import {
  Overlay,
  CartContainer,
  CartBar,
  CartProduct,
  DeleteIcon,
  TotalPrice
} from './styles'
import { BtnAsBtn } from '../Button/styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { Cardapio } from '../../pages/Home'

const Cart = () => {
  const { isOpen, meals } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>
      <CartBar>
        <ul>
          {meals.map((item) => (
            <CartProduct key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>pizza</h3>
                <p>preco</p>
              </div>
              <DeleteIcon type="button" />
            </CartProduct>
          ))}
        </ul>
        <TotalPrice>
          Valor total <span>R$ 182,70</span>
        </TotalPrice>
        <BtnAsBtn
          type="button"
          title="Clique aqui para continuar com a entrega"
        >
          Continuar com a entrega
        </BtnAsBtn>
      </CartBar>
    </CartContainer>
  )
}

export default Cart

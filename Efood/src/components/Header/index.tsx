import Logo from '../../assets/images/logo.svg'
import * as S from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type Props = {
  headerLayout: 'home' | 'page'
}

const Header = ({ headerLayout }: Props) => {
  const dispatch = useDispatch()
  const { meals } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  if (headerLayout === 'home') {
    return (
      <S.Header>
        <S.HeaderContainer>
          <S.CustomLink>
            <S.Logo src={Logo} alt="logo Efood" />
          </S.CustomLink>
          <S.HeaderPhrase>
            Viva experiências gastronômicas no conforto de sua casa
          </S.HeaderPhrase>
        </S.HeaderContainer>
      </S.Header>
    )
  }
  return (
    <S.HeaderPage>
      <S.HeaderContainerPage>
        <S.HeaderList>
          <S.CustomLink>Restaurantes</S.CustomLink>
          <S.CustomLink>
            <S.LogoPage src={Logo} alt="logo Efood" />
          </S.CustomLink>
          <S.CustomLink onClick={openCart}>
            {meals.length} Produto(s) no carrinho
          </S.CustomLink>
        </S.HeaderList>
      </S.HeaderContainerPage>
    </S.HeaderPage>
  )
}

export default Header

import Logo from '../../assets/images/logo.svg'
import Instagram from '../../assets/images/instagram.svg'
import Facebook from '../../assets/images/facebook.svg'
import Twitter from '../../assets/images/twitter.svg'
import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <S.CustomLink to={'/'}>
      <img src={Logo} alt="Logo Efood" />
    </S.CustomLink>
    <S.SocialMediaList>
      <li>
        <img src={Instagram} alt="Nosso Instagram" />
      </li>
      <S.SocialMediaItem>
        <img src={Facebook} alt="Nosso Facebook" />
      </S.SocialMediaItem>
      <li>
        <img src={Twitter} alt="Nosso Twitter" />
      </li>
    </S.SocialMediaList>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Footer>
)

export default Footer

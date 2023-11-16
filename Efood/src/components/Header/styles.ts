import styled from 'styled-components'
import { Link } from 'react-router-dom'
import headerBg from '../../assets/images/fundo.svg'
import { color } from '../../styles'

export const Header = styled.header`
  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 64px 0 40px 0;
  text-align: center;
`
export const HeaderPage = styled(Header)`
  padding: 64px 0;
`

export const HeaderContainer = styled.div`
  width: 540px;
  margin: 0 auto;
`
export const HeaderContainerPage = styled(HeaderContainer)`
  max-width: 1024px;
  width: 100%;
`

export const HeaderPhrase = styled.h1`
  font-size: 36px;
  line-height: 42px;
  font-weight: 900;
`

export const Logo = styled.img`
  max-width: 125px;
  width: 100%;
  margin-bottom: 140px;
`
export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const HeaderListItem = styled.li``

export const LogoPage = styled(Logo)`
  margin-bottom: 0;
`
export const CustomLink = styled.a`
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${color.darkOrange};
  cursor: pointer;
`

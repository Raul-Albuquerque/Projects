import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../styles'

export const Footer = styled.footer`
  margin-top: 120px;
  background-color: ${color.orange};
  color: ${color.darkOrange};
  font-size: 10px;
  font-weight: normal;
  padding: 40px;
  text-align: center;
`
export const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 80px;
`
export const SocialMediaItem = styled.li`
  margin: 0 8px;
`
export const CustomLink = styled(Link)`
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: ${color.darkOrange};
`

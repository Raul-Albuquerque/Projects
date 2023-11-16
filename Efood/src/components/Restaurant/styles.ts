import styled from 'styled-components'
import { color } from '../../styles'
import TagRestaurant from '../Tag/styles'

export const Card = styled.li`
  width: 100%;
  position: relative;
`
export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagRestaurant} {
    margin-left: 8px;
  }
`
export const RestaurantImage = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const InfoContainer = styled.div`
  padding: 8px;
  border: 1px solid ${color.darkOrange};
  border-top: 0;
  background-color: ${color.white};
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;

  h2 {
    font-size: 18px;
  }

  p {
    line-height: 21px;
    display: flex;
    align-items: center;
    height: 21px;

    img {
      margin-left: 8px;
      display: block;
    }
  }
`
export const RestaurantInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;
`

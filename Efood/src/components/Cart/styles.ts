import styled from 'styled-components'
import { color } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${color.black};
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const CartBar = styled.aside`
  background-color: ${color.darkOrange};
  z-index: 1;
  padding: 32px 8px;

  ul {
    width: 100%;
  }
`

export const CartProduct = styled.li`
  background-color: ${color.orange};
  display: flex;
  position: relative;
  width: 344px;
  padding: 8px;
  margin-bottom: 16px;

  > img {
    width: 80px;
    height: 80px;
    display: block;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    line-height: 21px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
`
export const DeleteIcon = styled.button`
  background-image: url(${lixeira});
  height: 16px;
  width: 16px;
  background-color: ${color.orange};
  border: none;
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
`
export const TotalPrice = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  color: ${color.orange};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`

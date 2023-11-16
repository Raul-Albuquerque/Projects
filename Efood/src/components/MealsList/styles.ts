import styled from 'styled-components'
import { color } from '../../styles'
import { BtnAsLink } from '../Button/styles'

export const MealsContainer = styled.section`
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 56px auto 120px auto;
  gap: 32px;
`
export const Container = styled.div`
  background-color: ${color.darkOrange};
  color: ${color.orange};
  padding: 8px;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .container {
    background-color: ${color.darkOrange};
    position: relative;
    z-index: 1;

    > img {
      position: absolute;
      right: 0;
      top: 0;
      padding: 8px;
      color: ${color.white};
    }
  }
`
export const ModalContent = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 32px;
  color: ${color.white};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
    display: block;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 16px;
  }
`
export const BtnAsLink2 = styled(BtnAsLink)`
  background-color: ${color.orange};
  color: ${color.darkOrange};
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

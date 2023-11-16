import styled from 'styled-components'
import { color } from '../../styles'

export const Banner = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 280px;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${color.black};
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
  }
`
export const ContentContainer = styled.div`
  color: ${color.white};
  position: relative;
  z-index: 1;

  h2 {
    font-weight: 100;
    font-size: 32px;
    line-height: 34px;
    padding-top: 24px;
    padding-bottom: 156px;
  }

  h1 {
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 32px;
    font-weight: 900;
  }
`

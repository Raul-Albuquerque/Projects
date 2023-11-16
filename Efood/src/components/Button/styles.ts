import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { color } from '../../styles'

export const BtnAsBtn = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  background-color: ${color.orange};
  color: ${color.darkOrange};
  border: none;
  width: 100%;
  cursor: pointer;
`
export const BtnAsLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  padding: 4px 6px;
  background-color: ${color.darkOrange};
  color: ${color.orange};
  text-decoration: none;
  border: none;
  display: inline-block;
`

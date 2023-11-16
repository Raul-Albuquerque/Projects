import { createGlobalStyle } from 'styled-components'

export const color = {
  darkOrange: '#E66767',
  orange: '#FFEBD9',
  lightOrange: '#FFF8F2',
  white: '#FFFFFF',
  black: '#000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${color.lightOrange};
    color: ${color.darkOrange};
  }

  .container {
    max-width:  1024px;
    width: 100%;
    margin: 0 auto;
  }
`

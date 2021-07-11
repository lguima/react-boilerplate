import React from 'react'
import tw, { GlobalStyles as BaseStyle } from 'twin.macro'
import { createGlobalStyle } from 'styled-components'

const CustomStyle = createGlobalStyle`
  html, body, #__next {
    ${tw`h-full`}
  }
`

const GlobalStyle = () => (
  <>
    <BaseStyle />
    <CustomStyle />
  </>
)

export default GlobalStyle

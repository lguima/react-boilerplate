import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyle from '../src/assets/styles/GlobalStyle'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

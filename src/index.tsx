import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import OwnerMenu from './components/menu/owner-menu'
console.info(`⚛️ ${React.version}`)

const App = () => (
  <>
    <GlobalStyle />
    <OwnerMenu />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()

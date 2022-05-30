import { useState } from 'react'
import { MenuBox } from './components/MenuBox'
import { LoginBox } from './components/LoginBox'

import styles from 'App.module.scss'
import { Page_exibir_produto } from './components/Page_exibir_produto'

function App() {
  const [count, setCount] = useState(0)

  return (
     <MenuBox/>
  )
}

export default App

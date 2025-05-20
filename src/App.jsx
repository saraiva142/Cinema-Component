import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/menus/menu'
import Home from './features/home/pages/Home'
import Filmes from './features/filme/pages/Filmes'
import Salas from './features/salas/pages/salas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      {/* <Filmes /> */}
      <Salas />
    </>
  )
}

export default App

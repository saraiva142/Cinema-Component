import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Menu from './components/menus/menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
    </>
  )
}

export default App

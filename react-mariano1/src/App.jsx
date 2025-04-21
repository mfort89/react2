import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botones from './assets/Components/Botones'
import Saludo from './assets/Components/Saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Saludo name='Mariano'/>
      <Botones texto='aceptar' color='blue'/>
      <Botones texto='cancelar' color='red'/>
      <Botones texto='ver mas' color='green'/>
      </div>
  )
}

export default App

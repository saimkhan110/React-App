import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Hello React</h1>
        <p>Some Work</p>
        <Home></Home>
    </>
  )
}

export default App

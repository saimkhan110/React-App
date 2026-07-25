import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>React App</h1>
        <p>Welcome Back!</p>
        <Home></Home>
        <About></About>
    </>
  )
}

export default App

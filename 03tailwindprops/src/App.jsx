import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card7 from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 25
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4 ">Hello</h1>

      <Card7 userName="Tommen" />
      <Card7 />
      
    </>
  )
}

export default App

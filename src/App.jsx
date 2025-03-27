import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Products from './components/Proudcts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     

     <Navbar/>

      <Routes>
      
        <Route path="/" element={ <Home/>} />
        <Route path="about" element={ <About/>} />
        <Route path="products" element={ <Products/>} />
   
        </Routes>
    </>
  )
}

export default App

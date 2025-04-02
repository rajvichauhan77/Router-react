import { useState } from 'react'
import './App.css'

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Products from './components/Proudcts'
import Login from './components/Login'
import {  Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     

     <Navbar/>

      <Routes>
        
        <Route path="/" element={ <Login/>} />
        <Route path="home" element={ <Home/>} />
        <Route path="about" element={ <About/>} />
        <Route path="products/:prodId" element={ <Products/>} />

        </Routes>
    </>
  )
}

export default App

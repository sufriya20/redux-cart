import { useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wish from './pages/Wish'
import Header from './component/Header'
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import './style.css'


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/view/:id' element={<View/>}/>
    </Routes>
    </>
  )
}

export default App

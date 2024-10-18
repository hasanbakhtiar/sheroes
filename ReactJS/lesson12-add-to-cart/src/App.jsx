import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Basket from './pages/Basket'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/product/:urlid' element={<ProductDetails />}></Route>
        <Route path='/basket' element={<Basket />}></Route>

        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
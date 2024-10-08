import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Account from './pages/auth/Account'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/account' element={<Account />}></Route>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
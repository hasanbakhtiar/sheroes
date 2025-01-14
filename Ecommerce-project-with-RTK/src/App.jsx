import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import { Container } from 'react-bootstrap'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Account from './pages/auth/Account'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div style={{ height: "70vh" }}>
                <Container>
                    <Routes>
                        <Route element={<Home />} path='/'></Route>
                        <Route element={<Product />} path='/products'></Route>
                        <Route element={<ProductDetails />} path='/product/:slug'></Route>

                        {/* Auth start */}
                        <Route element={<Login />} path='/login'></Route>
                        <Route element={<Register />} path='/register'></Route>
                        <Route element={<Account />} path='/account'></Route>
                        {/* Auth end */}
                    </Routes>
                </Container>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
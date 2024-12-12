import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from '../pages/crud/List'
import Header from '../layout/Header'
import AddList from '../pages/crud/AddList'
import EditList from '../pages/crud/EditList'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<List />}></Route>
                <Route path='/add' element={<AddList />}></Route>
                <Route path='/:id' element={<EditList />}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default RouterApp
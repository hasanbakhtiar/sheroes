import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './pages/MovieList'
import Header from './layout/Header'
import Dashboard from './pages/dashboard/Dashboard'
import AddMovie from './pages/dashboard/movie/AddMovie'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MovieList />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/add' element={<AddMovie />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
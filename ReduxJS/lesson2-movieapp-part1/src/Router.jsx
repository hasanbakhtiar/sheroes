import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieList from './pages/MovieList'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
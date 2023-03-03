import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//page components
import Header from '../components/Header'
import Home from '../page/Home'

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default routes
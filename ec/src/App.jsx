import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'
import CA from './pages/CA'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Nav from '../components/Nav'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
     
       

       
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App

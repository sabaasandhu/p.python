
import './App.css'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react'
import Home from './screens/Dashboard/Home'
import About from './screens/Dashboard/About'
import Login from './screens/Authentication/Login'
import Signup from './screens/Authentication/Signup'
import Contacts from './screens/Dashboard/Contacts'
import SingleProduct from './screens/Dashboard/SingleProduct'

// components
import TopHeader from './components/TopHeader'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Products from '../../../../Downloads/client/src/screens/Products'
import SingleProductPage from './screens/Dashboard/CartAndCheckout'

import Cart from './components/Cart'
import Carasol from './components/Carasol'
import Sales from './screens/Dashboard/Sales'

const App = () => {
  return (
    <Router>

      <TopHeader/>
      <Header/>
      <Navigation/>
      <Carasol/>
        <Routes>

          <Route path='/' element={<Home/>}/>
           <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
           <Route path='/aboutus' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/contactus' element={<Contacts/>}/>
              <Route path='/sales' element={<Sales/>}/>
              <Route path='http://localhost:8000/admin/' />

               
        </Routes>
    </Router>
  )
}

export default App

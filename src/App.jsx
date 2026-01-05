import React from 'react'
import Home from './Screen/Home';
import Signup from './Screen/Signup';
import Login from './Screen/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./Component/contextReducer"
import Navbar from './Component/Navbar';
import MyOrders from './Screen/MyOrders';
import AddFood from './Component/AddFood';

console.log("CartProvider:", CartProvider);

const App = () => {
  return (
    <>

      <CartProvider>

        <Router>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>

            <Route path='/createuser' element={<Signup />}></Route>
            <Route path='/myorder' element={<MyOrders />}></Route>
            <Route path='/addfood' element={<AddFood />}></Route>




          </Routes>
        </Router>

      </CartProvider>
    </>
  )
}

export default App
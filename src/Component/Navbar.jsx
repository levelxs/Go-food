import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { useCart } from './contextReducer'
import Modal from '../Modal'
import Cart from '../Screen/Cart'

//component start here
const Navbar = () => {

  let data = useCart()
  console.log("NAVBAR — useCart():", data);

  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate()



  const handleLogout = () => {
    localStorage.removeItem('authToken')
    navigate('/login')

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-1 fw-bold" to="/">GoFood</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2">

              <li className="nav-item">
                <NavLink className="nav-link active fs-5" aria-current="page" to="/">Home</NavLink>
              </li>

              {(localStorage.getItem('authToken')) ?
                <li className="nav-item">
                  <NavLink className="nav-link active fs-5" aria-current="page" to="/myorder">MyOrders</NavLink>
                </li> : ''
              }

              <li className="nav-item">
                <NavLink className="nav-link active fs-5" aria-current="page" to="/addfood">Admin</NavLink>
              </li> : ''

            </ul>

            {(!localStorage.getItem('authToken')) ?
              <div className='d-flex'>
                <NavLink className="btn bg-white text-success mx-1" aria-current="page" to="/login">Login</NavLink>
                <NavLink className="btn bg-white text-success mx-1" to="/createuser">Sign up</NavLink>
              </div> :
              <div>
                <div className='btn bg-white text-success mx-1' onClick={() => setCartView(true)}>My Cart{' '}
                  <Badge pill bg='danger'>{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)} ><Cart /></Modal> : ""}
                <div className='btn bg-white text-danger mx-1' onClick={handleLogout}>Logout</div>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
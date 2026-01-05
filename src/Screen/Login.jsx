import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

    let navigate = useNavigate()
    const [data, setData] = useState({ email: '', password: '' })

    const dataHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://go-food-backend-2.onrender.com/api/loginUser', data)
            alert('User successfully logged in.')

            setData({ email: '', password: '' })

            localStorage.setItem('userEmail', data.email)
            localStorage.setItem('authToken', response.data.authToken)

            navigate('/')
        }
        catch (err) {
            console.log('User failed to login.', err)
            alert('Invalid credentials.')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light ">
            <div className="card shadow p-4" style={{ width: "25rem", borderRadius: "12px" }}>

                <h3 className="text-center mb-1 fw-bold">Welcome Back</h3>
                <p className="text-center text-muted mb-4">Login to continue</p>

                <form onSubmit={submitHandler}>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={data.email}
                            onChange={dataHandler}
                        />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={data.password}
                            onChange={dataHandler}
                        />
                    </div>

                    {/* Buttons */}
                    <button type="submit" className="btn btn-success w-100">
                        Login
                    </button>

                    <NavLink to="/createuser" className="btn btn-danger w-100 mt-3">
                        I'm a new user
                    </NavLink>

                </form>
            </div>
        </div>
    )
}

export default Login

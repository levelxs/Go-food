import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {

    const [data, setData] = useState({ name: '', email: '', password: '', location: '' })
    let navigate = useNavigate()
    const dataHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.post('https://go-food-backend-2.onrender.com/api/createUser', data)
            alert('User successfully signed up.')

            setData({ name: '', email: '', password: '', location: '' })
            navigate('/login')
        }
        catch (err) {
            console.log('User failed to signup.', err)
            alert('Invalid credentials.')
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "28rem", borderRadius: "12px" }}>

                <h3 className="text-center mb-1 fw-bold">Create Account</h3>
                <p className="text-center text-muted mb-4">Join us by creating your new account</p>

                <form onSubmit={submitHandler}>

                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={data.name}
                            onChange={dataHandler}
                        />
                    </div>

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

                    {/* Address */}
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="location"
                            value={data.location}
                            onChange={dataHandler}
                        />
                    </div>

                    {/* Buttons */}
                    <button type="submit" className="btn btn-success w-100">
                        Sign Up
                    </button>

                    <NavLink className="btn btn-danger w-100 mt-3" to="/login">
                        Already a user
                    </NavLink>

                </form>
            </div>
        </div>
    )
}

export default Signup

import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light pt-4 pb-3 mt-5">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          
          {/* Left Section */}
          <div className="col-md-4 d-flex align-items-center">
            <NavLink
              to="/"
              className="text-light text-decoration-none me-2 fs-4 fw-bold"
            >
              GoFood
            </NavLink>
            <span className="text-light" >© 2025 GoFood, Inc</span>
          </div>

          {/* Navigation Links */}
          <ul className="nav col-md-4 justify-content-center mb-3 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-light" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-light" to="/about">MyCart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-light" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-2 text-light" to="/privacy">Privacy</NavLink>
            </li>
          </ul>

          {/* Social Icons */}
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-light" href="#">
                <i className="bi bi-facebook fs-4"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <i className="bi bi-instagram fs-4"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-light" href="#">
                <i className="bi bi-twitter-x fs-4"></i>
              </a>
            </li>
          </ul>

        </div>
      </footer>
    </>
  );
};

export default Footer;

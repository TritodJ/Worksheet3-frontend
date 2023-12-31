import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/service">Service</NavLink>
                  </li>
                </ul>
                <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">BOOK WEB</NavLink>
                  <NavLink to="/login" className="btn btn-outline-success ms-auto px-4 rounded-pill"><i className="fa fa-sign-in me-2"></i>Login</NavLink>
                  <NavLink to="/register" className="btn btn-outline-success ms-2 px-4 rounded-pill"><i className="fa fa-user-plus me-2"></i>Sign Up</NavLink>
              </div>
            </div>
          </nav>
        </div>
    );
}

export default Navbar;
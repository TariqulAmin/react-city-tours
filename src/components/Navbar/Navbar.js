import React from 'react'
import './Navbar.scss'
import logo from './logo.png'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt=""/>
                <ul className="nav-links">
                  <li>
                      <a href="/" className="nav-link">Home</a>
                  </li>
                  <li>
                      <a href="/" className="nav-link">About</a>
                  </li> 
                  <li>
                      <a href="/" className="nav-link active">Tour</a>
                  </li>   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
function Navbar() {
    
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand text-white" to="#" ><svg viewBox="0 0 1320 300">
  <text x="50%" y="50%" dy=".35em" text-anchor="middle">
    PORTFOLIO
  </text>
</svg>  </Link>
  <button className="navbar-toggler" style={{backgroundColor:"#0FFF50", border:"none", outline:"none"}} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" style={{fontSize:"20px"}} id='navbarLinks' to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{fontSize:"20px"}} id='navbarLinks' to="/about">Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{fontSize:"20px"}} id='navbarLinks' to="/resume">Resume</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{fontSize:"20px"}} id='navbarLinks' to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" style={{fontSize:"20px"}} id='navbarLinks' to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

        
    </>
  )
}

export default Navbar
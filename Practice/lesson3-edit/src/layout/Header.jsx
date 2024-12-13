import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link " >List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add" className="nav-link " >Add List</NavLink>
        </li>
      
      
    
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header
import React from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate(useNavigate);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand"  to="/">Kindle Bit Solution</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/Form">Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/List">List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
       
        
    
      </ul>
      <form className="d-flex">
        
        <button className="btn btn-primary" onClick={() => navigate("/Form")} type="button">Add user</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
import React from 'react'
import { Link } from 'react-router-dom'
import "../src/App.css"

const Nav = () => {
  return (
    <div>


<div className="navD bg-danger p-5">
    <div className="row">
        <div className="col-3 ">
           <h4 className='text-white'>ParaDox E-Comm</h4>

        </div>
        <div className="offset-6 col-3">
            <nav>
                <Link to="/" className='text-decoration-none m-1 text-white'>Home</Link>
                <Link to="/product" className='text-decoration-none m-1 text-white'>Product</Link>
                <Link to="/signup" className='text-decoration-none m-1 text-white'>Signup</Link>
                <Link to="/contact" className='text-decoration-none m-1 text-white'>Contact</Link>
                
            </nav>
        </div>
    </div>

</div>

<div className="navM">
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Signup</a>
        </li>
        <li className="nav-item">
          
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>


      
    </div>
  )
}

export default Nav

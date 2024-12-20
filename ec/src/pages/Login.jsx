import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div  id='lf'>
    <form action="/action_page.php">
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" /> Remember me
    </label>
  </div>
  <button  className="btn btn-primary text-decoration-none"><Link style={{color:"white",textDecoration:"none"}} to="/signup" type="submit">Submit</Link></button>
</form>

    </div>
  )
}

export default Login

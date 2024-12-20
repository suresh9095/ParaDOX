import React from 'react';
import "../src/App.css";

const Footer = () => {
  return (
    <div className='' >
     <section className="Footer">
   {/* Footer */} 
  <footer className=""style={{backgroundColor:"black"}}>
    {/* Grid container */} 
    <div className="container p-4">
     {/*Grid row*/} 
      <div className="row" style={{color:"white"}}>
       {/*Grid column*/} 
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Footer Content</h5>
          <p>
          Discover the Future of Shopping at Our eCommerce Store
          Welcome to ParaDox E-Comm, your ultimate online destination for all things trendy and essential. We are dedicated to bringing you a seamless shopping experience, combining convenience, variety, and exceptional service—all from the comfort of your home.  
          </p>
        </div>
        {/*Grid column*/}
        {/*Grid column*/} 
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0" style={{color:"white"}}>
            <li>
              <a href="#!" className="">Link 1</a>
            </li>
            <li>
              <a href="#!" className="">Link 2</a>
            </li>
            <li>
              <a href="#!" className="">Link 3</a>
            </li>
            <li>
              <a href="#!" className="">Link 4</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
        {/*Grid column*/} 
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0" >
          <h5 className="text-uppercase mb-0">Links</h5>
          <ul className="list-unstyled"  style={{color:"white"}}>
            <li>
              <a href="#!" className="text-decoration-none " >Link 1</a>
            </li>
            <li>
              <a href="#!" className="">Link 2</a>
            </li>
            <li>
              <a href="#!" className="">Link 3</a>
            </li>
            <li>
              <a href="#!" className="">Link 4</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/} 
      </div>
      {/*Grid row*/}
    </div>
     {/* Grid container */} 
     {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)' ,color:"white"}}>
      © 2020 Copyright:
      <a className="" style={{color:"white"}} href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
   {/* Copyright */}
  </footer>
   {/* Footer */} 
</section>

    </div>
  )
}

export default Footer

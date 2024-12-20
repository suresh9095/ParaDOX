import React from 'react'
import i1 from "../assets/im1.svg";
import "../App.css";
import v1 from "../assets/video/vid..mp4"
import c1 from "../assets/ca1.svg";
import c2 from "../assets/ca2.jpg";
import c3 from "../assets/ca3.svg";
import Footer from '../../components/Footer';



const Home = () => {
  return (      
    <div style={{width:"100%"}}>
       <div className="row" style={{backgroundColor:"#FFF0F5"}}>
        <div className="col-sm-6" id='text'>
        Discover the Future of Shopping at Our eCommerce Store
        Welcome to ParaDox E-Comm, your ultimate online destination for all things trendy and essential. We are dedicated to bringing you a seamless shopping experience, combining convenience, variety, and exceptional service—all from the comfort of your home.  
        


        <h3 className='text-center mt-5'>Why Choose Us?</h3>
        
 <div id="accordion" className='mt-4'>
  <div className="card">
    <div className="card-header" style={{backgroundColor:"#C7253E"}}>
      <a className="btn " data-bs-toggle="collapse" href="#collapseOne" style={{fontWeight:"bold",color:"black"}}>
        Wide Range of Products:
      </a>
    </div>
    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion" style={{backgroundColor:"#88D66C",color:"#000000"}}>
      <div className="card-body">
        From the latest fashion trends to cutting-edge electronics, home essentials, and more, we offer a diverse selection to meet all your needs.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" style={{backgroundColor:"#C7253E"}}>
      <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo" style={{fontWeight:"bold",color:"black"}}>
        Quality Assurance:
      </a>
    </div>
    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion"style={{backgroundColor:"#88D66C",color:"#000000"}}>
      <div className="card-body">
        We prioritize quality over everything. Every product goes through rigorous checks to ensure you receive only the best.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" style={{backgroundColor:"#C7253E"}}>
      <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree" style={{fontWeight:"bold",color:"black"}}>
        Competitive Prices
      </a>
    </div>
    <div id="collapseThree" className="collapse" data-bs-parent="#accordion" style={{backgroundColor:"##88D66C",color:"#000000"}}>
      <div className="card-body">
        Enjoy high-quality products at unbeatable prices. We continually strive to offer value for your money.
      </div>
    </div>
  </div>
</div>

        
        
          </div>
        <div className="col-sm-6">
          <img src={i1} alt="" srcset="" />
        </div>
       </div>

       <div className='row 'style={{backgroundColor:"#FFFACD",height:"500px"}}>
              <h2  style={{textAlign:"center",color: "#e1141e",marginTop:"15px"}}>OUR BRANDS</h2>
          <div className='p-5 'style={{display:"flex"}} >
              <div className='col-sm-4 '>
                <img style={{width:"350px",height:"250px"}} src={c1} alt="" />
              </div>

              <div className='col-sm-4'>
                <img style={{width:"350px",height:"240px"}} src={c2} alt="" />
              </div>
              
              <div className='col-sm-4'>
                <img style={{width:"350px",height:"250px"}} src={c3} alt="" />
              </div>

          </div>   

       </div>


       <div className='p-4' style={{backgroundColor:"#D3D3D3"}} >
  



       </div>
       
    <Footer/>
    </div>
  )
}

export default Home

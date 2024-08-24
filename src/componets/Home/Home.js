import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import Footer from '../Footer/Footer'
function Home() {
  return (
    <><Navbar/>
            <section className="text-white" style={{ marginTop: "100px" }}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 order-2 order-lg-1">
        <h1 style={{ fontSize: "60px" }} className="">
          AMIT SINGH
        </h1>
        <p></p>
        <br></br>

        <p className="lead">
          <h2>
            <span>I</span>m<span>a Developer</span>
          </h2>
        </p>
        <p className="lead">
          <h2>
            <span>I</span>m<span>a BTech Student</span>
          </h2>
        </p>
      </div>

      {/* Image on the right */}
      <div className="col-lg-6 order-1 order-lg-2 text-center">
        <img
          src="https://www.pngkey.com/png/full/279-2795619_web-development-web-developer.png"
          alt="landing image"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  </div>
</section>

        <Footer/>

      
    </>
  )
}

export default Home
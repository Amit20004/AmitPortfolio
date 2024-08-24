import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import mypic from  '../Images/mypic.jpg'
import './About.css'
function About() {
  return (
    <>
    <Navbar/>
      <section style={{ backgroundColor: 'black' }}>
      <div className='container text-center p-5 text-white'>
        <h1 className='fs-5'>About</h1>
        <p>
        I am an intermediate full stack web developer currently in my third year of BTech. I have a strong foundation in both front-end and back-end technologies, and I am passionate about building efficient, scalable, and user-friendly web applications. My journey in web development has equipped me with the skills to tackle complex challenges and continuously improve my craft.
        </p>
      </div>
        <div className="container py-5" >
          <div className="row" >
            <div className="col" >
              <nav aria-label="breadcrumb" className="rounded-3 p-3 mb-4 navMain" style={{backgroundColor:"black"}}>
                <ol className="breadcrumb mb-0" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                  <li className="breadcrumb-item" ><Link to="/" style={{color:"#0FFF50",textDecoration:'none'}}>Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Profile</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center text-white" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                  <img
                    src={mypic}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: '150px',height:"150px",objectFit:'cover' }}
                  />
                  <h5 className="my-3">Amit Singh</h5>
                  <p className="mb-1 text-white">Full Stack Developer</p>
                  <p className="text-white mb-4">New Delhi, India </p>

                  {/* <div className="d-flex justify-content-center mb-2">
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Follow</button>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary ms-1">Message</button>
                  </div> */}

                </div>
              </div>
              <div className="card mb-4 mb-lg-0" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3 text-white" style={{backgroundColor:"black", border:'1px solid #0FFF50',color:"white"}}>
                      <i className="fa-brands fa-whatsapp fa-lg text-success"></i>
                      <p className="mb-0">WhatsApp</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"black", border:'1px solid #0FFF50',color:"white"}}>
                      <i className="fa-brands fa-github fa-lg text-white"></i>
                      <p className="mb-0">GitHub</p>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"black", border:'1px solid #0FFF50',color:"white"}}>
                      <i className="fab fa-twitter fa-lg" href="https://wa.me/8368687743" style={{ color: '#55acee' }}></i>
                      <p className="mb-0">Twitter</p>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"black", border:'1px solid #0FFF50',color:"white"}}>
                      <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                      <p className="mb-0">Instagram</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"black", border:'1px solid #0FFF50',color:"white"}}>
                      <i className="fab fa-facebook-f fa-lg text-info" style={{ color: '#3b5998' }}></i>
                      <p className="mb-0">Facebook</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3" style={{backgroundColor:"black", border:'1px solid #0FFF50',color:"white"}}>
                      <i className="fa-brands fa-linkedin-in fa-lg text-primary" style={{ color: '#3b5998' }}></i>
                      <p className="mb-0">LinkedIn</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8" >
              <div className="card mb-4" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                <div className="card-body text-white">
                  <div className="row" >
                    <div className="col-sm-3" >
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-white mb-0">Amit Singh</p>
                    </div>
                  </div>
                  <hr className='bg-white' />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-white mb-0">er.amitadhikari@gmail.com</p>
                    </div>
                  </div>
                  <hr className='bg-white' />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-white mb-0">(836) 868-7743</p>
                    </div>
                  </div>
                  <hr className='bg-white' />
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-white mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr className='bg-white' /> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-white mb-0">A-37/2 Gulab Bagh, Nawada Metro Station, New Delhi, India </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0 text-white" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                    <div className="card-body">
                      <p className="mb-4"> Project Status</p>
                      <p className="mb-1" style={{ fontSize: '.77rem' }}>HTML</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>CSS</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>JS</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>React.js</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                      <div className="progress rounded mb-2" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0 text-white" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                    <div className="card-body">
                      <p className="mb-4"> Project Status</p>
                      <p className="mb-1" style={{ fontSize: '.77rem' }}>Node.js</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>MongoDB</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Figma</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>WordPress</p>
                      <div className="progress rounded" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>SQL</p>
                      <div className="progress rounded mb-2" style={{ height: '5px' }}>
                        <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;

import React from 'react'
import './Resume.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
function Resume() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
    <div className='container text-center mb-4 text-white'>
        <h1 className='fs-6'>Resume</h1>
      </div>
      <div className="row" >
            <div className="col" >
              <nav aria-label="breadcrumb" className="rounded-3 p-3 mb-4 navMain" style={{backgroundColor:"black"}}>
                <ol className="breadcrumb mb-0" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                  <li className="breadcrumb-item" ><Link to="/" style={{color:"#0FFF50",textDecoration:'none'}}>Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Resume</li>
                </ol>
              </nav>
            </div>
          </div>
        <div className="row">
            <div className="col-md-6 mainHeading">
                <h2>Summary</h2>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Amit Singh</p>
                        <p>Motivated and deadline-driven full-stack web developer with 1+ years of experience designing and developing user-centered digital/web projects from initial concept to final, polished deliverable.</p>
                        <ul>
                            <li>New Delhi, India</li>
                            <li>+918368687743</li>
                            <li>a.s.adhikari2004@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mainHeading">
                <h2>Internship</h2>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Full Stack Developer</p>
                        <span className="date">2024 - Present</span>
                        <p>Working at Prodigy Company, New Delhi, India.</p>
                        <ul>
                            <li>Led the design, development, and implementation of web applications.</li>
                            <li>Collaborated with the team to create efficient, high-quality code.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-6 mainHeading">
                <h2>Education</h2>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Bachelor of Technology in Artificial Intelligence <br></br> & Data Science</p>
                        <span className="date">2024 - Present</span>
                        <p>Guru Tegh Bahadur Institute Of Technology, New Delhi, India.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">High School</p>
                        <span className="date">2019 - 2020</span>
                        <p>Spring Meadows Public School, New Delhi, India.</p>
                        <p>Percentage: 87%</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">High School</p>
                        <span className="date">2021 - 2022</span>
                        <p>Spring Meadows Public School, New Delhi, India.</p>
                        <p>Percentage: 88%</p>
                    </div>
                </div>
            </div>

            <div className="col-md-6 mainHeading">
                <h2>Projects</h2>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Portfolio(Responsive)</p>
                        <p>Developed a portfolio using mern stack</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Food App</p>
                        <p>Built a mern stack based food application with a user-friendly interface.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Blog Website</p>
                        <p>Built a mern stack based blog application with a user-friendly interface.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Form Data Extraction</p>
                        <p>Created a project to extract form data and save it into MongoDB using Node.js.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon">•</div>
                    <div className="timeline-content">
                        <p className="highlight">Authentication</p>
                        <p>Built a  authentication application with a user-friendly interface.</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  <Footer/>
    </>
  )
}

export default Resume
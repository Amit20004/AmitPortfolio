import React from 'react'
import { useState,useEffect } from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import { Element } from "react-scroll";
import tic from "../Images/project1.png";
import sort from "../Images/project2.png";
import crud from "../Images/project3.png";
import login from "../Images/project4.png";
import todo from "../Images/project5.png";
import calc from "../Images/project6.png";
import quote from "../Images/project7.png";
import weather from "../Images/project8.png";
import counter from "../Images/project9.png";
import food from "../Images/project10.png";
import blog from "../Images/project11.png";
function Project() {
    const projects = [
        {
          id: 1,
          title: "Tic-Tac-Toe",
          category: "mern",
          image: tic,
          description: "Interactive two-player Tic-Tac-Toe game",
        },
        {
          id: 2,
          title: "SSFP",
          category: "mern",
          image: sort,
          description: "Dynamic data table with sorting",
        },
        {
          id: 3,
          title: "Crud Operation",
          category: "mern",
          image: crud,
          description: "Full-stack CRUD application in MERN",
        },
        {
          id: 4,
          title: "Authentication",
          category: "mern",
          image: login,
          description: "Secure user authentication in MERN",
        },
        {
          id: 5,
          title: "ToDo List",
          category: "JavaScript",
          image: todo,
          description: "Task management with intuitive interface",
        },
        {
          id: 6,
          title: "Calculator",
          category: "JavaScript",
          image: calc,
          description: "Simple and efficient arithmetic calculator",
        },
        {
          id: 7,
          title: "Quotes Generator",
          category: "JavaScript",
          image: quote,
          description: "Random inspirational quote generator tool",
        },
        {
          id: 8,
          title: "Stop Watch",
          category: "JavaScript",
          image: counter,
          description: "User-friendly digital stopwatch application",
        },
        {
          id: 9,
          title: "Weather Report",
          category: "JavaScript",
          image: weather,
          description: "Real-time weather information display application",
        },
        {
          id: 10,
          title: "Food App",
          category: "mern",
          image: food,
          description: "Food app with cart functionality and user-friendly UI",
        },
        {
          id: 11,
          title: "Blog Website",
          category: "mern",
          image: blog,
          description: "Blog app with user-friendly UI",
        },
      
        // Add more projects as needed
      ];

      const [selectedCategory, setSelectedCategory] = useState("All");
      
      const handleFilterClick = (category) => {
        setSelectedCategory(category);
      };
    
      const filteredProjects =
        selectedCategory === "All"
          ? projects
          : projects.filter((project) => project.category === selectedCategory);
  return (
    <>
       <Navbar/>
       {/* <Element name="project"> */}
      {/* <Navbar/> */}

      <div className="project-main">
        <div className="project-container">
          <h2 className="project-header text-white" style={{fontFamily:'arial',letterSpacing:"0"}}>Projects</h2>
          <div className="row" >
            <div className="col" >
              <nav aria-label="breadcrumb" className="rounded-3 p-3 mb-4 navMain" style={{backgroundColor:"black"}}>
                <ol className="breadcrumb mb-0" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                  <li className="breadcrumb-item" ><Link to="/" style={{color:"#0FFF50",textDecoration:'none'}}>Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Portfolio</li>
                </ol>
              </nav>
            </div>
          </div>
          {/* Filter Menu */}
          <div className="filter-menu">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => handleFilterClick("All")}
            >
              All
            </button>
            <button
              className={selectedCategory === "mern" ? "active" : ""}
              onClick={() => handleFilterClick("mern")}
            >
              MERN
            </button>
            <button
              className={selectedCategory === "JavaScript" ? "active" : ""}
              onClick={() => handleFilterClick("JavaScript")}
            >
              JAVASCRIPT
            </button>
          </div>
          {/* Project Thumbnails */}
          <div className='container-fluid'>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-thumbnail">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3 className="project-title data">{project.title}</h3>
                  {/* <p className="project-description data">{project.description}</p> */}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    {/* </Element> */}
       <Footer/> 
    </>
  )
}

export default Project
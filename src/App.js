import './App.css';
import About from './componets/About/About';
import Home from './componets/Home/Home';
// import Navbar from './componets/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Resume from './componets/Resume/Resume';
import Contact from './componets/Contact/Contact';
import Project from './componets/Portfolio/Project';
import { useEffect, useState } from 'react';
import Loader from './componets/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay (e.g., for fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after the content is loaded
    }, 2000); // Adjust the time as needed
  }, []);


  
  return (
    <>
    {loading ? (
        <Loader />
      ) : (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/portfolio' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
      )}
    </>
  );
}

export default App;

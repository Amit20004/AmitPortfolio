import React, { useEffect, useState } from 'react'
import './Contact.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Contact() {

	const [credentials, setCredentials] = useState({
		fname: "",
		lname: "",
		email: "",
		message: ""
	});

	const handleChange = (e) => {
		// const {name, value}=event.target;
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(credentials);
		const response = axios.post("http://localhost:8005/api/contact", {
			firstName: credentials.fname,
			lastName: credentials.lname,
			email: credentials.email,
			message: credentials.message,
		})
		// if (!credentials.fname || !credentials.lname || !credentials.email || !credentials.message) {
		// 	alert("Please fill all the  fields!");
		// 	return required;    // prevent form from submitting if any field is empty.
		// }
		if (response.success = true) {
			alert("Message submitted successfully! I'll get back to you shortly.")
			setCredentials({
				fname: "",
				lname: "",
				email: "",
				message: ""
			});
			return;
		}
		else {
			alert("Failed to submit message. Please try again!");
		}
	}




	return (
		<>
	<Navbar />
			<div className="container contact mt-5">
			<div className="row" >
            <div className="col" >
              <nav aria-label="breadcrumb" className="rounded-3 p-3 mb-4 navMain" style={{backgroundColor:"black"}}>
                <ol className="breadcrumb mb-0" style={{backgroundColor:"black", border:'1px solid #0FFF50'}}>
                  <li className="breadcrumb-item" ><Link to="/" style={{color:"#0FFF50",textDecoration:'none'}}>Home</Link></li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
				<div className="row">
					<div className="col-md-3">
						<div className="contact-info">
							<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image" />
							<h2 style={{ color: "#0FFF50" }}>Contact Us</h2>
							<h4 className='text-white'>We would love to hear from you!</h4>
						</div>
					</div>
					<div className="col-md-9">
						<div className="contact-form">
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
									<div className="col-sm-10">
										<input
											type="text"
											className="form-control"
											id="fname"
											placeholder="Enter First Name"
											value={credentials.fname}
											name="fname"
											required
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
									<div className="col-sm-10">
										<input
											type="text"
											className="form-control"
											id="lname"
											placeholder="Enter Last Name"
											value={credentials.lname}
											name="lname"
											required
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="email">Email:</label>
									<div className="col-sm-10">
										<input
											type="email"
											className="form-control"
											id="email"
											placeholder="Enter email"
											value={credentials.email}
											name="email"
											required
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
									<div className="col-sm-10">
										<textarea
											className="form-control"
											rows="5"
											id="comment"
											placeholder='Enter message'
											value={credentials.message}
											name='message'
											onChange={handleChange}
											required
										></textarea>
									</div>
								</div>
								<div className="form-group">
									<div className="col-sm-offset-2 col-sm-10">
										<button type="submit" className="btn  m-1" style={{backgroundColor:"#0FFF50"}}>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Contact
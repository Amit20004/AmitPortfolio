import React from 'react';

function Footer() {
  return (
    <>
      <footer className="text-center" style={{backgroundColor:'black'}}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#3b5998' }}
              href="https://www.facebook.com/profile.php?id=100046433378744"
              role="button"
              target='_blank'

            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Twitter */}
            {/* <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#55acee' }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a> */}

            {/* Google */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#dd4b39' }}
              href="mailto:er.amitadhikari@gmail.com"
              role="button"
              target='_blank'

            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            {/* Instagram */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#ac2bac' }}
              href="https://www.instagram.com/amixtx_adhikari/"
              role="button"
              target='_blank'

            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Linkedin */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#0082ca' }}
              href="https://www.linkedin.com/in/amit-singh-441530317/"
              role="button"
              target='_blank'
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* Github */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: '#333333' }}
              href="https://github.com/Amit20004"
              target='_blank'
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
            {/* WhatsApp */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: 'green' }}
              href="https://wa.me/8368687743"
              target='_blank'
              role="button"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright: Copyright Portfolio All Rights Reserved
          <p style={{color:'#0FFF50'}}>Designed By Amit Singh</p>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
}

export default Footer;

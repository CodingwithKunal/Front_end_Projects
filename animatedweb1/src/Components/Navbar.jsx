import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom';
import React from 'react'
import { gsap } from 'gsap';


export const Navbar = () => {


  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.from(".logokunal", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease:"back.out",

    });
    timeline.from("li", {
      y: -150,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    })

  })



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand logokunal ">
                    KUNAL DEVELOPER
                  </a>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                      <Link className="nav-link active me-3 navli" aria-current="page" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active me-3 navli" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active me-3 navli" to="/services">Services</Link>
                    </li>
                   
                    <li className="nav-item">
                      <Link className="nav-link active me-3 navli " to="/contact">Contact</Link>
                    </li>
                  </ul>
                 
                </div>
              </div>
            </nav>


          </div>
        </div>
      </div>




    </>

  )
}


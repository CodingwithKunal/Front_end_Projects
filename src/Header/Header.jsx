import React, { useEffect, useState } from "react"
import './Headers.css'
import axios from "axios"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"




export const Header = () => {
  const [catee, setcatee] = useState([])
   
  const cardProduct = useSelector(state=>state.cart)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => { setcatee(res.data) })
      .catch(error => {
        //console.error(error);
      });
  }, [])
  return (

    <>
      <nav className="navbar  bg-dark-subtle">

        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"

            aria-label="Toggle navigation"

          >
            <span className="navbar-toggler-icon" />
          </button>

          <Link to="cart">
          <button data-quantity={cardProduct.cartItems.length} className="btnn-cartee" >
            <svg
              className="icon-cart"
              viewBox="0 0 24.38 30.52"
              height="30.52"
              width="24.38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>icon-cart</title>
              <path
                transform="translate(-3.62 -0.85)"
                d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
              />
            </svg>
            <span className="quantity" />
            
          </button>


          </Link>

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={2}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                By Kunal Developer
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active text-light" to="/">
                    Home
                  </Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-light" to="about">
                    About
                  </Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-light" to="contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Your Categories
                </button>
                <ul className="dropdown-menu">
                  {
                    catee.map((item, index) =>
                      <li key={index}>
                        <Link className="dropdown-item" type="button" to={{ pathname: '/', search: `cate_name=${item}` }} style={{ textTransform: "capitalize" }}>
                          {item}
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </div>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>


        </div>
      </nav>


    </>


  )
}

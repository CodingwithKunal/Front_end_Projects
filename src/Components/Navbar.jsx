import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const cartItems  = useSelector((state)=>state.user)

  const totalQuantity = cartItems.length
  return (
    <>
    
      <nav className="nav d-flex justify-content-between mt-4  p-1  bg-secondary ">
      
        <Link className="nav-link active text-white ms-5 fs-3" aria-current="page" to="/">
          Products
        </Link>
       
        <Link className="ri-shopping-cart-line fs-3 text-white me-5 mt-2 fw-light text-decoration-none" to="/cartpage">{totalQuantity} </Link>
       
        
      </nav>
     


    </>
  )
}

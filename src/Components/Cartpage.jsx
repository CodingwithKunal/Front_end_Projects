import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import Cartproduct from './Cartproduct'
import { decreamproduct, deletproduct, incremproduct, removeproduct } from '../Store/Slices/Userslice'




export default function Cartpage() {
  const cartproducts = useSelector((state) => state.user)   // Get the cart products from Redux..
  const handle_dispatch = useDispatch();

  const handle_decrea = (id) => {
    handle_dispatch(decreamproduct(id)) // Dispatch decrement action
  }

  const handle_increa = (id) => {
    handle_dispatch(incremproduct(id)) // Dispatch Increment action
  }

  const handle_remove = (id) => {
    handle_dispatch(removeproduct(id))  // Dispatch Remove action
  }

  const  handle_delet = (id) =>{
    handle_dispatch(deletproduct(id)) // Dispatch Delet all Carts action
  }


    // Calculate total items and price
    const totalItems = cartproducts.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartproducts.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  return (
    <div className="container">
      <h2 className='text-center mt-4 fw-bolder '>Welecom Your Cart Page </h2>

      <div className="row">
        <div className="col-lg-12 mb-4">
          {cartproducts.length === 0 ? (

            <div className="text-center">
              <p>🛒 Your cart is currently empty. Start shopping now!</p>
              <Link to="/" className="btn btn-primary mt-3">Go to Shopping</Link>
            </div>

          ) : (
            cartproducts.map((p) => (
              <Cartproduct key={p.id} items={p}

                handle_decrea={handle_decrea}
                handle_increa={handle_increa}
                handle_remove={handle_remove}
              />

            ))
          )}
             
        </div>
        {cartproducts.length>0 &&(
          <div className='d-flex justify-content-end '>
            <button className='btn btn-outline-danger p-2 px-5 me-0 mb-3' onClick={()=>handle_delet()}>Delet All Items</button>
            </div>

        )}

        {cartproducts.length > 0 && (
          <div className="text-end">
            <h4>Total Items: {totalItems}</h4>
            <h4>Total Price: ${totalPrice}</h4>
            <button className="btn btn-success m-3 py-3  mb-4 me-0">Proceed to Checkout</button>
          </div>
        )}
      </div>



    </div>
  )
}

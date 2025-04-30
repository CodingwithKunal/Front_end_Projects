import React from 'react'

export default function Cartproduct({items,handle_decrea,handle_increa,handle_remove}) {
  
  return (
    <>
         <div className="card p-3 m-2 d-flex flex-row align-items-center justify-content-between">
                <img
                    src={items.image}
                    alt={items.category}
                    className="img-fluid"
                    style={{ width: '80px', height: '80px', backgroundImage:"cover", backgroundPosition:"center" }}
                />
                <div className="flex-grow-1 px-3">
                    <h5>{items.title}</h5>
                    <p>${items.price}</p>
                </div>
                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary me-2" onClick={()=>handle_decrea(items.id)}>-</button>
                    <span>{items.quantity}</span>
                    <button className="btn btn-outline-secondary ms-2" onClick={()=>handle_increa(items.id)}>+</button>
                </div>
                <button className="btn btn-danger ms-3" onClick={()=>handle_remove(items.id)}>🗑️</button>
            </div>
   
    </>
  )
}

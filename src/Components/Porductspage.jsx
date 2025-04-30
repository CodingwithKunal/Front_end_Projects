import React, { useEffect, useState } from 'react'
import {  useDispatch } from 'react-redux'
import { addproduct } from '../Store/Slices/Userslice'
import toast, { Toaster } from 'react-hot-toast';

export default function Porductspage() {
    const datadispatch = useDispatch()
    const  add_data = (payload)=>{
        datadispatch(addproduct(payload))
        toast("Product added to cart!", {
            icon: "🛒",
            style: {
                borderRadius: '8px',
                background: '#fffbe6',
                color: '#333',
                border: '1px solid #facc15'
            }
        });
    }
  
    const [product,setproduct] = useState([])
    const productapi = async () => {
        try {
            const rec = await fetch("https://fakestoreapi.com/products")
            const data = await rec.json();
            // console.log(data)
            setproduct(data)


        } catch (err) {
            console.log("Failed to load products:" + err)

        }
    }

    useEffect(() => {
        productapi()
    }, [])
    
    return (
        <>
          <Toaster/>
            <div className="container">
                <div className="row g-4 mt-4">
                {product.map((pro,id)=>(
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                            <div className="card h-100 d-flex flex-column">
                                {/* Image with fixed height and centered */}
                                <img
                                    src={pro.image}
                                    className="card-img-top w-100 p-4"
                                    alt={pro.category}
                                    style={{ height: "200px", backgroundPosition: "center", backgroundSize: "cover" }} // Ensure image is a fixed size
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{pro.title}</h5>
                                    {/* <p className="card-text" style={{fontSize:"10px"}}>{pro.description} </p> */}
                                    <p className="card-text mt-3">Price: ${pro.price}</p>
                                    {/* Here we dispatch the pro to cart icon to handle add cart*/}
                                    <button className="btn btn-primary mt-auto" onClick={() =>add_data(pro)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>  
                ))}

                </div>
            </div>
            
        </>
    )
}

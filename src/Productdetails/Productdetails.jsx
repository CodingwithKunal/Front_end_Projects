

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Productdetails.css'
import ReactImageMagnify from 'react-image-magnify';
import { addToCard } from '../Store/Slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';




export const Productdetails = () => {
    const { id } = useParams()
    const dispactdata = useDispatch()
    const [state, setstate] = useState({

        title: '',
        price: '',
        category: '',
        description: '',
        image: ''
    })


    //alert (id)
    //console.log(id)
    useEffect(() => {

        window.scrollTo(0, 10);//this is Window auto Scroller  from google in w3schoolwesit javascript library...
        axios.get('https://fakestoreapi.com/products/' + id)
            .then((res) => {
                console.log(res)
                setstate(res.data)
            })
    }, [])

    const addToCardData=(item)=>{
         dispactdata(addToCard(item))
         toast.success('Cart Add Sucessfully !');

    }


    return (
        <>
        <Toaster/>
            <h2 style={{marginTop:"30px",textAlign:"center"}}> About Products Details </h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3" style={{ width: "90%", height: 'auto' }}>
                            <div className="row g-0">
                                <div className="col-md-5" >
                                  {/*<img src={state.image} alt="" className=" imagesspro procard img-fluid rounded-start"/>*/}
                                    <ReactImageMagnify {...{  
                                        smallImage: {
                                            src: state.image,
                                            width:400,
                                            height:462
                                           
                                        },
                                        largeImage: {
                                            src: state.image,
                                            width: 900,
                                            height: 1100
                                        }
                                    }}  />

                                </div>
                                <div className="col-md-4" style={{marginRight:""}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{state.title}</h5>
                                        <p className="card-text" style={{ justifyContent: "center" }}>
                                            {state.description}
                                        </p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">  Price:${state.price}</small>
                                        </p>
                                        <div className="btn btn-info text-white" onClick={()=>{addToCardData(state)}} > Add to Card</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

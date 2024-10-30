import React, { useEffect, useState } from 'react'
import { Slider } from './Slider'
import './Home.css';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addToCard } from '../Store/Slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';




export const Home = () => {
  const [store, setstore] = useState([])
  const [cate, setcate] = useState([])


  const [searchParams] = useSearchParams();
  const query = searchParams.get("cate_name"); // we use here Query 
  const _usenavigatehere = useNavigate();
  const dispatch = useDispatch();
  //alert(query)



  const getallproducts = () => {
    axios.get("https://fakestoreapi.com/products") //We get all products from Fake store Api in my Home page
      .then((res) => { setstore(res.data) })
  }


  const getallcategory = () => {
    axios.get('https://fakestoreapi.com/products/categories') 
      .then((res) => { setcate(res.data) })
  }




  const getdatabycategoryname = (cate_name) => {
    //alert(cate_name);
    axios.get('https://fakestoreapi.com/products/category/' + cate_name)
      .then((res) => {
        // console.log(res.data)
        setstore(res.data)
      })

  }




  useEffect(() => {
    // getallproducts();
    //getallcategory();
    
    if (query != null) {
      getallproducts();
      getallcategory();
      getdatabycategoryname(query);

    }
    else {

      getallproducts();
      getallcategory();
    }



  }, [query])




  const addtocard = (item) => {
    // alert(data)
    dispatch(addToCard(item))
    toast.success('Cart Add Sucessfully !');


  }
  const getdata = (id) => {
    // alert(id)
    _usenavigatehere(`product-details/${id}`); // This function jump on specific Page with productDetails by using Nevigate Function 
  }



  return (
    <>
      <Toaster/>
        <Slider />
        <div className="container-fluid">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div className="input">

                  {
                    cate.map((item, index) =>
                      <div key={index}>
                        <button className="value" style={{ textTransform: "capitalize" }}>
                          <a onClick={() => { getdatabycategoryname(item) }} style={{ textDecoration: "none", color: 'white' }}>{item}</a>
                        </button>
                      </div>

                    )
                  }

                </div>
              </div>





              {
                store.map((item, index) =>

                  <div className="col-md-3" key={index} >
                    <div className="card" >
                      <div className="card-img" >
                        <img src={item.image} alt="" className='imgaess' />
                      </div>
                      <div className="card-info">
                        <p className="text-title">{item.title} </p>
                        <p className="text-body"></p>
                      </div>
                      <div className="card-footer">
                        <span className="text-title"> ${item.price}</span>
                        <div className="card-button">
                          <svg className="svgscards svg-icon" viewBox="0 0 20 20" onClick={() => { addtocard(item) }} >
                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z" />
                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z" />
                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className='svgscards' viewBox="0 0 576 512" onClick={() => {getdata(item.id)}}>
                            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>


                        </div>
                      </div>
                    </div>
                  </div>

                )
              }
            </div>
          </div>
        </div>
      
    </>
  )
}



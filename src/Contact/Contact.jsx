import React, { useEffect, useState } from 'react'
import './Contact.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';



export const Contact = () => {
  const [state, setstate] = useState({
    name: "",
    phone: "",
    email: ""
  });



        
    const handler=(e)=>{
      setstate({...state,[e.target.name]: e.target.value})
     // e.target.reset();

    }
    
    const contactpage =(e)=>{
      e.preventDefault();
      console.log(state);
      setstate({
        name:"",
        phone:"",
        email:""
      });

      axios.post("http://localhost:3004/Contact",state)
      .then((res)=>{
        console.log(res)
      })
     
     toast.success("Thank For Your submition!")
      
    };

  return (
    <>
    <Toaster/>
      <h2> Contact Us </h2>
      <div className="cardcontact">
        <form action="" method='post' onSubmit={contactpage} >
          <div className="input-container">
            <input placeholder="Enter FullName" className="input-field" type="text" name='name' required = "" autoComplete='off' minLength="3"   onChange={handler} value={state.name} />
            <label htmlFor="input-field" className="input-label">
              FullName
            </label>
            <span className="input-highlight"/>
          </div>

          <div className="input-container">
            <input placeholder="Enter Phone.no" className="input-field" type="text" name='phone' required = "" autoComplete='off' onChange={handler} value={state.phone} />
            <label htmlFor="input-field" className="input-label">
              Phone.No
            </label>
            <span className="input-highlight"/>
          </div>

          <div className="input-container">
            <input placeholder="Enter Email" className="input-field" type="email" name='email' required = "" autoComplete='off' onChange={handler} value={state.email} />
            <label htmlFor="input-field" className="input-label">
              Email
            </label>
            <span className="input-highlight"/>
          </div>
          <button className="btns" type='submit'>Submite</button>
        </form>
      </div>
      
    </>
  )
}

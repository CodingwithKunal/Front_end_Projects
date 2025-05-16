import React from 'react'
import Navbar from './Navbar'
import "./style.css"
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'



const Home = () => {
  useGSAP(()=>{
    const tm = gsap.timeline()
    tm.from("h1",{
      duration: 1,
      opacity:0,
      y: 100,
      scale:0.3,
      ease:"sine"
      
    })

    tm.from("#imag1",{
       opacity:0,
       duration:1,
       x:-150,
        
    })
    tm.from("#imag2",{
      opacity:0,
      y:-150,
      duration:1,
      ease:"bounce"

    })
    tm.from("#imag3",{
      opacity:0,
      duration:1,
      x:150,
      ease:"back.out"
    })
  })

  
  return (
   <>
   
   <Navbar/>
   <div className="container">
    <h1> Digital Performance Solutions</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-j6AzIJsYwnzVdfXkjEDQHFV7H6VXupxYw&s" alt="" id='imag1'/>
    <img src="https://blog.businessdecision.com/wp-content/uploads/2020/09/experience-client-performance-835x400-1.jpg" alt="" id='imag2'/>
    <img src="https://orquesta.agency/wp-content/uploads/2022/11/mrketing-y-tecnologia.jpg" alt="" id='imag3' />
   </div>
   
   </>
  )
}

export default Home

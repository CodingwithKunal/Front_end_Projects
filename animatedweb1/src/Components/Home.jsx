import React from 'react'
import './style.css';
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { Link } from 'react-router-dom';





export const Home = () => {
  
  useGSAP(()=>{
    const splitwords = SplitType.create("strong",{type:"chars"});
    const tl = gsap.timeline();
    
    tl.from(splitwords.chars,{
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 2.5,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    })
    tl.from("h3",{
      x:100,
      opacity:0,
      duration: 1,
      ease:"slow",
    })

  })


  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6  pt-lg-0  order-2 order-lg-1  d-flex justify-content-center flex-column">  {/*I order-2 = means for compuerter screen and order-lg-1= means for mobile screen  */}
                  <h1>Grow your Business with<strong className='text-primary-emphasis'>Kunal Developer</strong></h1>{/* mt-5 = means margin top 5 */}
                  <h3 className='my-3'>We are the team of talented developer making websites</h3>
                  <div className='mt-3 my-3'> <Link to="/services" className="btn-started">Get Started</Link></div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2   image-header  text-center ">
                  <img src="public/images/imag1.webp" alt="" className='img-fluid custom-image'/>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
      </section>

    </>
  )
}

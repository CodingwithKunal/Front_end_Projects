import { useGSAP } from '@gsap/react'
import React from 'react'
import { Link } from 'react-router-dom'
import SplitType from 'split-type';
import { gsap } from 'gsap';



export const About = () => {
  useGSAP(() => {
    const splitwords = SplitType.create(".col-md-6", { types: 'chars' });
    gsap.from(splitwords.chars, {
      y: 60,
      opacity: 0,
      duration: 0.2,
      delay: 1.4,
      stagger: 0.1,
      ease: 'back.in(0.5)',

    })
  })
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6  pt-lg-0  order-2 order-lg-1  d-flex justify-content-center flex-column">{/*I order-2 = means for compuerter screen and order-lg-1= means for mobile screen  */}
                  <h1 >Welcome to About Page<strong className='text-primary-emphasis '>Kunal Developer</strong></h1>{/* mt-5 = means margin top 5 */}
                  <h3 className='my-3' style={{ color: "#484848" }}>We are the team of talented developer making websites while use many Technologies</h3>
                  <div className='mt-3'> <Link to="/contact" className="btn-started">Contact Now</Link></div>
                </div>


                <div className="col-lg-6 order-1 order-lg-2   image-header  text-center">
                  <img src="public/images/imag3.avif" alt="" className='img-fluid custom-image' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

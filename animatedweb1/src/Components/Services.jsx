import React from 'react'
import { Cards } from './Cards'
import Servicesdata from './Servicesdata'


export const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center text-info'>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12  max-auto">
            <div className="row  gy-4">
              {
                Servicesdata.map((item,index) => {
                  return <Cards
                    key={index}
                    imgsrc={item.imagsrc}
                    title={item.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

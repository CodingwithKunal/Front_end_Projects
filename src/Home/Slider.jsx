import React from 'react'
import './Slider.css'

export const Slider = () => {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className=" carousel-item active">
                        <img src="/public/Photos/background img2.jpg" className="d-block w-100 imagees" alt="..." />
                    </div>
                    <div className=" carousel-item">
                        <img src="/public/Photos/girl3.avif" className="d-block w-100 imagees" alt="..." />
                    </div>
                    <div className=" carousel-item">
                        <img src="/public/Photos/girl4.avif" className="d-block w-100 imagees" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev " style={{backgroundColor:"transparent"}}
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"  style={{backgroundColor:"transparent"}}
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

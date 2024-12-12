import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css';


export const Cards = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <Link to="#" className="btn btn-primary">
                            Check</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

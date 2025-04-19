import React from 'react'

const Card = ({ Movie_card: { title, release_date, poster_path } }) => {
  return (
    <>
      <div className="card   mt-5 m-auto " style={{ width: "15rem", }}>
        {/* <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} className="card-img-top" alt={title} /> */}
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            className="card-img-top"
            alt={title}
          />
        ) : (
          <div className="card-img-top text-center text-muted " style={{ height: '300px', lineHeight: '300px' }}>
            No Image Found Sorry !!
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Releas Date :{release_date}
          </p>

        </div>
      </div>

    </>
  )
}

export default Card

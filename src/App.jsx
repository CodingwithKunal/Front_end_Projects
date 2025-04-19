import React, { useEffect, useState } from 'react'
import './App.css';
import Card from './Component/Card';

// Movie key : d29ff481 


const API_KEY = 'a20995334d733b96bfbf2d4085430493';  // TMDB API key
// const Movie_card = {

//   "adult": false,
//   "backdrop_path": "/mQZ0jXbTfY4RAfPPp3iuH6vtKcX.jpg",
//   "genre_ids": [
//     10770,
//     28,
//     53
//   ],
//   "id": 47369,
//   "original_language": "en",
//   "original_title": "Avenger",
//   "overview": "After his own daughter was killed in Panama in 1994, former CIA agent Calvin Dexter became a private 'specialist' in cases which wouldn't reach justice trough the regular legal channels. Two years later he accepts to find Richard 'Ricky' Edmunds for his pa, influential rich businessman Stephen Edmonds. Ricky for a private Canadian war victims charity in Bosnia and went missing. Dexter discovers Ricky was beaten to pulp and drowned for no other crime then helping street boys from the other side by Zoran Zilic and his Serbian paramilitary 'order'. He offers Steven to 'finish the job' as such war criminals don't go to trial. But deputy CIA director Paul Devereaux cares only for a nuclear arms project he wants to use Zilic for. So CIA troubleshooter Frank McBride is ordered to protect him and handle Dexter.",
//   "popularity": 0.5775,
//   "poster_path": "/cEI5aazuAVJ3PcWeNM8gxYiNjmq.jpg",
//   "release_date": "2006-04-09",
//   "title": "Avenger",
//   "video": false,
//   "vote_average": 6,
//   "vote_count": 36
// }

const App = () => {
  
  const [movie, setmovie] = useState([]);
  const [findmovie,setfindmovie] = useState("");



 
    const searchMovies = async (query) => {
      if (!query.trim()) return; // avoid empty search
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  
      const res = await fetch(url);
      const data = await res.json();
      setmovie(data.results);
      setfindmovie("")
    };
 
  

  useEffect(() => {
    setTimeout(()=>{
      searchMovies("avenger");  //Optional: Initial load (default search like "avenger")
    },3000)
    
  }, []);
  return (
    <>
      <div className="container ">
        <h1 className='m-4 text-white text-center'> Movies Buket</h1>
        
        <div className="form-floating   col-6 mt-0  m-auto" >
          <input type="text" className="form-control col-sm-4  col-md-6 col-lg-6 col-xl-5  " id="floatingInput" placeholder="name@example.com" value={findmovie} onChange={(e) =>setfindmovie(e.target.value)} alt='search' />
          <i
            className="ri-search-line position-absolute "
            onClick={() =>searchMovies(findmovie)}
          ></i>
          <label htmlFor="floatingInput">Search for Movies</label>
        </div>
       

        {movie?.length > 0 ? (
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4 ">

            {movie.map((Movie_card) => (
              <Card Movie_card={Movie_card}  key={Movie_card.id}/>
            ))}

          </div>
        ) : (
          <div className="empty">
            <h1 className='text-white text-center fs-50 m-5'>No Movies Found !!</h1>
          </div>
        )

        }

      </div>
    </>
  )
}

export default App


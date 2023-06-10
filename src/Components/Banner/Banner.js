import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { apiKey,imageUrl} from '../../Constants/constants'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  

 
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response) => {
      console.log(response.data.results[0]);
      let randomIndex = Math.floor(Math.random() * response.data.results.length);
      let randomMovie = response.data.results[randomIndex];
  
      setMovie(randomMovie);
    });
  }, []);
  
  
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ''})`}}
     className='banner'>
        <div className='contents'>
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie? movie.overview :''}</h1>
        </div>
        <div className="fade">
          
        </div>
      
    </div>
  )
}

export default Banner

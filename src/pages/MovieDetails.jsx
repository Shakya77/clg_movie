import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movieData, setMovieData]= useState([])
    const {id}= useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const getMoviesDetails = async()=>{
       const data = await fetch(url, {
          method: "GET",
          headers:{
            accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTYzMGZlOTkzNzM1NGNmYjM3MjhjMjI5NDhmOWE0MyIsIm5iZiI6MTc0MzUxMTM3OC43MTgwMDAyLCJzdWIiOiI2N2ViZGY1MjU4ZTBhYTIzMzhmYjEwMjgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3-eh4jUswnQR6RwsBMo6QvFKYQH98sGxeMzLem_OK64'

          }
        }).then(res=>res.json()).then(item=>item)
        setMovieData(data);
      }
    
      // console.log(movieData,"mm");
    const isFetching= true;
    
      useEffect(()=>{
        getMoviesDetails()
      },[isFetching])



  return (
    <div className='bg-gray-500 p-8'>
        <img src={`https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}`} style={{height:"300px", width: "100%"}}/>
        <h1 className='p-4 '>{movieData.title}</h1>
        <p className='bg-red-200 p-4'>{movieData.overview}</p>
    </div>
  )
}

export default MovieDetails
import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
const Card = ({content, title, genre, imgSrc, id, addFavourite}) => {
  return (
    <div className='bg-gray-800  text-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105'>
        <img src={imgSrc} className='w-full h-70 object-cover'>
        </img>
        <div className='p-4 h-38 overflow-hidden'>

        <h2 className='text-xl font-bold '>{title}</h2>
        <h5 className='text-sm text-gray-400 mb-2'>{genre}</h5>
        <p className='text-sm text-gray-100'>{content}</p>
        </div>
        <div className='flex justify-between p-4' >

        <Link to={`/movie-details/${id}`}><button  >Details...</button></Link>
        
        <button onClick={addFavourite} >💗</button>
        </div>
        </div>
  )
}

export default Card
import React from 'react'
import { useSelector } from 'react-redux'
import SingleCard from '../components/SingleCard';

const MovieList = () => {
    const movieData = useSelector(p=>p.movie);
    
  return (
    <div className='container'>
        <h1 className='text-center alert alert-warning text-dark my-3'>Movies</h1>
        <div className="row g-4">
            {movieData.map(item=>(
                <SingleCard  alldata={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default MovieList
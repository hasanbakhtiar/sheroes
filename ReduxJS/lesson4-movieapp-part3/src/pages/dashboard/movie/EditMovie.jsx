import React from 'react'
import FormMovie from '../FormMovie'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import slugify from 'slugify';
import {  movieEditToDatabase_Action } from '../../../tools/actions/movieAction';

const EditMovie = () => {
    const {slug} = useParams();
    const movie = useSelector(p=>p.movie);
    const filterMovie = movie.find(p=>slugify(p.title) === slug)
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
        <h1 className='alert alert-warning my-5 text-center'>Edit Movie</h1>
        <FormMovie editdata = {filterMovie} sendData={fd=>{
            dispatch(movieEditToDatabase_Action(filterMovie.id,fd))
            navigate('/dashboard');
        }}/>
    </div>
  )
}

export default EditMovie
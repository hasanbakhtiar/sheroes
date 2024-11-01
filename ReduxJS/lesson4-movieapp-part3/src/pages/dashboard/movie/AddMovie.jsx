import React from 'react'
import FormMovie from '../FormMovie'
import { useDispatch } from 'react-redux'
import {  movieAddToDatabase_Action,  } from '../../../tools/actions/movieAction';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
            <h1 className='alert alert-dark my-5 text-center'>Add Movie</h1>
            <FormMovie sendData={fd=>{
                dispatch(movieAddToDatabase_Action(fd));
                navigate('/dashboard');
            }} />
    </div>
  )
}

export default AddMovie
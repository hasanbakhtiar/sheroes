import React, { useContext, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../context/CategoryContext';
import axios from 'axios';

const EditList = () => {
  const {id} = useParams();
  const [data] = useContext(CategoryContext);
  const singleData = data.find(p=>p._id===id);
  
  const titleRef = useRef();
  const editData=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3010/ad/category/${singleData._id}`,{
      "titleAz": titleRef.current.value
  },{
      headers: {
          "matrix-access": "3fa3afc2aa0e5e2c1c17ee83f4c8fc76"
      }
  })
    .then(success=>console.log(success))
    .catch(error=>console.log(error))
  }
  return (
    <div>
      <form onSubmit={editData}>
      <input ref={titleRef} type="text" defaultValue={singleData&&singleData.titleAz} />
      <button type='submit'>send</button>
        
      </form>
      
    </div>
  )
}

export default EditList
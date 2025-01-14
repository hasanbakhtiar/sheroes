import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BaseUrlContext from '../context/BaseUrlContext';

const ProductDetails = () => {
  const {id} = useParams();
  const [baseUrl,header] = useContext(BaseUrlContext);
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(`${baseUrl}/product/${id}`,header)
    .then(res=>console.log(res))
  },[])
  
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import BaseUrlContext from '../context/BaseUrlContext';

const Category = ({sendData}) => {
    const [data, setData] = useState([]);
    const [baseUrl,header] =useContext(BaseUrlContext);
  useEffect(() => {
    axios.get(`${baseUrl}/category`, header)
      .then(res => setData(res.data))
  }, [])

  const sendCatId = (id)=>{
    sendData(id);
    
  }
  return (
    <ListGroup>
        <ListGroup.Item onClick={()=>{sendCatId("")}}>All</ListGroup.Item>

        {data.map(item=>(
            <ListGroup.Item onClick={()=>{sendCatId(item._id)}} key={item._id}>{item.title}</ListGroup.Item>
        ))}
  </ListGroup>
  )
}

export default Category
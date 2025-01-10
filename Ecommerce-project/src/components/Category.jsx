import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'

const Category = ({sendData}) => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://matrixacademylessonapi.webluna.org/category', {
      headers: {
        "lesson-access": "bd859cade3ac0dd3165f793b641e40cd"
      }
    })
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
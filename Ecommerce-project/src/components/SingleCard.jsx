import axios from 'axios'
import React, { useContext } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BaseUrlContext from '../context/BaseUrlContext'

const SingleCard = ({alldata}) => {
  const [baseUrl,header] =useContext(BaseUrlContext);


  const sendBasket = (items)=>{
      axios.post(`${baseUrl}/basket`,{
      user:"67ab39a9fdf3de011fc6eb51",
      products:[{
        product:items._id,
        quantity:1,
        price:items.price
      }],
      totalPrice:300
      }, header)
      .then(res=>console.log(res))
      
      
  }
  
  
  return (
    <Col sm={12} md={4}>
      <Card>
        <Card.Img variant="top" src={alldata.img} />
        <Card.Body>
          <Card.Title>{alldata.title}</Card.Title>
          <Card.Subtitle>{alldata.price}</Card.Subtitle>
          <Link to={`/product/${alldata.id}`} variant="warning me-2">Details</Link>
          <Button variant="dark" onClick={()=>{sendBasket(alldata)}}>Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCard
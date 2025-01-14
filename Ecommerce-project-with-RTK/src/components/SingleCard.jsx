import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const SingleCard = ({img,title,price}) => {
  return (
    <Col sm={12} md={4}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{price}</Card.Subtitle>
          <Button variant="warning me-2">Details</Button>
          <Button variant="dark">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCard
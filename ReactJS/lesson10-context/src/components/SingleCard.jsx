import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleCard = ({alldata}) => {
    return (
        <Col sm={6} md={4}>
            <Card>
                <Card.Img style={{objectFit:"contain"}} height={300} variant="top" src={alldata.image} />
                <Card.Body>
                    <Card.Title>{alldata.title.slice(0,20)}</Card.Title>
                    <Card.Subtitle className='text-danger my-3 '>
                        ${alldata.price}
                    </Card.Subtitle>
                    <Card.Text>
                    {alldata.description.slice(0,20)}...
                    </Card.Text>
                    <Link className='btn btn-dark' to={`/product/${alldata.id}`}>Read more</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard
import React, { useContext } from 'react'
import {  Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { LangContext } from '../context/LangContext'


const SingleCard = ({alldata}) => {
    const [lang] = useContext(LangContext); 
    return (
        <Col sm={6} md={4}>
            <Card>
                <Card.Img style={{objectFit:"contain"}} height={300} variant="top" src={alldata.image} />
                <Card.Body>
                    <Card.Title>{alldata.title.slice(0,20)}</Card.Title>
                    <Card.Subtitle className='text-danger my-3 '>
                        {lang==="AZ"?`${(alldata.price*1.7).toFixed()}AZN`:`$${(alldata.price).toFixed()}`}{}
                    </Card.Subtitle>
                    <Card.Text>
                    {alldata.description.slice(0,20)}...
                    </Card.Text>
                    <Link className='btn btn-dark' to={`/product/${slugify(alldata.title,{lower: true})}`}>Read more</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard
import React, { useContext, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { ProductContext } from '../context/ProductContext'


const Product = () => {
    const [product] = useContext(ProductContext)
    return (
        <Container>
            <h1 className='text-center my-5'>Product List</h1>
            <Row className='g-5'>
                {product.map(item=>(
                    <SingleCard key={item.id} alldata={item} />

                ))}
            </Row>
        </Container>
    )
}

export default Product
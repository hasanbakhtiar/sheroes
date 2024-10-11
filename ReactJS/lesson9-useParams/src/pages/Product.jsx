import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import axios from 'axios';

const Product = () => {
    const [product,setProduct] = useState([]);  
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProduct(res.data));
    },[])
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
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { ProductContext } from '../context/ProductContext'


const Product = () => {
    const [product] = useContext(ProductContext);
    const [filtered,setFiltered] = useState([]);
    const selectCategorie=(cat)=>{
        const filteredProduct = product.filter(p=>p.category === cat);
        setFiltered(filteredProduct);
        
        
    }
    return (
        <Container>
            <h1 className='text-center my-5'>Product List</h1>
            <Row>
                <Col sm={12} md={3}>
                    <ul className="list-group">
                        <li className="list-group-item" onClick={()=>{selectCategorie("electronics")}}>electronics</li>
                        <li className="list-group-item" onClick={()=>{selectCategorie("jewelery")}}>jewelery</li>
                        <li className="list-group-item" onClick={()=>{selectCategorie("men's clothing")}}>men's clothing</li>
                        <li className="list-group-item" onClick={()=>{selectCategorie("women's clothing")}}>women's clothing</li>
                    </ul>
                </Col>
                <Col sm={12} md={9}>
                    <Row className='g-5'>
                        {filtered.length === 0 ?product.map(item => (
                            <SingleCard key={item.id} alldata={item} />

                        )):
                        filtered.map(item => (
                            <SingleCard key={item.id} alldata={item} />

                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Product
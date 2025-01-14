import React, {useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import Category from '../components/Category';
import Preloader from '../components/Preloader';
import { useGetProductByCatQuery, useGetProductQuery } from '../tools/services/ecommerce';

const Product = () => {
  const [catId,setCatId] = useState("677aed6c025b1b5917e66f88");
  const filterData = (id) => {
    setCatId(id);
  }
  const {data:productByCategory,isLoading,isError} = useGetProductByCatQuery(catId);
  const {data:product} =useGetProductQuery();
  

  return (
    <>
      {isLoading? <Preloader /> : <>
        <p className='h1 text-center my-5'>Products</p>
        <Row>
          <Col sm={12} md={3}>
            <Category sendData={filterData} />
          </Col>
          <Col sm={12} md={9}>
            <Row className='g-4'>
              {!catId?product.map(item => (
                <SingleCard key={item._id} title={item.title} price={item.price} img={item.coverImage} />
              )):productByCategory.map(item => (
                <SingleCard key={item._id} title={item.title} price={item.price} img={item.coverImage} />
              ))}
            </Row>
          </Col>
        </Row>
      </>}

    </>
  )
}

export default Product
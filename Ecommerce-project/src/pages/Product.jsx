import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import axios from 'axios';
import Category from '../components/Category';
import Preloader from '../components/Preloader';
import BaseUrlContext from '../context/BaseUrlContext';

const Product = () => {
  const [data, setData] = useState([]);
  const [baseUrl,header] =useContext(BaseUrlContext);
  useEffect(() => {
    axios.get(`${baseUrl}/product`, header)
      .then(res => setData(res.data))
  }, [])

  const filterData = (catId) => {
    if (!catId) {
      axios.get(`${baseUrl}/product`, header)
        .then(res => setData(res.data))
    }
    axios.get(`${baseUrl}/product/cat/${catId}`, header)
      .then(res => setData(res.data))

  }


  

  return (
    <>
      {data.length === 0 ? <Preloader /> : <>
        <p className='h1 text-center my-5'>Products</p>
        <Row>
          <Col sm={12} md={3}>
            <Category sendData={filterData} />
          </Col>
          <Col sm={12} md={9}>
            <Row className='g-4'>
              {data.map(item => (
                <SingleCard alldata={item} />
              ))}
            </Row>
          </Col>
        </Row>
      </>}

    </>
  )
}

export default Product
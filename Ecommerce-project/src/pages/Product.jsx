import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import axios from 'axios';
import Category from '../components/Category';
import Preloader from '../components/Preloader';

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://matrixacademylessonapi.webluna.org/product', {
      headers: {
        "lesson-access": "bd859cade3ac0dd3165f793b641e40cd"
      }
    })
      .then(res => setData(res.data))
  }, [])

  const filterData = (catId) => {
    if (!catId) {
      axios.get('https://matrixacademylessonapi.webluna.org/product', {
        headers: {
          "lesson-access": "bd859cade3ac0dd3165f793b641e40cd"
        }
      })
        .then(res => setData(res.data))
    }
    axios.get(`https://matrixacademylessonapi.webluna.org/product/cat/${catId}`, {
      headers: {
        "lesson-access": "bd859cade3ac0dd3165f793b641e40cd"
      }
    })
      .then(res => setData(res.data))

  }


  const paginationData=()=>{
    axios.get(`https://matrixacademylessonapi.webluna.org/product/pag?page=2&limit=2`, {
      headers: {
        "lesson-access": "bd859cade3ac0dd3165f793b641e40cd"
      }
    })
      .then(res => console.log(res.data))
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
                <SingleCard key={item._id} title={item.title} price={item.price} img={item.coverImage} />
              ))}
            </Row>
          </Col>
        </Row>
      </>}

      <button onClick={()=>{paginationData()}}>pagination</button>
    </>
  )
}

export default Product
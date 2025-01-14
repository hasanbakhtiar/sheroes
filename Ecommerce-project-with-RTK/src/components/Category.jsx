import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useGetCategoryQuery } from '../tools/services/ecommerce';
import Preloader from './Preloader';

const Category = ({ sendData }) => {

  const { data, isLoading } = useGetCategoryQuery();

  const sendCatId = (id) => {
    sendData(id);
  }

  return (
    <>{isLoading ? <Preloader /> : <ListGroup>
      <ListGroup.Item onClick={() => { sendCatId("") }}>All</ListGroup.Item>

      {data.map(item => (
        <ListGroup.Item onClick={() => { sendCatId(item._id) }} key={item._id}>{item.title}</ListGroup.Item>
      ))}
    </ListGroup>}</>

  )
}

export default Category
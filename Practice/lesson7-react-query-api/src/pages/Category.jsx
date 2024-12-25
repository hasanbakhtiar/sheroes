import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { EndPointContext } from '../context/EndPointContext';

const Category = () => {
const [endPoint, header] = useContext(EndPointContext);
  const fetchData = useQuery('category', () => {
    return axios.get(`${endPoint}/category`,header)
      .then(res => res.data)
  })
  const { data, isLoading, refetch } = fetchData;
console.log(data);

  if (isLoading) {
    return <div>Loading...</div>
  }


  return (
    <>
      <div>Products</div>
      <ul>
        <button onClick={()=>{refetch()}}>refecth</button>
        {data.map(item => (
          <li key={item._id}>{item.titleAz}</li>
        ))}
      </ul>
    </>
  )
}

export default Category
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const Products = () => {

  const fetchData = useQuery('products', () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data)
  })
  const { data, isLoading, refetch } = fetchData;

  if (isLoading) {
    return <div>Loading...</div>
  }


  return (
    <>
      <div>Products</div>
      <ul>
        <button onClick={()=>{refetch()}}>refecth</button>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Products
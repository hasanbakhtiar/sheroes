import axios from 'axios'
import React from 'react'
import { useMutation, useQuery } from 'react-query'

const ProductsPost = () => {

  const { data, mutate, isLoading }  = useMutation('products', (newPost) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts",newPost)
      .then(res => res.data)
  })
  
  console.log(data,'mutate data');
  

  if (isLoading) {
    return <div>Loading...</div>
  }


  return (
    <>
      <div>Products</div>
      <ul>
        <button onClick={()=>{mutate({title:"test"})}}>post</button>
      
      </ul>
    </>
  )
}

export default ProductsPost
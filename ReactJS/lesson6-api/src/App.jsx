import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products,setProduct] = useState([]);
  useEffect(()=>{
    // axios.get('https://fakestoreapi.com/products')
    // .then(res=>setProduct(res.data))

    axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    }).then(res=>setProduct(res.data))
  },[])
  return (
    <div className='container mt-5'>
      {products.map(item=>(
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}

export default App
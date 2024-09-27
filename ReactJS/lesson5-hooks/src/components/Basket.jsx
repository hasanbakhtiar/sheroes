import React, { useState } from 'react'

const Basket = () => {
    const [product,setProduct] = useState({
        title:"Samsung s24 ultra",
        price:2300,
        color:"white"
    })
    const [count,setCount] = useState(0);
  return (
    <div>
            <p>{product.title}</p>
            <p>price:${product.price*count}</p>
            <button className='btn btn-danger' onClick={()=>{setCount(count-1)}}>-</button>
            <span>{count}</span>
            <button className='btn btn-success' onClick={()=>{setCount(count+1)}}>+</button>
            <button className='btn btn-warning'>reset</button>
    </div>
  )
}

export default Basket
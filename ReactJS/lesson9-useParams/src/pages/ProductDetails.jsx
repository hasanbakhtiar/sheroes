import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { urlid } = useParams();
    const [product,setProduct] = useState([]);  
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProduct(res.data));
    },[])

    const findProduct = product.find(p=>p.id.toString() === urlid)
    
    
    
    return (
        <div>
        {findProduct===undefined?<div className='d-flex align-items-center justify-content-center'><img src="https://cdn.dribbble.com/users/1849053/screenshots/7133321/loader.gif" alt="" /></div>:    <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={findProduct.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{findProduct.title}</h1>
                        <p className='text-danger'>${findProduct.price}</p>
                        <p className="lead">{findProduct.description}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/product"  className="btn btn-dark btn-lg px-4">Back</Link>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default ProductDetails
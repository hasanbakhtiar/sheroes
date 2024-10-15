import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import slugify from 'slugify'
import { Button } from 'react-bootstrap'
import { LangContext } from '../context/LangContext'

const Header = () => {
  const [product] = useContext(ProductContext);
  const [lang,setLang] = useContext(LangContext);
  const [keyword,setKeyword] = useState("");
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">{lang==="AZ"?"Ana Sehife":"Home"}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
          </ul>

          {/* =========================================== modal start ============================ */}
          <div className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Enter product" data-bs-toggle="modal" data-bs-target="#exampleModal" />
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Search </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">

                    <div className="input-group mb-3">
                      <input type="text" onChange={e=>setKeyword(e.target.value)} className="form-control" placeholder="Enter product name" />
                      <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
                    </div>

                    <ul className="list-group">
                    {!keyword?"":product.filter(p=>p.title.toLowerCase().includes(keyword)).map(item=>(
                      <Link  to={`/product/${slugify(item.title,{lower:true})}`} class="list-group-item"><div data-bs-dismiss="modal"><img  className='me-3' src={item.image} width={50} />{item.title.slice(0,10)}</div></Link>
                    ))}
                    </ul>

                  </div>

                </div>
              </div>
            </div>

          </div>
          {/* =========================================== modal end ============================ */}

          {/* =========================================== lang start ============================ */}
          <Button variant="success" onClick={()=>{
            lang==="AZ"?setLang("EN"):setLang("AZ");
            lang==="AZ"?localStorage.setItem('lang',"EN"):localStorage.setItem("lang","AZ");
          }}>{lang==="AZ"?"EN":"AZ"}</Button>
          {/* =========================================== lang end ============================ */}



        </div>
      </div>
    </nav>

  )
}

export default Header
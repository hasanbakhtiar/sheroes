import React, { useContext, useRef } from 'react'
import { EndPointContext } from '../../context/EndPointContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const SignIn = () => {
  const cookies = new Cookies(null, { path: '/' });
  const [endPoint, header] = useContext(EndPointContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${endPoint}/auth`, {

      email: emailRef.current.value,
      password: passwordRef.current.value

    }, header)
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          cookies.set("x-auth-token",res.data)
          Swal.fire({
            title: "Register is successfull",
            icon: "success",
            preConfirm: () => { navigate('/account') }
          })
        }
        console.log(res)
      })

  }

  return (
    <div style={{height:"80vh"}} className="d-flex align-items-center justify-content-center flex-column">
      <h1 className='mb-5'>Login</h1>
      <div className="col-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input ref={emailRef} type="email" className="form-control"  />
          </div>
          <div className="mb-3">
            <label  className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control"  />
          </div>
          
          <button type="submit" className="btn btn-dark">Login</button>
        </form>

      </div>
    </div>
  )
}

export default SignIn
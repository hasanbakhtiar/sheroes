import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { EndPointContext } from '../../context/EndPointContext'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [endPoint, header] = useContext(EndPointContext);
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${endPoint}/register`, {

      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value

    }, header)
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          Swal.fire({
            title: "Register is successfull",
            icon: "success",
            preConfirm: () => { navigate('/signin') }
          })
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err);

        if (err.status === 400 || err.status === 401) {
          let alertText = "";
          if (err.response.data.match("password")) {
            alertText = err.response.data
          } else if (err.response.data.match("empty")) {
            alertText = err.response.data
          } else if (err.response.data.match("email")) {
            alertText = err.response.data
          }
          else if (err.response.data.match("already")) {
            alertText = err.response.data
          }
          Swal.fire({
            title: alertText,
            icon: "error"
          })
        }

      })
  }



  return (
    <div style={{ height: "80vh" }} className="d-flex align-items-center justify-content-center flex-column">
      <h1 className='mb-5'>Register</h1>
      <div className="col-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input ref={nameRef} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input ref={surnameRef} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input ref={phoneRef} type="tel" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input ref={emailRef} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control" />
          </div>



          <button type="submit" className="btn btn-dark">Login</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp
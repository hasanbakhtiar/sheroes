import React, { useRef } from 'react'
import Swal from 'sweetalert2';

const userdata = {
    email:"hasan@webluna.org",
    password:"hasan123"
}


const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();

    const formSubmited = (e)=>{
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            Swal.fire({
                title: "Please fill input",
                icon: "warning"
              });
        }else{
            if (emailRef.current.value === userdata.email && passRef.current.value === userdata.password) {
                Swal.fire({
                    title: "Please fill input",
                    icon: "success",
                    isConfirmed:()=>{window.location.assign('/dashboard')}
                  });
            }else{
                Swal.fire({
                    title: "Email or password is wrong!",
                    icon: "error",
                  });
            }
        }
    }
    
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='my-5'>Login</h1>
                <div className="col-4">
                <form onSubmit={formSubmited}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passRef} type="password" className="form-control"  />
                </div>
                
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
                </div>
            </div>

        </div>
    )
}

export default Login
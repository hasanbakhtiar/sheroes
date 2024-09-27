import { useState } from "react"

const user = {
    email:"admin@gmail.com",
    password:"admin123"
}

const Login = () => {
    const [email,setEmail] = useState("a");
    const [password,setPass] = useState("b");
    const [alert,setAlert] = useState({
        text:"",
        style:""
    })


    const formSubmit = (e)=>{
            e.preventDefault();
            if (!email || !password) {
                setAlert({
                    style:"alert alert-warning",
                    text:"Please, fill input"
                })
            }else{
                if (user.email === email && password===user.password ) {
                    setAlert({
                        style:"alert alert-success",
                        text:"Login is successfull!"
                    })
                }else{
                    setAlert({
                        style:"alert alert-danger",
                        text:"Email or password is wrong!"
                    })
                }
            }
    }
    
    
    
    return (
        <div>
        
            <h1 className='text-center my-5'>Login Page</h1>
        <div className="d-flex justify-content-center align-items-center flex-column">
            <p className={alert.style}>{alert.text}</p>
        <form onSubmit={formSubmit} className='col-4'>

                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>{setPass(e.target.value)}} />
                </div>
        
                <button type="submit" className="btn btn-dark">Login</button>
            </form> 
        </div>

        </div>
    )
}

export default Login
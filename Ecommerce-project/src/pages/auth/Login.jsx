import axios from "axios";
import { useContext, useRef } from "react";
import BaseUrlContext from "../../context/BaseUrlContext";
import { useCookies } from "react-cookie";




const Login = () => {
  const [cookies, setCookie] = useCookies(['cookie-e']);
  const passRef = useRef();
  const emailRef = useRef();
const [baseUrl, header] = useContext(BaseUrlContext);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${baseUrl}/login`,
        {
          email: emailRef.current.value,
          password: passRef.current.value,
        },
        header,
      )
      .then((res) => {
        console.log(res.data)
        setCookie("cookie-e",res.data);
      });
      
  };

  
  return (
    <div>
      <p className="h1 text-center my-5">Login</p>
      <div className="d-flex align-items-center justify-content-center">
        <form className="col-5" onSubmit={formSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={emailRef} />
            <div id="emailHelp" className="form-text">
              Well never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label"> Password</label>
            <input ref={passRef} type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-dark">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

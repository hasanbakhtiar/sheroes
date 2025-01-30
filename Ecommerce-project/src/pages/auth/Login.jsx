import axios from "axios";
import { useRef } from "react";

const Login = () => {
  const passRef = useRef();
  const emailRef = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://matrixacademylessonapi.webluna.org/login`,
        {
          email: emailRef.current.value,
          password: passRef.current.value,
        },
        {
          headers: {
            "lesson-access": "bd859cade3ac0dd3165f793b641e40cd",
          },
        },
      )
      .then((res) => console.log(res));
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

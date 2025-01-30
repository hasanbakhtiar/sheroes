import { useRef, useContext } from "react";
import BaseUrlContext from "../../context/BaseUrlContext";
import axios from "axios";
import Swal from "sweetalert2";
const Register = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();
  const [baseUrl, header] = useContext(BaseUrlContext);

  const formSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passRef.current.value) {
      Swal.fire({
        title: "Please fill inputs!",
        icon: "warning",
      });
    } else {
      if (passRef.current.value === confirmPassRef.current.value) {
        axios
          .post(
            `${baseUrl}/register`,
            {
              name: nameRef.current.value,
              surname: surnameRef.current.value,
              email: emailRef.current.value,
              phone: phoneRef.current.value,
              password: passRef.current.value,
            },
            header,
          )
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
              Swal.fire({
                title: "You were registered successfully!",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Something went wrong!",

                icon: "error",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: `${error.response.data}`,
              icon: "error",
            });
          });
      } else {
        Swal.fire({
          title: "Password not similar!",
          icon: "error",
        });
      }
    }
  };
  return (
    <div>
      <p className="h1 text-center my-5">Register</p>
      <div className="d-flex align-items-center justify-content-center">
        <form className="col-5" onSubmit={formSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input ref={nameRef} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Surname</label>
            <input ref={surnameRef} type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone number</label>
            <input ref={phoneRef} type="tel" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input ref={emailRef} type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input ref={passRef} type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm password</label>
            <input
              ref={confirmPassRef}
              type="password"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-dark">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

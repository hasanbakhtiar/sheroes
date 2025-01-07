import React, { useRef, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';



const App = () => {
  const formRef = useRef();
  const [name,setName] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7g140sl', 'template_djhmafn', formRef.current, {
        publicKey: 'cVBf7nQwR9JgBlZoL',
      })
      .then(
        () => {
          Swal.fire({
            title:"Success",
            icon:"success"
          })
        },
        (error) => {
          Swal.fire({
            title:"Error",
            icon:"error"
          })
        },
      );
  };
  
  
  return (
    <Container>
      <div className="d-flex justify-content-center flex column">
        <Col md={5}>
        <p className='h1 my-5'>Contact Form</p>
          <form ref={formRef} onSubmit={sendEmail}>
            <div>

              <div className="mb-3">
                <label  className="form-label">Name</label>
                <input type="text" onChange={e=>setName(e.target.value)} className="form-control" name='name'/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Surname</label>
                <input type="text" className="form-control" name='surname'/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Phone</label>
                <input type="tel" className="form-control" name='phone'/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" name='email'/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea className="form-control" name='message'></textarea>
              </div>

              <input type="hidden" value={name} name='from_name' />
            
              
            
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </Col>


      
      </div>

    </Container>
  )
}

export default App
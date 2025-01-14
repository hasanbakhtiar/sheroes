import React from 'react'
import { Container,Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand>Ecommerce Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            
          </Nav>
          <Link to="/login" className='btn btn-outline-warning'>Sign In</Link>
          <Link to="/register" className='btn btn-warning ms-3'>Sign Up</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
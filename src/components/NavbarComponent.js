import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComponent = () => {
  return (

    <Navbar bg="secondary" variant="secondary" >
      <Container>
        <Navbar.Brand href="#home">BOOKS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent

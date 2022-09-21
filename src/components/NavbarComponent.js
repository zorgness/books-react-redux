import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComponent = () => {
  return (

    <Navbar bg="secondary" variant="secondary"  >
      <Container >
        <Navbar.Brand className='text-white' href="#home">Welcome</Navbar.Brand>

        <Nav className="ml-5">
          <Nav.Link  href="/">Home</Nav.Link>
          <Nav.Link  href="/search">Search</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  )
}

export default NavbarComponent

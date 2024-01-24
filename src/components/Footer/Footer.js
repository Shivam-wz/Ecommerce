import React from 'react'
import { Navbar,Container, Button, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
      <Navbar expand="md" className="navbar-dark border-2 border-bottom bg-info mt-5 text-white" >
        <Container className="justify-content-around">
        <Navbar.Brand href="#home"><h1>The Generics</h1></Navbar.Brand>
          <Nav className="gap-5">
            <Nav.Link href="#youtube"><h5>Youtube</h5></Nav.Link>
            <Nav.Link href="#spotify"><h5>Spotify</h5></Nav.Link>
            <Nav.Link href="#facebook" ><h5>Facebook</h5></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Footer
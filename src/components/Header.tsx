import React from 'react'

import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return (
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
      <Navbar.Brand href="/">React Auth</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
              <Nav.Link href="signup">Sign Up</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="todo">Todo</Nav.Link>
              <Nav.Link href="multilang">MultiLang</Nav.Link>
              <Nav.Link href="news">NewsAPI</Nav.Link>
        </Nav>
      </Navbar.Collapse>    
  </Container>
  </Navbar>
  )
}

export default Header
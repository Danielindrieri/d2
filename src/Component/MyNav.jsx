import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light" href="#home" >La mia libreria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">Home</Nav.Link>
            <Nav.Link className="text-light" href="#link">About</Nav.Link>
            <Nav.Link className="text-light" href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" bg="light" className="shadow-sm py-2">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Ram<span className="text-primary">D.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#home" className="mx-2 fw-medium">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2 fw-medium">About</Nav.Link>
            <Nav.Link href="#skills" className="mx-2 fw-medium">Skills</Nav.Link>
            <Nav.Link href="#projects" className="mx-2 fw-medium">Projects</Nav.Link>
            <Nav.Link href="#contact" className="mx-2 fw-medium">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../style.css'; // Custom CSS for hover and transitions

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" bg="light" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          Ram<span className="text-primary">D.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section.toLowerCase()}`}
                className="nav-hover mx-2 fw-medium"
              >
                {section}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

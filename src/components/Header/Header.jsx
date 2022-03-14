import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <header className="py-4 mb-5 bg-light">
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Brand>Ashik</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MAHI SIVA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
            <Nav className="me-md-1 gap-md-3">
            <Nav.Link href="/" className="text-black">Home</Nav.Link>
            <Nav.Link href="/about" className="text-black">About</Nav.Link>
            <Nav.Link href="/education" className="text-black">Education</Nav.Link>
            <Nav.Link href="/skills" className="text-black">Skills</Nav.Link>
            <Nav.Link href="/Projects" className="text-black">Projects</Nav.Link>
            <Nav.Link href="/Contact" className="text-black">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

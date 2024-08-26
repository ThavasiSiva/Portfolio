import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

function Header() {
  return (
    <>
      <Navbar expand="lg" >
        <Container className="p-2">
          <Navbar.Brand href="#home" className="text-black">Mahi Siva</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
            <Nav className="me-md-1 gap-md-3">
            <Nav.Link  href="/" className="nav-text">Home</Nav.Link>
            <Nav.Link href="/about" className="nav-text">About</Nav.Link>
            <Nav.Link href="/education" className="nav-text">Education</Nav.Link>
            <Nav.Link href="/skills" className="nav-text">Skills</Nav.Link>
            <Nav.Link href="/Projects" className="nav-text">Projects</Nav.Link>
            <Nav.Link href="/Contact" className="nav-text">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

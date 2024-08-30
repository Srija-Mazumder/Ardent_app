import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.jpg';

const FirstHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top m-1" />
        <span className="ml-2">Edusparks</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="text-center">
          <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
          <Nav.Link as={Link} to="/login" className="mx-2">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FirstHeader;

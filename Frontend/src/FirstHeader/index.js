import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Use Link for routing
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/images/logo.jpg";

const FirstHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/"> {/* Use Link for the brand as well */}
        <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top m-1" />
        Edusparks
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Link to Home */}
          <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Link to Login */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FirstHeader;

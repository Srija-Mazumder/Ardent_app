import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/images/logo.jpg';
import { BsMenuUp } from "react-icons/bs";
import { RiMenuAddFill } from "react-icons/ri";

const Header = ({ onLogout, handleMenuToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); 
    }
    
    navigate('/');
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="px-3"
      style={{ zIndex: 9000, position: 'fixed', width: '100%', height: '64px' }}
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <button
            className="btn d-lg-none me-2 fs-5"
            onClick={handleMenuToggle}
            aria-label="Toggle sidebar"
          >
            <BsMenuUp  icon={ RiMenuAddFill} />
          </button>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top m-1" />
            <span className="ml-2">EduSparks</span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
            <Nav.Link onClick={handleLogout} className="mx-2" style={{ cursor: 'pointer' }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
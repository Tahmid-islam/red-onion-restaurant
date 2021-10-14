import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="text-dark navbar sticky-top"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/">
          <img className="w-25 px-4 img-fluid" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="fw-bolder text-dark px-3" as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link
              className="fw-bolder text-dark px-3"
              as={Link}
              to="/login"
            >
              Login
            </Nav.Link>
            <Nav.Link
              className="text-white bg-danger rounded-pill px-3"
              as={Link}
              to="/signup"
            >
              Signup
            </Nav.Link>
          </Nav>
          <Navbar.Text className="fw-bolder text-dark px-3">
            Signed in as:
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;

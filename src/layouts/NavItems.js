import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavItems() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="navbar navbarColor breadcrumbs"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">MY Ship</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <span>
            <FontAwesomeIcon icon="bars" color="#20FC8F" size="2x" />
          </span>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <a href="#">Service</a>
            </Nav.Link>
            <Nav.Link>
              <a href="#">Contact Us</a>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <a href="#">Try Free</a>
            </Nav.Link>
            <Outlet />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavItems;

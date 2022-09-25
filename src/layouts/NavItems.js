import React from "react";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/navbar.css";

function NavItems() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      className="navbar navbarColor"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">MY Ship</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
              <a href="#">Login</a>
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

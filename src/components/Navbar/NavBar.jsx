import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setExpanded(false);

  return (
    <div className="navvlink">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className="bg-body-tertiary py-2"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2" />
          <Navbar.Brand>Beauty Shop</Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link-custom" onClick={handleClose}>
                Home
              </NavLink>
              <NavLink
                to="/product"
                className="nav-link-custom"
                onClick={handleClose}
              >
                Product
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          

          <div className="nav-icons d-flex align-items-center">
            <NavLink
              to="/wishlink"
              className="nav-link-custom position-relative me-3"
            >
              <i className="bi bi-heart"></i>
            </NavLink>
            <NavLink to="/cart" className="nav-link-custom">
              <i className="bi bi-cart"></i>
            </NavLink>
          </div>

          <Form className="d-flex mx-auto nav-search">
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2 rounded-pill"
            />
            <Button variant="dark" className="rounded-pill">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

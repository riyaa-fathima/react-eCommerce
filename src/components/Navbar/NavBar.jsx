import React from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
  return (
    <>
      <div className="navvlink">
        <Navbar expand="lg" className="bg-body-tertiary py-2">
          <Container fluid className="d-flex justify-content-center align-items-center">
            <Navbar.Brand >Beauty Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link-custom">
                  Home
                </NavLink>
                <NavLink to="/product" className="nav-link-custom">
                  product
                </NavLink>
               
              </Nav>

              <Form className="d-flex mx-auto nav-search">
                <FormControl
                  type="search"
                  placeholder="Search products..."
                  className="me-2 rounded-pill"
                  aria-label="Search"
                />
                <Button variant="dark" className="rounded-pill ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </Button>
              </Form>

              <Nav className="ms-auto d-flex align-items-center">
                <NavLink
                  to="/wishlink"
                  className="nav-link-custom  position-relative me-3"
                >
                  <i className="bi bi-heart"></i>
                </NavLink>
                <NavLink to="/cart" className="nav-link-custom">
                  <i className="bi bi-cart"></i>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;

import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import SearchCard from "../SearchCard/SearchCard";

function NavBar() {
  const [expanded, setExpanded] = useState();
  const handleClose = () => setExpanded(false);

  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProduct(data.products); 
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const filterdProducts = product.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log("filterProduct", filterdProducts);

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
              onClick={handleClose}
            >
              <i className="bi bi-heart"></i>
            </NavLink>
            <NavLink
              to="/cart"
              className="nav-link-custom"
              onClick={handleClose}
            >
              <i className="bi bi-cart"></i>
            </NavLink>
          </div>

          <Form className="d-flex mx-auto nav-search">
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2 rounded-pill"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && <SearchCard filteredProducts={filterdProducts} />}

            <Button variant="dark" className="rounded-pill" type="submit">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

import React, { useEffect, useState } from "react";
import "./cart.scss";
import { Button, Col, Container, Row } from "react-bootstrap";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <Container className="cart-page py-5">
        <h2 className="text-center">YOUR CART</h2>
        <p className="text-center mt-3">Cart is empty </p>
      </Container>
    );
  }

  return (
    <Container className="cart-page py-5">
      <h2 className="text-center mb-4">YOUR CART</h2>
      {cartItems.map((item) => (
        <Row
          key={item.id}
          className=" row-cart align-items-center mb-4 p-3 shadow-sm rounded bg-light"
        >
          <Col md={2}>
            <img
              src={item.images[0]}
              alt={item.title}
              className="img-fluid rounded"
            />
          </Col>

          <Col md={6}>
            <h5>{item.title}</h5>
            <p className="text-muted">${item.price}</p>
          </Col>

          <Col md={4} className="d-flex justify-content-end">
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Cart;

import React, { useEffect, useState } from "react";
import "./cart.scss";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Summary from "../Summary/Summary";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);

    const savedCoupon = JSON.parse(localStorage.getItem("coupon"));
    if (savedCoupon) setCoupon(savedCoupon);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
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
      <Row>
        <Col>
          {cartItems.map((item) => (
            <Row
              key={item.id}
              className=" row-cart align-items-center mb-4 p-3 shadow-sm rounded bg-light"
            >
              <Col md={2}>
                <NavLink to={`/product/${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="img-fluid rounded"
                  />
                </NavLink>
              </Col>

              <Col md={6}>
                <NavLink to={`/product/${item.id}`}>
                  <h5>{item.title}</h5>
                  <p className="text-muted">
                    ${item.price} × {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </NavLink>
              </Col>

              <Col md={4} className="d-flex justify-content-end">
                <Row className="inc-button">
                  <Col>
                    <Button
                      variant="dark"
                      onClick={() => decreaseQuantity(item.id)}
                      className="me-1"
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity || 1}</span>
                    <Button
                      variant="dark"
                      onClick={() => increaseQuantity(item.id)}
                      className="me-2"
                    >
                      +
                    </Button>
                  </Col>
                </Row>

                <Row>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </Row>
              </Col>
            </Row>
          ))}
        </Col>

        <Col>
         <Summary cartItems={cartItems} coupon={coupon}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;

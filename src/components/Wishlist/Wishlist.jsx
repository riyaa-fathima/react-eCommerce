// import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./wishlist.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(savedWishlist);
  }, []);

  const removeItem = (id) => {
    const updated = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const moveToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find((c) => c.id === item.id);
    if (!exists) {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    removeItem(item.id);
  };
  return (
    <>
      <Container className="wishlist-page py-5">
        <h3 className="mb-4 text-center">Your Wishlist</h3>
        {wishlistItems.length === 0 ? (
          <p>no items</p>
        ) : (
          wishlistItems.map((item) => (
            <Card className="mb-4 shadow-sm wishlist-card" key={item.id}>
              <Row className="wishlist-item align-items-center mb-4">
                <Col md={3}>
                 <NavLink to={`/product/${item.id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="wishlist-img img-fluid
                    rounded"
                    />
                    </NavLink>
                </Col>
                <Col md={6}>
                 <NavLink to={`/product/${item.id}`}>
                  <h5>{item.title}</h5>
                 </NavLink>
                  <p className="text-muted">${item.price}</p>
                </Col>
                <Col md={3} className="text-end">
                  <Button
                    variant="dark"
                    size="sm"
                    className="me-2"
                    onClick={() => moveToCart(item)}
                  >
                    Move to Cart
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card>
          ))
        )}
      </Container>
    </>
  );
}

export default Wishlist;

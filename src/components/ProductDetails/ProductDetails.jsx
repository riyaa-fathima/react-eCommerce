import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./productDetails.scss";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      cart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (!product) return <h3 className="text-center my-5">Loading...</h3>;

  return (
    <Container className=" detail-page py-5">
      <Row className="row-page">
        <Col md={6} className="d-flex justify-content-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </Col>

        <Col md={6}>
          <h2>{product.title}</h2>
          <h4 className="text-muted">${product.price}</h4>
          <p className="mt-3">{product.description}</p>

          <div className="d-flex align-items-center my-4">
            <Button
              variant="dark"
              className="me-2"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
            <Button variant="dark">Buy Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;

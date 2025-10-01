import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./product.scss";
import { NavLink } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchuser = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json();
    console.log(result.products);
    const products = result.products;

    const slicedData = await products.slice(0, 10);
    console.log(slicedData);

    setProducts(slicedData);
  };
  useEffect(() => {
    fetchuser();
  }, []);

  return (
    <>
      <Container className="product-page py-5">
        <h2 className="text-center mb-4">OUR PRODUCT</h2>
        <Row>
          {products.map((product) => (
            <Col md={3} key={product.id} className="mb-4">
              <NavLink to={`${product.id}`}>
                <Card className="product-card h-100">
                  <Card.Img src={product.images[0]} alt={product.title} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <h4 className="text-muted">${product.price}</h4>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Products;

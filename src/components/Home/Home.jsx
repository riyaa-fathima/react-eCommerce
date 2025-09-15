import React from "react";
import "./home.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import beauty from "../../assets/beauty.jpeg";
import Brands from "../Brands/Brands";
import Product from "../Product/Product";

function Home() {
  return (
    <>
      <div className="home-sec">
        <Container className="text-center hero-section">
          <Row  className="align-items-center" >
            <Col  md={6} className=" text-section">
              <h1 className="hero-title">DISCOVER BEAUTY, REDIFINED</h1>
              <p className="hero-subtitle">
                Discover the best products for your skin and beauty needs.
              </p>
              <Button variant="dark" size="lg">
                Shop Now
              </Button>
            </Col>

            <Col md={6} className="image-section text-center">
              <img
                src={beauty}
                alt="beauty product"
                className="beauty-image"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Brands/>
      <div className="home-product">
        <Product/>
      </div>
    </>
  );
}

export default Home;

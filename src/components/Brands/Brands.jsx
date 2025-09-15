import React from "react";
import "./brands.scss";
import { Col, Container, Row } from "react-bootstrap";

function Brands() {
  const brandIcons = [
    { name: "Sephora" },
    { name: "L'Oreal" },
    { name: "The Body Shop" },
    { name: "Maybelline" },
    { name: "Lakme" },
  ];

  return (
    <>
      <div className="brands-section">
        <Container>
          <Row className="justify-content-center align-items-center">
            {brandIcons.map((brand, index) => (
              <Col xs={2} md={2} key={index} className="text-center">
                <h3 className="brand-name">{brand.name}</h3>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Brands;

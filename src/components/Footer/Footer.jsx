// Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer-section py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-2 mb-md-0">
            <h5>BeautyStore</h5>
            <p>Discover beauty, redefined.</p>
          </Col>
          <Col md={4} className="text-center mb-2 mb-md-0">
            <p>&copy; {new Date().getFullYear()} BeautyStore. All Rights Reserved.</p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <a href="#!" className="footer-link me-3">Privacy Policy</a>
            <a href="#!" className="footer-link">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

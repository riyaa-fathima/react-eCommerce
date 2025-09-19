import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./discount.scss";

function Discount() {
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleSave = () => {
    if (!name || !percentage) {
      alert("Please enter both values");
      return;
    }

    const coupon = { name, percentage };

    localStorage.setItem("coupon", JSON.stringify(coupon));
    setName(" ");
    setPercentage(" ");

    alert("Coupon saved!");
  };

  return (
    <>
      <Card className="coupon-card">
        <h3>COUPONS</h3>
        <Row>
          <Col>
            <label htmlFor="">name : </label>
            <br />
            <input
              type="text"
              placeholder="eg:DISCOUNT10"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <label htmlFor="">percentage :</label>
            <br />
            <input
              type="text"
              placeholder="eg:10%"
              onChange={(e) => setPercentage(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="dark" onClick={handleSave}>
              save
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Discount;

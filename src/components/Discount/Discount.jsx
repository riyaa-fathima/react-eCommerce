import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./discount.scss";

function Discount() {
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [list, setList] = useState([]);
 

  useEffect(() => {
    const savedCoupon = JSON.parse(localStorage.getItem("coupon"));
    console.log("svd", savedCoupon);

    setList(savedCoupon);
  }, [name]);

  const handleSave = () => {
    if (!name || !percentage) {
      alert("Please enter both values");
      return;
    }
    

    const coupon = { name, percentage };
    const updatedList = [...list, coupon];
    setList(updatedList);
  
    localStorage.setItem("coupon", JSON.stringify(updatedList));
    setName("");
    setPercentage("");
    ("");

    alert("Coupon saved!");
  };


  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    localStorage.setItem("coupon", JSON.stringify(updatedList));
  };

  return (
    <>
      <Card className="coupon-card">
        <h3>COUPONS</h3>
        {console.log("list", list)}
        <Row>
          <Col>
            <label htmlFor="">name: </label>
            <br />
            <input
              type="text"
              placeholder="eg:DISCOUNT10"
              value={name}   
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <label htmlFor="">percentage:</label>
            <br />
            <input
              type="text"
              placeholder="eg:10%"
              value={percentage}   
              onChange={(e) => setPercentage(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="dark" onClick={handleSave}>
              save
            </Button>
          </Col>
        </Row>

        <h5>Saved Coupons:</h5>
        {list.map((i, index) => (
          <Row key={index} className="mb-2 align-items-center">
            <Col>
              {i.name} - {i.percentage}%
            </Col>
            <Col className="text-end">
              
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Card>
    </>
  );
}

export default Discount;

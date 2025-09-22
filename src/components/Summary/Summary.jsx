import React, { useState } from "react";
import "./summary.scss";
import { Button, Card } from "react-bootstrap";

function Summary({ cartItems }) {
  const [applyCoupon, setApplyCoupon] = useState();
  const [input, setInput] = useState("");

  const handleApplyCoupon = () => {
    const savedCoupon = JSON.parse(localStorage.getItem("coupon"));
    console.log("save", savedCoupon);
    console.log("input", input);

    const filteredCoupon = savedCoupon.filter(
      (coupon) => coupon.name === input
    );

    if (filteredCoupon) {
      setApplyCoupon(filteredCoupon[0]);
      setInput("");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = applyCoupon ? (total * applyCoupon.percentage) / 100 : 0;

  const finalTotal = total - discount;
  return (
    <>
      <Card className="order-summary">
        <h4 className="text-center">Order Summary</h4>
        <div className="summary-row">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        {applyCoupon && (
          <div className="summary-row">
            <span>Discount:</span>
            <span> ${discount.toFixed(2)}</span>
          </div>
        )}

        <div className="code-input">
          <input
            type="text"
            placeholder="enter the code"
            size="sm"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="dark" size="sm" onClick={handleApplyCoupon}>
            Apply
          </Button>
        </div>
        <div className="summary-row final">
          <span>Final Total:</span>
          <span>${applyCoupon ? finalTotal.toFixed(2) : total.toFixed(2)}</span>
        </div>
      </Card>
    </>
  );
}

export default Summary;

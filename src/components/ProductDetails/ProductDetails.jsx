import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./productDetail.scss";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [wiishlist, setWiishlist] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();

    let savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWiishlist(savedWishlist);
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
    alert("added to cart")
  };

  const handleWishlist = (product) => {
    let updatedWIshlist = [...wiishlist];
    const exists = updatedWIshlist.find((item) => item.id === product.id);

    if (exists) {
      updatedWIshlist = updatedWIshlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updatedWIshlist.push(product);
    }
    setWiishlist(updatedWIshlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWIshlist));
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

          <Button
            variant="light"
            style={{ maxWidth: "50px", maxHeight: "50px" }}
            onClick={() => handleWishlist(product)}
            className="wish-button"
          >
            <i className="bi bi-heart"></i>
          </Button>
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
            <Button variant="outline-dark">Buy Now</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;

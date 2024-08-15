import React, { useContext, useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartProvider";
import { UserContext } from "../../context/UserProvider";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  // const { isLogin } = useContext(UserContext);

  const handleAddToCart = (productId, quantity = 1) => {
    if (true) {
      const data = {
        productId,
        quantity,
      };
      // function call to add item to cart
      addItem(data, () => {
        toast.success("Item added to cart", {
          position: "bottom-right",
        });
      });
    } else {
      toast.error("Please login to add item to cart", {
        position: "bottom-right",
      });
    }
  };

  return (
    <Col className="mb-3" md={6} lg={4} xl={3}>
      <Card className="productcard">
        <img
          src={product.productImage}
          alt={product.title}
          width="100%"
          height="180px"
          onClick={() => navigate(`/product/${product.productId}`)}
          style={{
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        <Card.Body>
          <div className="d-flex justify-content-between">
            <small className="text-muted fw-semibold">{product.brand}</small>
            {product.quantity <= 0 ? (
              <Badge bg="danger">Out of Stock</Badge>
            ) : (
              ""
            )}
          </div>
          <h6
            className="mb-0 product-title"
            style={{ minHeight: "46px" }}
            onClick={() => navigate(`/product/${product.productId}`)}
          >
            {product.title.length > 60
              ? product.title.slice(0, 60) + "..."
              : product.title}
          </h6>

          <small style={{ minHeight: "68px", display: "inline-block" }}>
            {product.description.length > 85
              ? product.description.slice(0, 85) + "..."
              : product.description}
          </small>
          <div className="d-flex align-items-center mb-1">
            {product.discountedPrice ? (
              <div className="text-muted">
                <del>
                  <small>$ {product.price}</small>
                </del>
                <small className="text-danger ms-2">
                  $ {product.discountedPrice}
                </small>
              </div>
            ) : (
              <div className="me-3">
                <small>$ {product.price}</small>
              </div>
            )}
          </div>
          <Button
            variant="primary"
            size="sm"
            disabled={product.quantity <= 0}
            onClick={() => {
              handleAddToCart(product.productId);
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;

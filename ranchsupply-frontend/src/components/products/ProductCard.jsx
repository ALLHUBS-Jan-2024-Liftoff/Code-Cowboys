import React, { useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
// import { addItem } from "../../services/CartService";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(1);

  //   const handleAddToCart = (productId, quantity = 1) => {
  //     const data = {
  //       productId,
  //       quantity,
  //     };
  //     // function call to add item to cart

  //     addItem(userId, data)
  //       .then((response) => {
  //         console.log(response.data);
  //         navigate("/cart");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  return (
    <Col className="mb-3" md={6} lg={4} xl={3}>
      <Card>
        {/* <img
          // src={`data:image/jpeg;base64,${product.imageUrl}`}
          src={product.imageUrl}
          // className="card-img-top"
          alt={product.title}
          // width="100%"
          // height="150rem"
          onClick={() => navigate(`/product/${1}`)}
          // style={{
          //   objectFit: "contain",
          //   cursor: "pointer",
          // }}
        /> */}
        <img
          // urlEndpoint="https://ik.imagekit.io/ranchsupply/"
          src={product.productImage}
          onClick={() => navigate(`/product/${product.productId}`)}
          className="object-fit-lg-cover"
          style={{
            objectFit: "cover",
            cursor: "pointer",
            height: "150px",
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
            // onClick={() => navigate(`/product/${1}`)}
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
              //   handleAddToCart(product.productId);
              console.log("Added to cart");
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

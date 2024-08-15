import React, { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../../context/CartProvider";

const SingleCartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    // console.log("ItemId :" + itemId);
    removeItem(itemId);
  };
  return (
    <Col md={12} className="mb-3">
      <Card>
        <Card.Body>
          <Row>
            <Col
              xs={4}
              md={3}
              lg={2}
              xxl={1}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src={item.product.productImage}
                alt={item.product.title}
                style={{
                  objectFit: "contain",
                  width: "150px",
                  height: "100px",
                  borderRadius: "20%",
                }}
              />
            </Col>
            {/* Product Details */}
            <Col md={7} lg={8} xxl={9}>
              <h6>{item.product.title}</h6>
              <small>{item.product.description}</small>
              <Row>
                <Col md={4}>
                  <small>
                    <b>Quantity:</b> {item.quantity}
                  </small>
                </Col>
                <Col md={4}>
                  <small>
                    <b> Unit Price:</b> ${" "}
                    {item.product.discountedPrice === 0 ? (
                      item.product.price
                    ) : (
                      <>
                        <span
                          className="text-muted me-2"
                          style={{ textDecoration: "line-through" }}
                        >
                          {item.product.price}
                        </span>
                        <span className="text-danger">
                          {item.product.discountedPrice}
                        </span>
                      </>
                    )}
                  </small>
                </Col>
                <Col md={4}>
                  <small>
                    <b> Total Price:</b> $ {item.totalPrice.toFixed(2)}
                  </small>
                </Col>
              </Row>
            </Col>
            {/* Buttons */}
            <Col
              xs={7}
              sm={4}
              md={2}
              lg={2}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="w-100">
                <div className="d-grid">
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      handleRemoveItem(item.cartItemId);
                    }}
                  >
                    Remove
                  </Button>
                </div>
                <div className="mt-2">
                  <Row>
                    <Col className="d-grid">
                      {/* Decrease quantity */}
                      <Button
                        className="btn-primary"
                        size="sm"
                        onClick={(e) => {
                          const newQuantity = item.quantity - 1;
                          if (newQuantity > 0) {
                            const data = {
                              productId: item.product.productId,
                              quantity: newQuantity,
                            };
                            // update item in cart with new quantity
                            addItem(data);
                          } else {
                            toast.info("Quantity can't be less than 1", {
                              position: "bottom-right",
                            });
                          }
                        }}
                      >
                        {/* Minus */}
                        <FaMinus />
                      </Button>
                    </Col>
                    <Col className="d-grid">
                      {/* Increase quantity */}
                      <Button
                        className="btn-primary"
                        size="sm"
                        onClick={() => {
                          const newQuantity = item.quantity + 1;
                          if (newQuantity > 10) {
                            toast.info("Quantity can't be more than 10", {
                              position: "bottom-right",
                            });
                          } else {
                            const data = {
                              productId: item.product.productId,
                              quantity: newQuantity,
                            };
                            // update item in cart with new quantity
                            console.log("productId:" + item.product.productId);
                            console.log("quantity:" + newQuantity);
                            addItem(data);
                          }
                        }}
                      >
                        <FaPlus />
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCartItem;

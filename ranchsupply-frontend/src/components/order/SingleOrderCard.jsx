import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";

const SingleOrderCard = ({ order }) => {
  const navigate = useNavigate();
  return (
    <Row className="mb-3 mt-5">
      <Col>
        <Card>
          <Card.Body>
            <Row>
              {/* Order Number */}
              <Col md={6}>
                <h6>Order Number: {order.orderId}</h6>
              </Col>
              <Col md={6}>
                <h6>Order Date: {order.createdAt}</h6>
              </Col>
            </Row>
            {order?.orderItems.map((item, index) => {
              return (
                <Row key={index} className="mt-3">
                  {/* Order item image */}
                  <Col
                    xs={4}
                    md={2}
                    lg={1}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <img
                      src={item.product.productImage}
                      //   src="src\assets\logo.png"
                      alt={item.product.title}
                      style={{
                        objectFit: "contain",
                        width: "100px",
                        height: "100px",
                      }}
                    />
                  </Col>
                  {/* Product Details */}
                  <Col xs={12} md={8}>
                    <Row>
                      <Col>
                        <h6
                          className="product-title"
                          onClick={() =>
                            navigate("/product/" + item.product.productId)
                          }
                        >
                          {item.product.title}
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3}>
                        <small>Quantity: {item.quantity} </small>
                      </Col>
                      <Col md={3}>
                        <small>
                          Total Price: $ {item.totalPrice.toFixed(2)}
                        </small>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              );
            })}
            <Row className="mt-3">
              <Col>
                <h6>Total Order Amount: $ {order.orderAmount.toFixed(2)}</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button size="sm" as={NavLink} to={`/order/${order.orderId}`}>
                  View Order Details
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SingleOrderCard;

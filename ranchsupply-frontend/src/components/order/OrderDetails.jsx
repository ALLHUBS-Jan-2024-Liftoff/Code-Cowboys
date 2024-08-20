import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderById } from "../../services/OrderService";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  //fetch order by Id
  const fetchOrderById = async (orderId) => {
    try {
      const data = await getOrderById(orderId);
      console.log("data : " + data);
      setOrder(data);
    } catch (errors) {
      toast.error("Unable to fetch order details");
    }
  };
  useEffect(() => {
    fetchOrderById(orderId);
  }, [orderId]);
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3>Order Details</h3>
          <hr />
        </Col>
      </Row>

      {order == null ? (
        <h4 className="text-center">No order details found</h4>
      ) : (
        ""
      )}

      {order && (
        <>
          <Row>
            {/* Left side */}
            <Col md={6}>
              {/* Order Details */}
              <Row className="mb-3">
                <Col>
                  <h6>Order Number: {order.orderId}</h6>
                  <h6>Order Date: {order.createdAt}</h6>
                  {order.deliveryDate ? (
                    <h6>Delivered Date: {order.deliveryDate}</h6>
                  ) : (
                    ""
                  )}
                  <h6>Order Status: {order.orderStatus}</h6>
                  <h6>Payment Status: {order.paymentStatus}</h6>
                </Col>
              </Row>
              {/* Billing Details Card */}
              <Row className="mb-3">
                <Col md={12}>
                  <h6>Billing Details</h6>
                </Col>
                <Col md={8}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <p className="m-0">
                            {order.user.firstName} {order.user.lastName}
                          </p>
                        </Col>
                        <Col>
                          <p className="m-0">{order.user.phoneNumber}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="m-0">{order.user.email}</p>
                        </Col>
                        {/*  user address */}
                      </Row>
                      {order.user.address ? (
                        <Row>
                          <Col>
                            <p className="m-0">{order.user.address}</p>
                          </Col>
                        </Row>
                      ) : (
                        ""
                      )}
                      {/* user city. postal code */}
                      {order.user.city ? (
                        <>
                          <Row>
                            <Col>
                              <p className="m-0">
                                {order.user?.city}, {order.user?.state}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p className="m-0 text-uppercase">
                                {order.user?.zipCode}
                              </p>
                            </Col>
                          </Row>
                        </>
                      ) : (
                        ""
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Shipping Details Card */}
              <Row className="mb-3">
                <Col md={12}>
                  <h6>Shipping Details</h6>
                </Col>
                {/* Shipping Details Card */}
                <Col md={8}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                          <p className="m-0">{order.orderName}</p>
                        </Col>
                        <Col>
                          <p className="m-0">{order.shippingPhone}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="m-0">{order.shippingAddress}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="m-0">
                            {order.city}, {order.state}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="m-0 text-uppercase">{order.zipCode}</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* Right side */}
            <Col md={6}>
              <Row>
                <Col>
                  <h4>Order Items</h4>
                </Col>
              </Row>
              {/* Order Items */}
              {order.orderItems.map((item, index) => {
                return (
                  <Row key={index} className="mb-3">
                    <Col
                      xs={4}
                      sm={3}
                      xl={2}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <img
                        src={item.product.productImage}
                        alt={item.product.title}
                        style={{
                          objectFit: "contain",
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </Col>
                    {/* Product Details */}
                    <Col xs={8} sm={6} md={12} lg={9}>
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
                        <Col md={6}>
                          <small>Quantity: {item.quantity} </small>
                        </Col>
                        <Col md={6}>
                          <small>
                            Total Price: $ {item.totalPrice.toFixed(2)}
                          </small>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
              <Row>
                <Col>
                  <hr />
                  <h4>Total Order Amount: $ {order.orderAmount.toFixed(2)}</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default OrderDetails;

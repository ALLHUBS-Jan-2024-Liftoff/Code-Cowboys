import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { createOrder } from "../../services/OrderService";
import { CartContext } from "../../context/CartProvider";

const OrderCheckout = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [userAddress, setUserAddress] = useState({
    shippingAddress: "",
    orderName: "",
    zipCode: "",
    city: "",
    state: "",
    shippingPhone: "",
  });

  // get total amount of cart
  const getTotalAmount = () => {
    let totalAmount = 0;
    cart &&
      cart.items.forEach((item) => {
        totalAmount += item.totalPrice;
      });
    return totalAmount.toFixed(2);
  };

  // handle address input change
  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setUserAddress({
      ...userAddress,
      [name]: value,
    });
  };

  // handle address input blur
  const handleAddressBlur = (event) => {
    // const inputValue = event.target.value;
    // setShippingAddress(inputValue);
  };

  const placeOrder = async (data) => {
    try {
      const result = await createOrder(data);
      setCart({ items: [] });
      console.log("result :" + result.orderId);
      //   if (result.paymentUrl) {
      //     console.log("Payment Url: " + result.paymentUrl);
      //     window.location.href = result.paymentUrl;
      //   }
      navigate("/orders");
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      userId: 52,
      cartId: cart.cartId,
      orderStatus: "PENDING",
      paymentStatus: "PAID",
      orderName: userAddress.orderName,
      shippingPhone: userAddress.shippingPhone,
      shippingAddress: userAddress.shippingAddress,
      city: userAddress.city,
      state: userAddress.state,
      zipCode: userAddress.zipCode,
    };

    placeOrder(data);
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3>Review & Place Order</h3>
          <hr />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg={6}>
          <Row>
            <Col>
              <h4>Order Summary</h4>
            </Col>
          </Row>
          {cart &&
            cart?.items.map((item, index) => {
              return (
                <Row key={index} className="mb-3">
                  {/* item image */}
                  <Col
                    xs={4}
                    sm={3}
                    md={2}
                    lg={3}
                    xl={2}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <img
                      src={item.product.productImage}
                      alt={item.product.title}
                      style={{
                        objectFit: "cover",
                        width: "120px",
                        height: "100px",
                      }}
                    />
                  </Col>
                  {/* Product Details */}
                  <Col xs={8} sm={6} lg={9}>
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
          <Row className="mb-3">
            <Col>
              <h4>Total Order Amount: $ {getTotalAmount()}</h4>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group
                as={Col}
                md={6}
                controlId="orderName"
                className="mb-3"
              >
                <Form.Label>Order Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Order Name"
                  onChange={handleAddressChange}
                  name="orderName"
                  value={userAddress.orderName}
                />
                <Form.Control.Feedback type="invalid">
                  {/* {errors.orderName} */}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md={6}
                controlId="shippingPhone"
                className="mb-3"
              >
                <Form.Label>Shipping Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Shipping Phone"
                  onChange={handleAddressChange}
                  name="shippingPhone"
                  value={userAddress.shippingPhone}
                />
                <Form.Control.Feedback type="invalid">
                  {/* {errors.shippingPhone} */}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="shippingAddress" className="mb-3">
                <Form.Label>Shipping Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Shipping Address"
                  autoComplete="address-line-1"
                  name="shippingAddress"
                  value={userAddress.shippingAddress}
                  onChange={handleAddressChange}
                />
                <Form.Control.Feedback type="invalid">
                  {/* {errors.shippingAddress} */}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="city" className="mb-3" md={4}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  autoComplete="address-level2"
                  onChange={handleAddressChange}
                  name="city"
                  value={userAddress.city}
                />
                <Form.Control.Feedback type="invalid">
                  {/* {errors.city} */}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="state" className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  autoComplete="address-level1"
                  onChange={handleAddressChange}
                  name="state"
                  value={userAddress.state}
                />
                <Form.Control.Feedback type="invalid">
                  {/* {errors.province} */}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="zipCode" className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip Code"
                  autoComplete="postal-code"
                  onChange={handleAddressChange}
                  name="zipCode"
                  value={userAddress.zipCode}
                />
                <Form.Control.Feedback type="invalid">
                  {/* {errors.postalCode} */}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" className="me-2 mb-3">
              <span>Proceed to Pay</span>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderCheckout;

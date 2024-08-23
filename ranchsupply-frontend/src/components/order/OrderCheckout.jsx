import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/OrderService";
import { CartContext } from "../../context/CartProvider";
import AddressAutofill from "./AddressAutofill";

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

  const getTotalAmount = () => {
    let totalAmount = 0;
    cart &&
      cart.items.forEach((item) => {
        totalAmount += item.totalPrice;
      });
    return totalAmount.toFixed(2);
  };

  const handleAddressChange = (name, value) => {
    setUserAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setAddress = (suggestion) => {
    const address = suggestion.place_name;
    const context = suggestion.context;

    const city = context.find((c) => c.id.startsWith("place"))?.text || "";
    const state = context.find((c) => c.id.startsWith("region"))?.text || "";
    const zipCode = context.find((c) => c.id.startsWith("postcode"))?.text || "";

    handleAddressChange("shippingAddress", address);
    handleAddressChange("city", city);
    handleAddressChange("state", state);
    handleAddressChange("zipCode", zipCode);
  };

  const placeOrder = async (data) => {
    try {
      const result = await createOrder(data);
      setCart({ items: [] });
      console.log("result :" + result.orderId);
      if (result.paymentUrl) {
        console.log("Payment Url: " + result.paymentUrl);
        window.location.href = result.paymentUrl;
      }
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
            cart?.items.map((item, index) => (
              <Row key={index} className="mb-3">
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
                      <small>Total Price: $ {item.totalPrice.toFixed(2)}</small>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          <Row className="mb-3">
            <Col>
              <h4>Total Order Amount: $ {getTotalAmount()}</h4>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} md={6} controlId="orderName" className="mb-3">
                <Form.Label>Order Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Order Name"
                  onChange={(e) =>
                    handleAddressChange("orderName", e.target.value)
                  }
                  value={userAddress.orderName}
                />
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
                  onChange={(e) =>
                    handleAddressChange("shippingPhone", e.target.value)
                  }
                  value={userAddress.shippingPhone}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="shippingAddress" className="mb-3">
                <Form.Label>Shipping Address</Form.Label>
                <AddressAutofill setAddress={setAddress} />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="city" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  autoComplete="address-level2"
                  onChange={(e) => handleAddressChange("city", e.target.value)}
                  value={userAddress.city}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="state" className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  autoComplete="address-level1"
                  onChange={(e) => handleAddressChange("state", e.target.value)}
                  value={userAddress.state}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="zipCode" className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip Code"
                  autoComplete="postal-code"
                  onChange={(e) =>
                    handleAddressChange("zipCode", e.target.value)
                  }
                  value={userAddress.zipCode}
                />
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

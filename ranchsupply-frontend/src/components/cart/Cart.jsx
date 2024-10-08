import React, { useEffect, useState, useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SingleCartItem from "./SingleCartItem";
import { CartContext } from "../../context/CartProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);

  // get total amount of cart
  const getTotalAmount = () => {
    let totalAmount = 0;
    cart &&
      cart.items.forEach((item) => {
        totalAmount += item.totalPrice;
      });
    return totalAmount.toFixed(2);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3>Shopping Cart ({cart?.items.length} items)</h3>
          <hr />
        </Col>
      </Row>
      {cart?.items.length === 0 ? (
        <Row>
          <Col className="text-center">
            <h3>No items in cart</h3>
            <Button className="mb-3" as={NavLink} to="/products">
              Go Shopping
            </Button>
          </Col>
        </Row>
      ) : (
        <>
          <Row>
            {cart?.items.map((item, index) => (
              <SingleCartItem item={item} key={index} />
            ))}
          </Row>
          <Container>
            <Row>
              <Col className="text-end">
                <h5>Total Amount: $ {getTotalAmount()}</h5>
                <Button
                  className="mb-3 btn-primary"
                  as={NavLink}
                  to="/checkout-order"
                >
                  Proceed to Checkout
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getAllOrdersByUserId } from "../../services/OrderService";
import SingleOrderCard from "./SingleOrderCard";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [userId, setUserId] = useState(52);

  const loadUserOrders = async (userId) => {
    try {
      const orders = await getAllOrdersByUserId(userId);
      setOrders(orders);
    } catch (errors) {
      // console.error(errors);
      toast.error("Failed to load orders");
    }
  };
  useEffect(() => {
    setUserId(52);
    loadUserOrders(userId);
  }, [userId]);
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3>Your Orders</h3>
          <hr />
        </Col>
      </Row>

      {orders && orders.length === 0 ? (
        <h4 className="text-center">No orders found</h4>
      ) : (
        orders?.map((order, index) => (
          <SingleOrderCard order={order} key={index}></SingleOrderCard>
        ))
      )}
    </Container>
  );
};

export default Orders;

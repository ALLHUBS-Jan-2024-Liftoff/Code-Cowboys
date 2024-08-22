import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  return (
    <>
      <Container className="pt-4 pb-4">
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1>Ranch Supply</h1>
            <p>
            Ranch Supply is a cutting-edge warehouse management system tailored to enhance 
            the efficiency of ranch operations. Designed to tackle the common hurdles 
            of inventory management, shipment tracking, and customer satisfaction, 
            Ranch Supply aims to transform the traditional supply chain. By offering 
            seamless access to essential inventory items, our platform strives to 
            minimize the inefficiencies and frustrations often faced by ranchers.
              <br />
              <b />
              With a focus on reducing downtime and boosting overall productivity, 
              we are committed to providing a reliable, efficient, and user-friendly 
              solution that supports the ranching community in their supply management 
              needs.
            </p>
            {/* If user is logged in dont show login/register button otherwise show buttons  */}
            {/* {false ? (
              ""
            ) : (
              <div>
                <Button variant="primary" className="me-2">
                  Login
                </Button>
                <Button variant="outline-primary" className="me-3">
                  Register
                </Button>
              </div>
            )} */}
          </Col>
          <Col xs={12} md={6}>
            <img
              src="https://m.media-amazon.com/images/I/814gr-bR9-L._AC_SX679_.jpg"
              style={{ width: "100%" }}
              fluid="true"
              className="d-inline-block align-top"
              alt="RanchSupply Logo"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeContent;

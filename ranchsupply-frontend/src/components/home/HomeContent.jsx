import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
              <b>Ranch Supply</b> is a cutting-edge warehouse management system tailored
              to enhance the efficiency of ranch operations. Designed to tackle the 
              common hurdles of inventory management, shipment tracking, and customer 
              satisfaction, Ranch Supply aims to transform the traditional supply chain.
              By offering seamless access to essential inventory items, our platform 
              strives to minimize the inefficiencies and frustrations often faced by 
              ranchers. 
              <br />
              <b />
              With a focus on reducing downtime and boosting overall 
              productivity, we are committed to providing a reliable, efficient, 
              and user-friendly solution that supports the ranching community in their 
              supply management needs.
            </p>
            {/* If user is logged in dont show login/register button otherwise show buttons  */}
            {false ? (
              ""
            ) : (
              <div>
              {/* <Link to="/login">
                <Button variant="primary" className="me-2">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-primary" className="me-3">
                  Register
                </Button>
              </Link> */}
            </div>
            )}
          </Col>
          {/* <Col xs={12} md={6}>
            <img
              // src="src/assets/hero-image.png"
              style={{ width: "100%" }}
              fluid="true"
              className="d-inline-block align-top"
              alt="RanchSupply Logo"
            />
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default HomeContent;

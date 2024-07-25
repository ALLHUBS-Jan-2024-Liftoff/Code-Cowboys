import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "../../App.css"

// import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="background-image">
      <Container className="pt-4 pb-4">
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1>Ranch Supply</h1>
            <p>
            Welcome to Ranch Supply, your one-stop shop for all your ranching and outdoor 
            needs. We specialize in providing top-quality farming equipment, from robust 
            tractors to essential tools that make your daily tasks easier and more efficient. 
            Our extensive inventory ensures that whether you are cultivating your fields or 
            maintaining your property, you will find the right equipment to get the job done. 
            At Ranch Supply, we understand the hard work and dedication it takes to run a 
            successful farm, which is why we offer only the best brands and products trusted 
            by professionals.</p>
              <p>
              In addition to our comprehensive selection of farming equipment, we also 
              cater to your outdoor lifestyle. Our range of farm clothing is designed for 
              comfort and durability, keeping you prepared for any weather conditions while 
              working outside. But it's not all work and no play at Ranch Supply. We also 
              offer a variety of outdoor recreational items to help you unwind and enjoy 
              your time off. From hunting gear to camping essentials, we have everything 
              you need to make the most of your outdoor adventures. Explore our store today 
              and discover how Ranch Supply can enhance both your work and leisure time on 
              the ranch.
            </p>
            {/* If user is logged in dont show login/register button otherwise show buttons  */}
            {false ? (
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
            )}
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
      </div>
  );
};

export default HomeContent;

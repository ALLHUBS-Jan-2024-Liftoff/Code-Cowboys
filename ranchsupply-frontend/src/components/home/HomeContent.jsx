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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti, facere beatae fuga cupiditate enim nobis dicta, fugit
              obcaecati ea repudiandae asperiores fugiat, voluptate voluptatum
              cum quas. Repellat voluptate earum accusantium. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ipsum expedita rerum, aut
              magni fugit magnam fuga tempore eveniet ullam eum, nostrum eos
              ducimus! Magni, quod repudiandae ratione maiores nobis sit.
              <br />
              <b />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              laboriosam, officiis velit recusandae omnis ratione reiciendis
              incidunt dolorem quis? Perspiciatis possimus eius inventore dolor
              vel itaque ad magni porro incidunt!
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
              // src="src/assets/hero-image.png"
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

import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "../navigation/NavigationBar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <>
      <footer className="footer">
        <Container fluid className="bg-footerColor">
          <Row className=" p-3 align-items-center">
            <Col xs={12} md={3} className="pb-3">
              <div
                className="d-flex"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <img
                  // src="src/assets/siteLogo.jpg"
                  src="https://m.media-amazon.com/images/I/814gr-bR9-L._AC_SX679_.jpg"
                  width={80}
                  fluid="true"
                  className="d-inline-block align-top websiteLogo"
                  alt="RanchSupply Logo"
                />
                <div className="d-flex flex-column justify-content-center">
                  <h4 className="m-0" style={{ fontSize: "1.2rem" }}>
                    RanchSupply
                  </h4>
                  <small style={{ fontSize: "0.9rem" }}></small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="pb-3">
              <h6>
                <Nav.Link as={NavLink} to="/products">
                  Products
                </Nav.Link>
              </h6>
            </Col>
            <Col xs={12} md={3} className="pb-3">
              <h6>Help & Support</h6>
              <ul className="list-group list-unstyled">
                <Nav.Link as={NavLink} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact Us
                </Nav.Link>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="pb-2">
              <small>
                Copyright &copy; RanchSupply, {currentYear} | All Rights
                Reserved
              </small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
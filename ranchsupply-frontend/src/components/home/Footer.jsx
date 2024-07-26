import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Navbar.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  //   const navigate = useNavigate();
  return (
    <>
      <footer className="footer">
        <Container fluid className="bg-myColor">
          <Row className="text-white p-3 align-items-center">
            <Col xs={12} md={3} className="pb-3">
              <div
                className="d-flex"
                style={{ cursor: "pointer" }}
                // onClick={() => navigate("/")}
              >
                <img
                  // src="src/assets/siteLogo.jpg"
                  src="https://m.media-amazon.com/images/I/814gr-bR9-L._AC_SX679_.jpg"
                  width={80}
                  fluid="true"
                  className="d-inline-block align-top"
                  alt="RanchSupply Logo"
                  style={{ mixBlendMode: "normal" }}
                />
                <div className="d-flex flex-column justify-content-center">
                  <h4 className="m-0" style={{ fontSize: "1.2rem" }}>
                    RanchSupply
                  </h4>
                  <small style={{ fontSize: "0.9rem" }}>
                    Rapid Reflection, Swift Selection
                  </small>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="pb-3">
              <h6>
                <Nav.Link>Products</Nav.Link>
              </h6>
            </Col>
            <Col xs={12} md={3} className="pb-3">
              <h6>Help & Support</h6>
              <ul className="list-group list-unstyled">
                <Nav.Link>About Us</Nav.Link>
                <Nav.Link>Contact Us</Nav.Link>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h6 className="text-center">
                Don't miss out on exclusive deals and updates! Sign up for our
                newsletter today.
              </h6>
              <button className="btn btn-outline-light w-100 mb-3 mt-3">
                Signup
              </button>
              <div className="d-flex gap-2 justify-content-center">
                {/* Social Icons */}
                <a
                  href="https://www.facebook.com/"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-square-facebook fs-4"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram fs-4"></i>
                </a>
                <a
                  href="https://twitter.com/?lang=en"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter fs-4"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin fs-4"></i>
                </a>
                <a
                  href="https://www.youtube.com/"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube fs-4"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="text-white text-center">
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

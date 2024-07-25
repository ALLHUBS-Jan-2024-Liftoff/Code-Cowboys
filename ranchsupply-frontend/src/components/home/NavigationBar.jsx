import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  function toggleCollapse() {
    if (window.innerWidth < 992) {
      setExpanded(!expanded);
    }
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        // bg="black"
        data-bs-theme="dark"
        expand="lg"
        className="bg-navbar bg-myColor"
        variant="dark"
        sticky="top"
        expanded={expanded}
        // style={{ backgroundColor: "black" }}
      >
        <Container>
          <Navbar.Brand className="p-0">
            <div className="d-flex">
              <img
                src="https://m.media-amazon.com/images/I/814gr-bR9-L._AC_SX679_.jpg"
                width={50}
                fluid="true"
                className="d-inline-block align-top websiteLogo"
                alt="RanchSupply Logo"
                //  style={{ mix-blend-mode: "lightblue" }}
              />
              <div className="d-flex flex-column justify-content-center">
                <h4 className="m-0" style={{ fontSize: "1rem" }}>
                  RanchSupply
                </h4>
                <small style={{ fontSize: "0.8rem" }}>
                  Rapid Reflection, Swift Selection
                </small>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleCollapse}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Products
              </Nav.Link>
              <Nav.Link>Categories</Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={toggleCollapse}>
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              {false ? (
                <>
                  <Nav.Link>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Nav.Link>
                  <Nav.Link>Orders</Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      toggleCollapse();
                    }}
                  >
                    Logout
                  </Nav.Link>
                  <Nav.Link>Hello, Asha</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link>Login</Nav.Link>
                  <Nav.Link>Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

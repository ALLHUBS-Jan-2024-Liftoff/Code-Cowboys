import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Badge } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";
import { CartContext } from "../../context/CartProvider";
import { UserContext } from "../../context/UserProvider";
import axios from "axios";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { isLogin, userData, setIsLogin } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/user/logout", {
        withCredentials: true,
      });
      setIsLogin(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  function toggleCollapse() {
    if (window.innerWidth < 992) {
      setExpanded(!expanded);
    }
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-navbar bg-myColor"
        sticky="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand className="p-0" as={NavLink} to="/">
            <div className="d-flex">
              <img
                src="https://m.media-amazon.com/images/I/814gr-bR9-L._AC_SX679_.jpg"
                width={50}
                fluid="true"
                className="d-inline-block align-top websiteLogo"
                alt="RanchSupply Logo"
              />
              <div className="d-flex flex-column justify-content-center">
                <h4 className="m-0" style={{ fontSize: "1rem" }}>
                  RanchSupply
                </h4>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleCollapse}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" onClick={toggleCollapse}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products" onClick={toggleCollapse}>
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={toggleCollapse}>
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={toggleCollapse}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/admin" onClick={toggleCollapse}>
                Admin
              </Nav.Link>
            </Nav>
            <Nav>
              {isLogin ? (
                <>
                  <Nav.Link as={NavLink} to="/cart" onClick={toggleCollapse}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    {cart && cart?.items.length > 0 && (
                      <Badge className="cart-badge" bg="danger">
                        {cart.items.length}
                      </Badge>
                    )}
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/orders" onClick={toggleCollapse}>
                    Orders
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  <Nav.Link>Hello, {userData.firstName}</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/login" onClick={toggleCollapse}>
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    to="/register"
                    onClick={toggleCollapse}
                  >
                    Register
                  </Nav.Link>
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

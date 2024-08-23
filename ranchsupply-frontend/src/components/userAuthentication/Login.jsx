import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { doLogin } from "../../services/UserService"; // Corrected path
import { useNavigate } from "react-router-dom";  
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

function Login({ setAuthenticated }) {
  const { setIsLogin, setUserData } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await doLogin({ username, password });
      console.log("Login response:", response);
      if (response.success && response.user) {
        setIsLogin(true);
        setUserData(response.user);
        if (setAuthenticated) {
          setAuthenticated(true);
        }
        setMessage("Login successful!");
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setMessage(response.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(error.message || "Login failed");
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          {message && <p className="text-center mt-3">{message}</p>}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

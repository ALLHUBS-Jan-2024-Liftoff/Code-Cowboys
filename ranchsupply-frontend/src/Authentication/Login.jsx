import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function Login() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => { // put these methods in  userserice await method name from auth controller 
    e.preventDefault();
    console.log("Handle login");
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/user/login",
    //     formData,
    //     {
    //       withCredentials: true,
    //     }
    //   );
    //   setAuthenticated(true);
    //   setMessage(response.data.message);
    // } catch (error) {
    //   setMessage(error.response?.data?.message || "Login failed");
    // }
  };

  const fields = [
    { label: "Username", type: "text", name: "username", placeholder: "Enter username" },
    { label: "Password", type: "password", name: "password", placeholder: "Enter password" },
  ];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            {fields.map((field, index) => (
              <Form.Group controlId={`form${field.name}`} key={index}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;

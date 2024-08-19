import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

function Register() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/user/register",
    //     formData,
    //     {
    //       withCredentials: true,
    //     }
    //   );
    //   setMessage(response.data.message);
    //   handleClose();
    // } catch (error) {
    //   setMessage(error.response?.data?.message || "Registration failed");
    // }
  };

  const fields = [
    { label: "Username", type: "text", name: "username", placeholder: "Enter username" },
    { label: "Email", type: "email", name: "email", placeholder: "Enter email" },
    { label: "Password", type: "password", name: "password", placeholder: "Enter password" },
    { label: "Mobile Number", type: "text", name: "mobileNumber", placeholder: "Enter mobile number" },
    { label: "Address", type: "text", name: "address", placeholder: "Enter address" },
    { label: "City", type: "text", name: "city", placeholder: "Enter city" },
    { label: "State", type: "text", name: "state", placeholder: "Enter state" },
    { label: "Zipcode", type: "text", name: "zipcode", placeholder: "Enter zipcode" },
  ];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRegister}>
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
              Register
            </Button>
          </Form>
          {message && <p>{message}</p>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;

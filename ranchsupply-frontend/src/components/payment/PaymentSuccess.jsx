import React from "react";
import "./PaymentSuccess.css";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="message-box _success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h2> Your payment was successful </h2>
            <p>
              {" "}
              Thank you for your payment. we will <br></br>
              be in contact with more details shortly{" "}
            </p>
            <Button style={{ backgroundColor: "#28a745" }} as={NavLink} to="/">
              Go To Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

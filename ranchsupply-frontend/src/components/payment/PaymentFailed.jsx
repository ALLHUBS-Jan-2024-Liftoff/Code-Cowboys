import React from "react";
import "./PaymentSuccess.css";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="message-box _success _failed">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
          <h2> Your payment failed </h2>
          <p> Please, try again later </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;

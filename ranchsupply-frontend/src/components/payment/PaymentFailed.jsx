import React from "react";
import "./PaymentSuccess.css";


const PaymentFailed = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="message-box _success _failed">
          <i className="fa fa-times-circle" aria-hidden="true"></i>
          <h2> Your payment failed </h2>
          <p> Please, try again later </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;

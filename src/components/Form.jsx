import React from "react";
import "./style/form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-inputs">
          <label>Card Number</label>
          <input className="card-number" />
        </div>
        <div className="form-inputs">
          <label>Card Name</label>
          <input className="card-name" />
        </div>
        <div className="form-inputs">
          <label>Expiration Date</label>
          <input className="date" />
          <input className="date" />
          <label>CVV</label>
          <input className="cvv" />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;

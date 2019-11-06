import React from "react";
import "./assets/styles/form.css";

const Form = props => {
  return (
    <div className="form-container">
      <form>
        <div className="form-inputs">
          <label>Card Number</label>
          <input
            type="text"
            maxLength="16"
            name="cardNumber"
            className="form-number"
            value={props.card.cardNumber}
            onChange={props.handleInputChange}
          />
        </div>
        <div className="form-inputs">
          <label>Card Name</label>
          <input
            type="text"
            name="cardName"
            className="form-name"
            value={props.card.cardName}
            onChange={props.handleInputChange}
          />
        </div>
        <div className="form-inputs">
          <label>Expiration Date</label>
          <select
            type="text"
            name="expirationMonth"
            className="date"
            value={props.card.expirationMonth}
            onChange={props.handleInputChange}
          >
            <option value="" disabled>
              Month
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            type="text"
            name="expirationYear"
            className="date"
            value={props.card.expirationYear}
            onChange={props.handleInputChange}
          >
            <option value="" disabled>
              Year
            </option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
          <label>CVV</label>
          <input
            type="text"
            maxLength="3"
            name="cvv"
            className="cvv"
            value={props.card.cvv}
            onChange={props.handleInputChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Form;

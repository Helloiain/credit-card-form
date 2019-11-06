import React from "react";
import "./assets/styles/card.css";

import rfid from "./assets/images/rfid.png";

const Card = props => {
  return (
    <div id="card" className="card">
      <div id="card-inner" className="card-inner">
        <div className="card-front">
          <img className="rfid" src={rfid}></img>
          <div className="card-number-container">
            <span id="card-number" className="card-number">
              **** &nbsp; **** &nbsp; **** &nbsp; ****
            </span>
          </div>
          <div className="bottom">
            <label className="name-label">
              Card Holder
              <span
                className="card-name"
                contentEditable="true"
                data-text="Full Name"
                suppressContentEditableWarning={true}
              >
                {props.card.cardName}
              </span>
            </label>

            <label className="expiration-label">
              Expires
              <span className="expiration">
                {props.card.expirationMonth}/
                {props.card.expirationYear.slice(2, 4)}
              </span>
            </label>
          </div>
        </div>
        <div className="card-back">
          <div className="mag-strip"></div>
          <label className="cvv-label">
            CVV<span className="CVV">{props.card.cvv}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;

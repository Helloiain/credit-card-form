import React from "react";
import "./style/card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">front</div>
        <div className="card-back">back</div>
      </div>
    </div>
  );
};

export default Card;

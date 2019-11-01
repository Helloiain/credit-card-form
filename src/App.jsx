import React, { useState } from "react";
import Card from "../src/components/Card.jsx";
import Form from "../src/components/Form.jsx";

function App() {
  const initialCardState = {
    cardNumber: "",
    cardName: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: ""
  };

  const [card, setCard] = useState(initialCardState);
  return (
    <div className="App">
      <Card />
      <Form form={card} setForm={setCard} />
    </div>
  );
}

export default App;

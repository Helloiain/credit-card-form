import React, { useState } from "react";
import Card from "../src/components/Card.jsx";
import Form from "../src/components/Form.jsx";
import "./components/assets/scripts/index.js";

function App() {
  const initialCardState = {
    cardNumber: "",
    cardName: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: ""
  };

  const [card, setCard] = useState(initialCardState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setCard({ ...card, [name]: value });

    if (event.target.name === "cardNumber") {
      let str = document.getElementById("card-number").innerHTML;
      var newStr = str.replace(
        /\*/,
        event.target.value.charAt(event.target.value.length - 1)
      );
      document.getElementById("card-number").innerHTML = newStr;
    }
  };

  return (
    <div className="App">
      <Card card={card} />
      <Form card={card} handleInputChange={handleInputChange} />
    </div>
  );
}

export default App;

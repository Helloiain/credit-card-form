import React, { useState } from "react";
import Card from "../src/components/Card.jsx";
import Form from "../src/components/Form.jsx";
import "./components/assets/scripts/index.js";

function App() {
  const initialState = {
    cardNumber: "**** **** **** ****",
    cardName: "FULL NAME",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    isCardFlipped: false,
    currentFocusedElm: null
  };

  const [state, setState] = useState(initialState);

  const updateStateValue = ({ name, value }) => {
    setState({
      ...state,
      [name]: value || initialState[name]
    });
  };

  const {
    cardNumber,
    cardHolder,
    cardMonth,
    cardYear,
    cardCvv,
    isCardFlipped
  } = state;
  let { currentFocusedElm } = state;

  //references for the Form Inputs
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef()
  };

  let onCardElementClick = key => {
    focusFormFieldByKey(key);
  };

  let focusFormFieldByKey = key => {
    formFieldsRefObj[key].current.focus();
  };

  //references for the Card DIV elements
  let cardElementsRef = {
    cardNumber: null,
    cardHolder: null,
    cardDate: null
  };

  let onCardFormInputFocus = (_event, inputName) => {
    setState({
      ...state,
      currentFocusedElm: cardElementsRef[inputName]
    });
  };

  let onCardInputBlur = event => {
    setState({
      ...state,
      currentFocusedElm: null
    });
  };

  return (
    <div className="App">
      <Card
        onUpdateStateValue={updateStateValue}
        cardNumberRef={formFieldsRefObj.cardNumber}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardDateRef={formFieldsRefObj.cardDate}
        onCardInputFocus={onCardFormInputFocus}
        onCardInputBlur={onCardInputBlur}
      />
      <Form
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        cardMonth={cardMonth}
        cardYear={cardYear}
        cardCvv={cardCvv}
        isCardFlipped={isCardFlipped}
        currentFocusedEml={currentFocusedElm}
        onCardElementClick={onCardElementClick}
        cardNumberRef={node => (cardElementsRef["cardNumber"] = node)}
        cardHolderRef={node => (cardElementsRef["cardHolder"] = node)}
        cardDateRef={node => (cardElementsRef["cardDate"] = node)}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react'

const Buttons = () => {
    //we will need a function that takes the number/operator 
    //from the button and register it in to the input. 
    //try and get the click to console log the number/operator
    const [currentNumber, setCurrentNumber] = useState("---");
    const [previousNumber, setPreviousNumber] = useState(0);
    const [currentOperator, setCurrentOperator] = useState("");
  
    const setNumberFromClickEvent = e => {
      const numberToAppendFrom = isNaN(currentNumber) ? "" : currentNumber;
      console.log(previousNumber, currentNumber)
      setCurrentNumber(numberToAppendFrom + e.target.textContent);
    };
  
    const setOperatorFromClickEvent = e => {
      if (currentOperator) {
        performOperation(currentOperator);
      } else {
        setPreviousNumber(parseInt(currentNumber));
        setCurrentNumber("---");
      }
  
      const operator = e.target.textContent;
      setCurrentOperator(operator);
    };
  
    const performOperation = operator => {
      switch (operator) {
        case "+":
          setPreviousNumber(previousNumber + parseInt(currentNumber));
          setCurrentNumber("---");
          break;
        case "-":
          setPreviousNumber(previousNumber - parseInt(currentNumber));
          setCurrentNumber("---");
          break;
        case "*":
          setPreviousNumber(previousNumber * parseInt(currentNumber));
          setCurrentNumber("---");
          break;
        case "/":
          setPreviousNumber(previousNumber / parseInt(currentNumber));
          setCurrentNumber("---");
          break;
      }
    };
  
    //TODO: fix
    const finalizeOperations = () => {
      performOperation(currentOperator);
      performOperation(currentOperator);
      setCurrentNumber(previousNumber);

    };
  

    return (
        <div>
            <section>
                <div className="cal-input">
                    {currentNumber}
                </div>
            </section>
            <section className="cal-row">
                <div onClick={() => setCurrentNumber("---")} className="cal-btn">AC</div>
                <div className="cal-btn">+/-</div>
                <div className="cal-btn">%</div>
                <div operator onClick={setOperatorFromClickEvent} className="cal-btn" value="/">/</div>
            </section>
            <section className="cal-row">
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="1">1</button>
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="2">2</button>
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="3">3</button>
                <button operator onClick={setOperatorFromClickEvent} className="cal-btn" value="X">X</button>
            </section>
            <section className="cal-row">
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="4">4</button>
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="5">5</button>
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="6">6</button>
                <button operator onClick={setOperatorFromClickEvent} className="cal-btn" value="-">-</button>
            </section>
            <section className="cal-row">
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="7">7</button>
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="8">8</button>
                <button onClick={setNumberFromClickEvent} className="cal-btn" value="9">9</button>
                <button operator onClick={setOperatorFromClickEvent} className="cal-btn" value="+">+</button>
            </section>
            <section className="cal-row">
                <button onClick={setNumberFromClickEvent} className="cal-btn-lng" value="0">0</button>
                <button className="cal-btn" value=".">.</button>
                <button operator onClick={finalizeOperations} className="cal-btn">=</button>
            </section>
        </div>
    )
}
export default Buttons;
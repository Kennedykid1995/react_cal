import React, { useState } from 'react'

const Buttons = () => {
    //we will need a function that takes the number/operator 
    //from the button and register it in to the input. 
    //try and get the click to console log the number/operator
    const [operation, setOperation] = useState([]);
    const handleInput = (e) => {
        let values = e.target.value;
        setOperation([
            ...operation,
            {
                key: Date.now(),
                value: values
            }
        ]);
        console.log(operation)
    }

    const [value, setValue] = useState(0); 
    const findArr = () => {
        console.log(operation.join().replace(/,/g," ")); 
    }

    return (
        <div>
            <section>
                <div className="cal-input">
                {operation.map(item => ( 
                       <> {item.value}</>
                ))}
                </div>
            </section>
            <section className="cal-row">
                <div className="cal-btn">AC</div>
                <div className="cal-btn">+/-</div>
                <div className="cal-btn">%</div>
                <div className="cal-btn" value="/">/</div>
            </section>
            <section className="cal-row">
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="1">1</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="2">2</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="3">3</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="X">X</button>
            </section>
            <section className="cal-row">
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="4">4</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="5">5</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="6">6</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="-">-</button>
            </section>
            <section className="cal-row">
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="7">7</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="8">8</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="9">9</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value="+">+</button>
            </section>
            <section className="cal-row">
                <button onClick={e => handleInput(e, "value")} className="cal-btn-lng" value="0">0</button>
                <button onClick={e => handleInput(e, "value")} className="cal-btn" value=".">.</button>
                <button onClick={() => findArr()} className="cal-btn">=</button>
            </section>
        </div>
    )
}
export default Buttons;
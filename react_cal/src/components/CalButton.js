import React from 'react'
import CalInput from './CalInput'

const Buttons = () => {
    return (
        <div>
            <section>
                <CalInput />
            </section>
            <section className="cal-row">
                <div className="cal-btn">AC</div>
                <div className="cal-btn">+/-</div>
                <div className="cal-btn">%</div>
                <div className="cal-btn">/</div>
            </section>
            <section className="cal-row">
                <div className="cal-btn">1</div>
                <div className="cal-btn">2</div>
                <div className="cal-btn">3</div>
                <div className="cal-btn">X</div>
            </section>
            <section className="cal-row">
                <div className="cal-btn">4</div>
                <div className="cal-btn">5</div>
                <div className="cal-btn">6</div>
                <div className="cal-btn">-</div>
            </section>
            <section className="cal-row">
                <div className="cal-btn">7</div>
                <div className="cal-btn">8</div>
                <div className="cal-btn">9</div>
                <div className="cal-btn">+</div>
            </section>
            <section className="cal-row">
                <div className="cal-btn-lng">0</div>
                <div className="cal-btn">.</div>
                <div className="cal-btn">=</div>
            </section>
        </div>
    )
}
export default Buttons;
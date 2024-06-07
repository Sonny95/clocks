import React, { useState, useEffect } from "react";
import "../css/analogue.css";

function Analogue({ getTime }) {
  useEffect(() => {
    //get current time function
    const { hour, minute, second } = getTime();
    //hour moves 30degree every hour + 30/60 = 0.5
    const degHour = hour * (360 / 12) + minute * (360 / 12 / 60);
    const degMinute = minute * (360 / 60);
    const degSecond = second * (360 / 60);

    //javascript given variable name and can be used for css
    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");

    //spin them each respective degree
    if (hourHand && minuteHand && secondHand) {
      hourHand.style.transform = `rotate(${degHour}deg)`;
      minuteHand.style.transform = `rotate(${degMinute}deg)`;
      secondHand.style.transform = `rotate(${degSecond}deg)`;
    }
  }, [getTime()]);
  return (
    <div>
      <div className="analogueContainer">
        <div className="clock">
          <div className="hour"></div>
          <div className="minute"></div>
          <div className="second"></div>
        </div>
      </div>
    </div>
  );
}

export default Analogue;

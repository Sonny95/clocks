import "./css/App.css";
import "./css/clocks.css";
import { useState, useEffect } from "react";

function App() {
  //get current time
  const getTime = () => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //if the digital clock under 10 then add 0 front of time.
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    return { hour, minute, second };
  };

  //digi time
  const [time, setTime] = useState(getTime());

  //update every second
  useEffect(() => {
    const interval = setInterval(() => {
      //save time to setTime
      setTime(getTime());
    }, 1000);
    //clear interval before renew second
    return () => clearInterval(interval);
  }, []);

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
    <div className="App">
      <header className="App-header">
        {/* analogueClock */}
        <div className="analogueContainer">
          <div className="clock">
            <div className="hour"></div>
            <div className="minute"></div>
            <div className="second"></div>
          </div>
        </div>
        {/* digitalClock */}
        <div className="digitalContainer">{`${time.hour}:${time.minute}:${time.second}`}</div>
      </header>
    </div>
  );
}

export default App;

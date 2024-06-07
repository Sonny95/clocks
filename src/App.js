import "./css/App.css";
import { useState, useEffect } from "react";
import Analogue from "./components/Analogue";
import Digital from "./components/Digital";

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

  return (
    <div className="App">
      <header className="App-header">
        {/* analogueClock */}
        <Analogue getTime={getTime} />
        {/* digitalClock */}
        <Digital getTime={getTime} />
      </header>
    </div>
  );
}

export default App;

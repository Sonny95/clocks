import "../css/digital.css";
import { useState, useEffect } from "react";

function Digital({ getTime }) {
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

  return <div className="digitalContainer">{`${time.hour}:${time.minute}:${time.second}`}</div>;
}

export default Digital;

// Hooks
import { useEffect, useRef } from "react";

// Components
import TimeControl from "./TimeControl";

//Icons
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

const TimeDisplay = ({
  toggleCounter,
  resetTimer,
  modeStatus,
  pomodoro,
  setPomodoro,
  counterStatus,
  initialTime,
  defaultBreak,
  defaultLongBreak,
}) => {
  useEffect(() => {
    if (counterStatus && pomodoro > 0) {
      var timeOut = setTimeout(() => {
          console.log("Counter status: "+counterStatus);
          setPomodoro(pomodoro - 1);
          console.log(pomodoro);
      }, 1000);
    }

    return () =>{
      clearTimeout(timeOut);
    }
  }, [pomodoro, counterStatus]);

  let minutes = Math.floor(pomodoro / 60);
  let seconds = pomodoro % 60 === 0 ? "00" : pomodoro % 60;

  // Formats the seconds below 10
  if (seconds < 10) {
    seconds = seconds.toString().padStart(2, "0");
  }

  return (
    <div className="time-box">
      <h1>{modeStatus}</h1>

      <div className="time-and-toggles">
        <h1 className="display-box">
          {minutes}:{seconds}
        </h1>
        <div className="toggles">
          <button onClick={toggleCounter}>
            {counterStatus ? <FaPause /> : <FaPlay />}{" "}
          </button>
          <button onClick={resetTimer}>
            <FaStop />
          </button>
        </div>
      </div>

      <TimeControl
        initialTime={initialTime}
        defaultBreak={defaultBreak}
        defaultLongBreak={defaultLongBreak}
      />
    </div>
  );
};

export default TimeDisplay;

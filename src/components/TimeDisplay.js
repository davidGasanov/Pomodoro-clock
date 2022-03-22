// Hooks
import { useEffect } from "react";



import Button from "./utils/Button";


const TimeDisplay = ({
  colorPalette,
  toggleCounter,
  resetTimer,
  pomodoro,
  setPomodoro,
  counterStatus,
}) => {
  useEffect(() => {
    if (counterStatus && pomodoro > 0) {
      var timeOut = setTimeout(() => {
        setPomodoro(pomodoro - 1);
      }, 1000);
    }


    return () => {
      clearTimeout(timeOut);
    };
  }, [pomodoro, counterStatus]);

  let minutes = Math.floor(pomodoro / 60);
  let seconds = pomodoro % 60 === 0 ? "00" : pomodoro % 60;

  // Formats the seconds below 10
  if (seconds < 10) {
    seconds = seconds.toString().padStart(2, "0");
  }

  return (
    <div className="clock-box">
      <div className="time-display-box">
        <span className="time-box">
          {minutes}:{seconds}
        </span>
      </div>
      <div className="toggles">
        <Button
          func={toggleCounter}
          color={colorPalette}
          size="button-large"
          type="play"
          resetTimer={resetTimer}
          counterStatus={counterStatus}
        />
        <Button
          func={resetTimer}
          color={colorPalette}
          size="button-large"
          type="stop"
          resetTimer={resetTimer}
          counterStatus={counterStatus}
        />
      </div>
    </div>
  );
};

export default TimeDisplay;

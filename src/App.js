import "./App.css";

//hooks
import { useState, useEffect } from "react";

//components
import TimeDisplay from "./components/TimeDisplay";
import TimeControl from "./components/TimeControl";

function App() {
  const [initialTime, setInitialTime] = useState(60);
  const [defaultBreak, setDefaultBreak] = useState(60);
  const [defaultLongBreak, setDefaultLongBreak] = useState(60);

  const [pomodoro, setPomodoro] = useState(initialTime);
  const [counterStatus, setCounterStatus] = useState(false);

  // There are 3 mode statuses: pomodoro, break and longBreak. The default is pomodoro.
  const [modeStatus, changeMode] = useState("pomodoro");

  // Amount of completed pomodoros
  const [completedPomodoros, setCompletedPomodoros] = useState(1);

  // useEffect for mode switching
  useEffect(() => {
    if (pomodoro === 0 && modeStatus === "pomodoro") {
      setCompletedPomodoros(completedPomodoros + 1);
      if (completedPomodoros % 4 === 0) {
        setTimeout(() => {
          changeMode("longBreak");
          setPomodoro(defaultLongBreak);
        }, 1000);
      } else {
        setTimeout(() => {
          changeMode("break");
          setPomodoro(defaultLongBreak);
        }, 1000);
      }
    }

    if (
      (pomodoro === 0 && modeStatus === "break") ||
      (pomodoro === 0 && modeStatus === "longBreak")
    ) {
      setTimeout(() => {
        setPomodoro(initialTime);
        changeMode("pomodoro");
      }, 1000);
    }
  }, [pomodoro]);

  useEffect(() => {
    setPomodoro(initialTime);
  }, [initialTime]);

  const toggleCounter = () => {
    setCounterStatus(!counterStatus);
  };

  // Time control
  const addMinute = () => {
    setInitialTime(initialTime + 60);
  };

  const subtractMinute = () => {
    if(initialTime > 60)
    setInitialTime(initialTime - 60);
  };

  const resetTimer = () => {
    setCounterStatus(false);
    setPomodoro(initialTime);
    console.log("resetPomo fired");
  };

  //

  return (
    <div className="App">
      <TimeDisplay
        toggleCounter={toggleCounter}
        resetTimer={resetTimer}
        modeStatus={modeStatus}
        pomodoro={pomodoro}
        setPomodoro={setPomodoro}
        counterStatus={counterStatus}
        initialTime={initialTime}
        defaultBreak={defaultBreak}
        defaultLongBreak={defaultLongBreak}
      />
    </div>
  );
}

export default App;

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

  // There are 3 mode statuses: Work session, Break time and Long break. The default is Work session.
  const [modeStatus, changeMode] = useState("Work session");

  // Color palette according to the mode status
  const [colorPalette, setColorPalette] = useState("red");

  // Amount of completed pomodoros
  const [completedPomodoros, setCompletedPomodoros] = useState(1);

  // useEffect for mode switching
  useEffect(() => {
    if (pomodoro === 0 && modeStatus === "Work session") {
      setCompletedPomodoros(completedPomodoros + 1);
      if (completedPomodoros % 4 === 0) {
        setTimeout(() => {
          changeMode("Long break");
          setPomodoro(defaultLongBreak);
        }, 1000);
      } else {
        setTimeout(() => {
          changeMode("Break time");
          setPomodoro(defaultLongBreak);
        }, 1000);
      }
    }

    if (
      (pomodoro === 0 && modeStatus === "Break time") ||
      (pomodoro === 0 && modeStatus === "Long break")
    ) {
      setTimeout(() => {
        setPomodoro(initialTime);
        changeMode("Work session");
      }, 1000);
    }
  }, [pomodoro]);

  useEffect(() => {
    setPomodoro(initialTime);
  }, [initialTime]);

  const toggleCounter = () => {
    setCounterStatus(!counterStatus);
  };

  const resetTimer = () => {
    setCounterStatus(false);
    setPomodoro(initialTime);
    console.log("resetPomo fired");
  };

  // Time control
  const addMinute = (timeClass) => {
    console.log(timeClass);
    switch (timeClass) {
      case "session":
        setInitialTime(initialTime + 60);
        break
      case "break":
        setDefaultBreak(defaultBreak + 60);
        break
      case "long break":
        setDefaultLongBreak(defaultLongBreak + 60);
        break
    }
  };

  const subtractMinute = (timeClass) => {
    if (initialTime > 60 && defaultBreak > 60 && defaultLongBreak > 60) {
      switch (timeClass) {
        case "session":
          setInitialTime(initialTime - 60);
          break
        case "break":
          setDefaultBreak(defaultBreak - 60);
          break
        case "long break":
          setDefaultLongBreak(defaultLongBreak - 60);
          break
      }
    }
  };

  //

  return (
    <div className="App">
      <h1 className="status-display">{modeStatus}</h1>
      <div className="display-and-control">
        <TimeControl
          colorPalette={colorPalette}
          addMinute={addMinute}
          subtractMinute={subtractMinute}
          initialTime={initialTime}
          defaultBreak={defaultBreak}
          defaultLongBreak={defaultLongBreak}
        />
        <TimeDisplay
          colorPalette={colorPalette}
          toggleCounter={toggleCounter}
          resetTimer={resetTimer}
          modeStatus={modeStatus}
          pomodoro={pomodoro}
          setPomodoro={setPomodoro}
          counterStatus={counterStatus}
        />
        <TimeControl
          colorPalette={colorPalette}
          addMinute={addMinute}
          subtractMinute={subtractMinute}
          initialTime={initialTime}
          defaultBreak={defaultBreak}
          defaultLongBreak={defaultLongBreak}
        />
      </div>
    </div>
  );
}

export default App;

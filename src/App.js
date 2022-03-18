import "./App.css";

//hooks
import { useState, useEffect } from "react";

//components
import TimeDisplay from "./components/TimeDisplay";
import TimeControl from "./components/TimeControl";
import Finishedpomos from "./components/Finishedpomos";


function App() {
  const [initialTime, setInitialTime] = useState(1500);
  const [defaultBreak, setDefaultBreak] = useState(300);
  const [defaultLongBreak, setDefaultLongBreak] = useState(900);

  const [pomodoro, setPomodoro] = useState(initialTime);
  const [counterStatus, setCounterStatus] = useState(false);

  // There are 3 mode statuses: Work session, Break time and Long break. The default is Work session.
  const [modeStatus, changeMode] = useState("Work session");

  // Color palette according to the mode status
  const [colorPalette, setColorPalette] = useState("red");

  // Amount of completed pomodoros
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  // useEffect for mode switching
  useEffect(() => {
    if (pomodoro === 0 && modeStatus === "Work session") {
      setCompletedPomodoros(completedPomodoros + 1);
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
    if (pomodoro === 0 && modeStatus === "Work session") {
      if (completedPomodoros && completedPomodoros % 4 === 0) {
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
  }, [completedPomodoros]);

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
        if (initialTime < 3600) {
          setInitialTime(initialTime + 60);
        }
        break;
      case "break":
        if (defaultBreak < 3600) {
          setDefaultBreak(defaultBreak + 60);
        }
        break;
      case "long break":
        if (defaultBreak < 3600) {
          setDefaultLongBreak(defaultLongBreak + 60);
        }
        break;
    }
  };

  const subtractMinute = (timeClass) => {
    console.log("subtractminute fired");
    switch (timeClass) {
      case "session":
        if (initialTime > 60) {
          setInitialTime(initialTime - 60);
        }
        break;
      case "break":
        if (defaultBreak > 60) {
          setDefaultBreak(defaultBreak - 60);
        }
        break;
      case "long break":
        if (defaultLongBreak > 60) {
          setDefaultLongBreak(defaultLongBreak - 60);
          break;
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
        <Finishedpomos completedPomodoros={completedPomodoros} />
      </div>
    </div>
  );
}

export default App;

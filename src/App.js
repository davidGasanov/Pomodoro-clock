import "./App.css";

// Hooks
import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

// Components
import TimeDisplay from "./components/TimeDisplay";
import TimeControl from "./components/TimeControl";
import Finishedpomos from "./components/Finishedpomos";

// Audio
import Timeout from "./audio/time-out.mp3";

function App() {
  const [initialTime, setInitialTime] = useState(1);
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

  // Timeout sound

  let sound = new Howl({ src: [Timeout] });

  useEffect(() => {
    if (pomodoro === 0 && modeStatus === "Work session") {
      if (completedPomodoros && completedPomodoros % 4 === 0) {
        setTimeout(() => {
          sound.play();
          changeMode("Long break");
          setPomodoro(defaultLongBreak);
        }, 1000);
      } else {
        setTimeout(() => {
          sound.play();
          changeMode("Break time");
          setPomodoro(defaultBreak);
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
    setCompletedPomodoros(0);
    changeMode("Work session");
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
          counterStatus={counterStatus}
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

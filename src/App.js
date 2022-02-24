
import './App.css';
import { useState, useEffect } from 'react';
import TimeDisplay from './components/TimeDisplay';

function App() {

const [initialTime, setInitialTime] = useState(3);
const [breakTime, setBreakTime] = useState(300);

const [pomodoro, setPomodoro] = useState(initialTime); 
const [counterStatus, setCounterStatus] = useState(false);

// There are 3 mode statuses: pomodoro, break and longBreak. The default is pomodoro.
const [modeStatus, changeMode] = useState("pomodoro");


// snapshot of time when the counter is initialized/paused (used to avoid the 1 second delay).

const [timeSnapshot, takeSnapshot] = useState(initialTime)


useEffect(()=>{
  
  if (pomodoro === 0){
    changeMode("break")

  }  
},[pomodoro]
)


useEffect (()=>{
  
  setPomodoro(initialTime);
  takeSnapshot(initialTime);

},
[initialTime]);


const toggleCounter = () =>{
  
  modeStatus
  setCounterStatus(!counterStatus)
  takeSnapshot(pomodoro);
  

}


// Time control 

const addMinute = () =>{

  counterStatus? setInitialTime(pomodoro+60) : setInitialTime(initialTime+60);
  
  }
  

const subtractMinute = () =>{

  counterStatus? setInitialTime(pomodoro-60) : setInitialTime(initialTime-60);
    
}


const resetTimer = () =>{
  setCounterStatus(false);
  setPomodoro(initialTime);
}


  return (
    <div className="App">

      <TimeDisplay modeStatus={modeStatus} pomodoro={counterStatus? pomodoro : timeSnapshot} setPomodoro={setPomodoro} 
      breakTime={breakTime} setBreakTime={setBreakTime} counterStatus={counterStatus}/>
      <button onClick={toggleCounter}>Toggle</button>
      <button onClick={addMinute}>Add 1 minute</button>
      <button onClick={subtractMinute}>Subtract 1 minute</button>
      <button onClick={resetTimer}>Reset</button>
      
    </div>
  );
}

export default App;


import './App.css';
import { useState, useEffect } from 'react';
import TimeDisplay from './components/TimeDisplay';

function App() {

const [initialTime, setInitialTime] = useState(1500)
const [pomodoro, setPomodoro] = useState(initialTime); 
const [counterStatus, setCounterStatus] = useState(false);

// snapshot of time when the counter is initialized/paused (used to avoid the 1 second delay)

const [timeSnapshot, takeSnapshot] = useState(initialTime)


useEffect(()=>{

  console.log("pomodoro: " + pomodoro)

  if(counterStatus){
    if (pomodoro + 60 > initialTime){
     let timeOut = setTimeout(()=>{
      setPomodoro(pomodoro-1) 
      console.log(timeOut);
  },1000)
}
}


},[pomodoro,counterStatus])


useEffect (()=>{
  
  setPomodoro(initialTime);
  takeSnapshot(initialTime);

},
[initialTime]);


const toggleCounter = () =>{
  
  setCounterStatus(!counterStatus)
  takeSnapshot(pomodoro);

}

const addMinute = () =>{

  setInitialTime(pomodoro+60);
}

  return (
    <div className="App">

      <TimeDisplay pomodoro={counterStatus? pomodoro : timeSnapshot}/>
      <button onClick={toggleCounter}>Toggle</button>
      <button onClick={addMinute}>Add 1 minute</button>
      
    </div>
  );
}

export default App;

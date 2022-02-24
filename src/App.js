
import './App.css';
import { useState, useEffect } from 'react';
import TimeDisplay from './components/TimeDisplay';

function App() {

const [initialTime, setInitialTime] = useState(1500)
const [pomodoro, setPomodoro] = useState(initialTime); 
const [counterStatus, setCounterStatus] = useState(false);


// snapshot of time when the counter is initialized/paused (used to avoid the 1 second delay)

const [timeSnapshot, takeSnapshot] = useState(initialTime)




useEffect (()=>{
  
  setPomodoro(initialTime);
  takeSnapshot(initialTime);

},
[initialTime]);


const toggleCounter = () =>{
  
  setCounterStatus(!counterStatus)
  takeSnapshot(pomodoro);

}


// Time control 

const subtractMinute = () =>{

  counterStatus? setInitialTime(pomodoro-60) : setInitialTime(initialTime-60);
  
  }


  return (
    <div className="App">

      <TimeDisplay pomodoro={counterStatus? pomodoro : timeSnapshot} setPomodoro={setPomodoro} counterStatus={counterStatus}/>
      <button onClick={toggleCounter}>Toggle</button>
      <button onClick={addMinute}>Add 1 minute</button>

      
    </div>
  );
}

export default App;

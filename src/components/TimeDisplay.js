
import { useEffect } from "react";

const TimeDisplay = ({modeStatus, pomodoro, setPomodoro, breakTime, setBreakTime, counterStatus}) => {

  console.log(modeStatus, breakTime);

useEffect(()=>{

  if(counterStatus){

    if(modeStatus == "pomodoro"){
      const timeOut = setTimeout(()=>{
      setPomodoro(pomodoro-1) 
  },1000)
    clearTimeout(timeOut-1);
} else if( modeStatus == "break"){

  console.log("breakTimeOut fired");

  const timeOut = setTimeout(()=>{
    setBreakTime(breakTime-1) 
},1000)
    clearTimeout(timeOut-1);
}



}


},[pomodoro, breakTime, counterStatus])

let timeVar

switch(modeStatus){

  case "pomodoro":

    timeVar = pomodoro;
    break;

  case "break":

    timeVar = breakTime;
    break;
} 

let minutes = Math.floor(timeVar / 60);
let seconds = timeVar % 60 === 0? "00" : timeVar % 60;

if (seconds < 10){ 
  seconds = seconds.toString().padStart(2, '0');
}

  return (
    <div className="display-box">{minutes}:{seconds}</div>
  )
}

export default TimeDisplay

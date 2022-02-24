
import { useEffect } from "react";

const TimeDisplay = ({pomodoro, setPomodoro, counterStatus}) => {

useEffect(()=>{

  if(counterStatus){

      const timeOut = setTimeout(()=>{
      setPomodoro(pomodoro-1) 
      
  },1000)

  console.log(timeOut);

  clearTimeout(timeOut-1);

}


},[pomodoro, counterStatus])


let minutes = Math.floor(pomodoro / 60);
let seconds = pomodoro % 60 === 0? "00" : pomodoro % 60;

  return (
    <div className="display-box">{minutes}:{seconds}</div>
  )
}

export default TimeDisplay

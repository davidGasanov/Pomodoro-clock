
import { useEffect } from "react";

const TimeDisplay = ({pomodoro}) => {

useEffect(()=>{



},)


let minutes = Math.floor(pomodoro / 60);
let seconds = pomodoro % 60 === 0? "00" : pomodoro % 60;

  return (
    <div className="display-box">{minutes}:{seconds}</div>
  )
}

export default TimeDisplay

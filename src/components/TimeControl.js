  import {FiChevronUp, FiChevronDown} from "react-icons/fi";
  import Button from "./utils/Button";



const TimeControl = ({counterStatus, initialTime, defaultBreak, defaultLongBreak, addMinute, subtractMinute, colorPalette}) => {
  
  
  return (
    <div className="time-card-div">
      
    <ul  className="time-card">
      <li className="time-card-title" style={{gridArea: "h"}}>Session</li>
      <span style={{gridArea: "l"}} className="divider"/>
      <li className="time-card-item" style={{gridArea: "u"}}>
        <Button
          func={()=>{addMinute('session')}}
          color={colorPalette}
          size="button-small"
          type="up"
          counterStatus={counterStatus}
        />
        </li>
      <li className="time-card-item" style={{gridArea: "t"}}>{initialTime/60}:00</li>
      <li className="time-card-item" style={{gridArea: "d"}}>
      <Button
          func={()=>{subtractMinute('session')}}
          color={colorPalette}
          size="button-small"
          type="down"
          counterStatus={counterStatus}
        />  
      </li>
    </ul>
    <ul  className="time-card">
      <li className="time-card-title" style={{gridArea: "h"}}>Break</li>
      <span style={{gridArea: "l"}} className="divider"/>
      <li className="time-card-item" style={{gridArea: "u"}}>
        <Button
          func={()=>{addMinute('break')}}
          color={colorPalette}
          size="button-small"
          type="up"
          counterStatus={counterStatus}
        />
        </li>
      <li className="time-card-item" style={{gridArea: "t"}}>{defaultBreak/60}:00</li>
      <li className="time-card-item" style={{gridArea: "d"}}>
      <Button
          func={()=>{subtractMinute('break')}}
          color={colorPalette}
          size="button-small"
          type="down"
          counterStatus={counterStatus}
        />  
      </li>
    </ul>
    <ul  className="time-card">
      <li className="time-card-title" style={{gridArea: "h"}}>Long break</li>
      <span style={{gridArea: "l"}} className="divider"/>
      <li className="time-card-item" style={{gridArea: "u"}}>
        <Button
          func={()=>{addMinute('long break')}}
          color={colorPalette}
          size="button-small"
          type="up"
          counterStatus={counterStatus}
        />
        </li>
      <li className="time-card-item" style={{gridArea: "t"}}>{defaultLongBreak/60}:00</li>
      <li className="time-card-item" style={{gridArea: "d"}}>
      <Button
          func={()=>{subtractMinute('long break')}}
          color={colorPalette}
          size="button-small"
          type="down"
          counterStatus={counterStatus}
        />  
      </li>
    </ul>

    </div>
  )
}

export default TimeControl
  import {FiChevronUp, FiChevronDown} from "react-icons/fi";
  import Button from "./utils/Button";



const TimeControl = ({initialTime, defaultBreak, defaultLongBreak, addMinute, subtractMinute, colorPalette}) => {
  
  
  return (
    <div className="time-card-div">
      
    <ul  className="time-card">
      <li className="time-card-title" style={{gridArea: "h"}}>Session length</li>
      <li className="time-card-item" style={{gridArea: "u"}}>
        <Button
          func={()=>{addMinute('session')}}
          color={colorPalette}
          size="button-small"
          type="up"
        />
        </li>
      <li className="time-card-item" style={{gridArea: "t"}}>{initialTime/60}</li>
      <li className="time-card-item" style={{gridArea: "d"}}>
      <Button
          func={()=>{subtractMinute('session')}}
          color={colorPalette}
          size="button-small"
          type="down"
        />  
      </li>
    </ul>
    <ul  className="time-card">
      <li style={{gridArea: "h"}}>Break length</li>
      <li style={{gridArea: "u"}}><button><FiChevronUp/></button></li>
      <li style={{gridArea: "t"}}>{defaultBreak/60}</li>
      <li style={{gridArea: "d"}}><button><FiChevronDown/></button></li>
    </ul>
    <ul  className="time-card">
      <li style={{gridArea: "h"}}>Long break length</li>
      <li style={{gridArea: "u"}}><button><FiChevronUp/></button></li>
      <li style={{gridArea: "t"}}>{defaultLongBreak/60}</li>
      <li style={{gridArea: "d"}}><button><FiChevronDown/></button></li>
    </ul>

    </div>
  )
}

export default TimeControl
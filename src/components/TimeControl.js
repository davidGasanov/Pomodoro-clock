import {FiChevronUp, FiChevronDown} from "react-icons/fi";


const TimeControl = ({initialTime, defaultBreak, defaultLongBreak}) => {
  
  
  return (
    <div className="time-card-div">
      
    <ul  className="time-card">
      <li style={{gridArea: "h"}}>Session</li>
      <li style={{gridArea: "u"}}><button><FiChevronUp/></button></li>
      <li style={{gridArea: "t"}}>{initialTime/60}</li>
      <li style={{gridArea: "d"}}><button><FiChevronDown/></button></li>
    </ul>
    <ul  className="time-card">
      <li style={{gridArea: "h"}}>Break</li>
      <li style={{gridArea: "u"}}><button><FiChevronUp/></button></li>
      <li style={{gridArea: "t"}}>{defaultBreak/60}</li>
      <li style={{gridArea: "d"}}><button><FiChevronDown/></button></li>
    </ul>
    <ul  className="time-card">
      <li style={{gridArea: "h"}}>Long break</li>
      <li style={{gridArea: "u"}}><button><FiChevronUp/></button></li>
      <li style={{gridArea: "t"}}>{defaultLongBreak/60}</li>
      <li style={{gridArea: "d"}}><button><FiChevronDown/></button></li>
    </ul>

    </div>
  )
}

export default TimeControl
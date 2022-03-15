import {FiChevronUp, FiChevronDown} from "react-icons/fi";


const TimeControl = ({initialTime, defaultBreak, defaultLongBreak}) => {
  
  
  return (
    <div className="time-card-div">
      
    <ul  className="time-card">
      <li className="time-card-title" style={{gridArea: "h"}}>Session length</li>
      <li style={{gridArea: "u"}}><button><FiChevronUp/></button></li>
      <li style={{gridArea: "t"}}>{initialTime/60}</li>
      <li style={{gridArea: "d"}}><button><FiChevronDown/></button></li>
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
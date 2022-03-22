import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Button from "./utils/Button";

const TimeControl = ({
  counterStatus,
  initialTime,
  defaultBreak,
  defaultLongBreak,
  addMinute,
  subtractMinute,
  colorPalette,
}) => {
  return (
    <div className="time-card-div">
      <ul className="time-card">
        <li className="time-card-title">Session</li>
        <span className="divider" />
        <div className="time-toggles">
          <li className="time-card-item">
            <Button
              func={() => {
                addMinute("session");
              }}
              color={colorPalette}
              size="button-small"
              type="up"
              counterStatus={counterStatus}
            />
          </li>
          <li className="time-card-indicator">{initialTime / 60}:00</li>
          <li className="time-card-item">
            <Button
              func={() => {
                subtractMinute("session");
              }}
              color={colorPalette}
              size="button-small"
              type="down"
              counterStatus={counterStatus}
            />
          </li>
        </div>
      </ul>
      <ul className="time-card">
        <li className="time-card-title">Break</li>
        <span className="divider" />
        <div className="time-toggles">
          <li className="time-card-item">
            <Button
              func={() => {
                addMinute("break");
              }}
              color={colorPalette}
              size="button-small"
              type="up"
              counterStatus={counterStatus}
            />
          </li>
          <li className="time-card-indicator">{defaultBreak / 60}:00</li>
          <li className="time-card-item">
            <Button
              func={() => {
                subtractMinute("break");
              }}
              color={colorPalette}
              size="button-small"
              type="down"
              counterStatus={counterStatus}
            />
          </li>
        </div>
      </ul>
      <ul className="time-card">
        <li className="time-card-title">Long break</li>
        <span className="divider" />
        <div className="time-toggles">
          <li className="time-card-item">
            <Button
              func={() => {
                addMinute("long break");
              }}
              color={colorPalette}
              size="button-small"
              type="up"
              counterStatus={counterStatus}
            />
          </li>
          <li className="time-card-indicator">{defaultLongBreak / 60}:00</li>
          <li className="time-card-item">
            <Button
              func={() => {
                subtractMinute("long break");
              }}
              color={colorPalette}
              size="button-small"
              type="down"
              counterStatus={counterStatus}
            />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default TimeControl;

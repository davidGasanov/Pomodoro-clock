import React from "react";
import pomosmall from '../imgs/pomo-1.svg'
import Tomato from "./imgs/Tomato";
import { useMediaQuery } from "react-responsive";


const Pomodoroinfo = () => {
  return (
    <div className="pomoinfo-container">
      <div className="pomoinfo-section">
        <h2 className="pomoinfo-title">What is the pomodoro technique?</h2>
        <p className="pomoinfo-paragraph">
        {"  "}The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. It uses a timer to break work
          into intervals, typically 25 minutes in length, separated by short
          breaks. Each interval is known as a pomodoro, from the Italian word
          for tomato, after the tomato-shaped kitchen timer Cirillo used as a
          university student.
        </p>
      </div>

      <div className="pomoinfo-section">
        <h2 className="pomoinfo-title">
          The original technique has six steps:
        </h2>

        <ol className="pomoinfo-steps">
          <li className="pomoinfo-step">Decide on the task to be done.</li>
          <li className="pomoinfo-step">
            Set the pomodoro timer (typically for 25 minutes).
          </li>
          <li className="pomoinfo-step">Work on the task.</li>
          <li className="pomoinfo-step">
            End work when the timer rings and take a short break (typically 5–10
            minutes).
          </li>
          <li className="pomoinfo-step">
            {" "}
            If you have finished fewer than three pomodoros, go back to Step 2
            and repeat until you go through all three pomodoros.{" "}
          </li>
          <li className="pomoinfo-step">
            {" "}
            If you have finished fewer than three pomodoros, go back to Step 2
            and repeat until you go through all three pomodoros.{" "}
          </li>
          <li className="pomoinfo-step">
            {" "}
            After three pomodoros are done, take the fourth pomodoro and then
            take a long break (typically 20 to 30 minutes). Once the long break
            is finished, return to step 2.{" "}
          </li>
        </ol>
      </div>

      <div className="pomoinfo-section">
        <h2 className="pomoinfo-title">Additional suggestions:</h2>
        <p className="pomoinfo-paragraph">
        {"  "}The stages of planning, tracking, recording, processing and
          visualizing are fundamental to the technique. In the planning
          phase, tasks are prioritized by recording them in a "To Do Today"
          list, enabling users to estimate the effort they will require. As
          pomodoros are completed, they are recorded, adding to a sense of
          accomplishment and providing raw data for subsequent self-observation
          and improvement.
        </p>
      </div>
      <Tomato size='110' color='white' id={1} />
      <Tomato size='220' color='white' id={2} stroke={true} strokeSize={1}/>
      <Tomato size='710' color='white' id={3} />

      <div className="credits">
        <h2 className="credits-title">Website design and development by:</h2>
        <p>David Gasanov</p>
      </div>

    </div>
  );
};

export default Pomodoroinfo;

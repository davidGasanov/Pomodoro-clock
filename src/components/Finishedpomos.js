import React from "react";

const Finishedpomos = ({completedPomodoros}) => {
  return (
    <div className="finished-pomos-container">
      <h2 className="finished-pomos-title">Sessions completed</h2>
      <span className="divider" />
    <p className="finished-pomos-count">{completedPomodoros}</p>
    </div>
  );
};

export default Finishedpomos;

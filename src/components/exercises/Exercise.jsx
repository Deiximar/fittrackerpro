import React from "react";
import "./exercise.scss";

function Exercise({ exercise }) {
  return (
    <div className="exercise-container">
      <img
        src={`images/${exercise.gifPath}`}
        alt={exercise.name}
        className="exercise-image"
      />
      <div>
        <h4>{exercise.name}</h4>
        <h6>{exercise.bodyPart}</h6>
      </div>
    </div>
  );
}

export default Exercise;

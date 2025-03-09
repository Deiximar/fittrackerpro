import React from "react";
import "./exerciseCard.scss";

function ExerciseCard({ exercise }) {
  return (
    <div className="exercise-card-container">
      <img
        src={`images/${exercise.gifPath}`}
        alt={exercise.name}
        className="exercise-image"
      />
      <div>
        <h4 className="exercise-title">{exercise.name}</h4>
        <h6 className="exercise-subtitle">{exercise.bodyPart}</h6>
      </div>
    </div>
  );
}

export default ExerciseCard;

import React from "react";
import RoutineWidget from "./RoutineWidget";
import AddRoutineButton from "../buttons/AddRoutineButton";
import "./startWorkout.scss";
function StartWorkoutComponent() {
  return (
    <div className="start-workout-container">
      <h2 className="title">Start Workout</h2>

      <div className="routines">
        <div className="routine-container">
          <div className="header">
            <h3 className="subtitle">My Routines</h3>
            <AddRoutineButton />
          </div>

          <div className="routine-list">
            <RoutineWidget />
            <RoutineWidget />
            <RoutineWidget />
          </div>
        </div>

        <div className="routine-container">
          <h3 className="subtitle">Routines</h3>
          <div className="routine-list">
            <RoutineWidget />
            <RoutineWidget />
            <RoutineWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartWorkoutComponent;

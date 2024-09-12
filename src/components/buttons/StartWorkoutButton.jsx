import { NavLink } from "react-router-dom";
import StartWorkoutIcon from "../icons/StartWorkoutIcon";
import "./iconButton.scss";

function StartWorkoutButton() {
  return (
    <NavLink to="/start-workout" className="icon-button-container">
      <StartWorkoutIcon className="icon" />
      <p className="icon-text">Start Workout</p>
    </NavLink>
  );
}

export default StartWorkoutButton;

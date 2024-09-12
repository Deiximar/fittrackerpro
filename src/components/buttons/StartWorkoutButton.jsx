import { NavLink } from "react-router-dom";
import PlusIcon from "../icons/PlusIcon";
import "./iconButton.scss";

function StartWorkoutButton() {
  return (
    <NavLink to="/start-workout" className="icon-button-container">
      <PlusIcon className="icon" />
      <p className="icon-text">Start Workout</p>
    </NavLink>
  );
}

export default StartWorkoutButton;

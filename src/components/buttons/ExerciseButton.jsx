import { NavLink } from "react-router-dom";
import ExerciseIcon from "../icons/ExerciseIcon";
import "./iconButton.scss";

function ExerciseButton() {
  return (
    <NavLink to="/exercises" className="icon-button-container">
      <ExerciseIcon className="icon" />
      <p className="icon-text">Exercises</p>
    </NavLink>
  );
}

export default ExerciseButton;

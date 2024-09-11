import { Link } from "react-router-dom";
import ExerciseIcon from "../icons/ExerciseIcon";
import "./iconButton.scss";

function ExerciseButton() {
  return (
    <Link to="/exercises" className="icon-button-container">
      <ExerciseIcon className="icon" />
      <p className="icon-text">Exercises</p>
    </Link>
  );
}

export default ExerciseButton;

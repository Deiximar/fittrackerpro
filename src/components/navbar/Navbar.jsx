import HistoryButton from "../Buttons/HistoryButton";
import StartWorkoutButton from "../Buttons/StartWorkoutButton";
import ExerciseButton from "../Buttons/ExerciseButton";
import ProfileButton from "../buttons/ProfileButton";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <ProfileButton />
        </li>
        {/* <li>
          <HistoryButton />
        </li> */}
        <li>
          <StartWorkoutButton />
        </li>
        <li>
          <ExerciseButton />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

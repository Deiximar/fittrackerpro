import { Link } from "react-router-dom";
import ProfileIcon from "../icons/ProfileIcon";
import "./iconButton.scss";

function ProfileButton() {
  return (
    <Link to="/profile" className="icon-button-container">
      <ProfileIcon className="icon" />
      <p className="icon-text">Profile</p>
    </Link>
  );
}

export default ProfileButton;

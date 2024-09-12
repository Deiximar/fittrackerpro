import { NavLink } from "react-router-dom";
import ProfileIcon from "../icons/ProfileIcon";
import "./iconButton.scss";

function ProfileButton() {
  return (
    <NavLink to="/profile" className="icon-button-container">
      <ProfileIcon className="icon" />
      <p className="icon-text">Profile</p>
    </NavLink>
  );
}

export default ProfileButton;

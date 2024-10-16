import { NavLink } from "react-router-dom";
import HistoryIcon from "../icons/HistoryIcon";
import "./_IconButton.scss";

function HistoryButton() {
  return (
    <NavLink to="/history" className="icon-button-container">
      <HistoryIcon className="icon" />
      <p className="icon-text">History</p>
    </NavLink>
  );
}

export default HistoryButton;

import { Link } from "react-router-dom";
import HistoryIcon from "../icons/HistoryIcon";
import "./iconButton.scss";

function HistoryButton() {
  return (
    <Link to="/history" className="icon-button-container">
      <HistoryIcon className="icon" />
      <p className="icon-text">History</p>
    </Link>
  );
}

export default HistoryButton;

import RulerIcon from "../icons/RulerIcon";
import "./_iconButton.scss";
function RulerButton({ onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <RulerIcon className="icon" />
    </button>
  );
}

export default RulerButton;

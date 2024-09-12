import { BsClockFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./icons.scss";
function HistoryIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BsClockFill />
    </IconContext.Provider>
  );
}

export default HistoryIcon;

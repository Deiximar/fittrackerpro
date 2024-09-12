import { BiPlus } from "react-icons/bi";
import { IconContext } from "react-icons";

function StartWorkoutIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BiPlus />
    </IconContext.Provider>
  );
}

export default StartWorkoutIcon;

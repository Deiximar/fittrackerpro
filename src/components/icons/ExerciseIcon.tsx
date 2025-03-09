import { IoIosFitness } from "react-icons/io";
import { IconContext } from "react-icons";
import "./icons.scss";
function ExerciseIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <IoIosFitness />
    </IconContext.Provider>
  );
}

export default ExerciseIcon;

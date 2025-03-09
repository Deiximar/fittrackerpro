import { BiPlus } from "react-icons/bi";
import { IconContext } from "react-icons";

function PlusIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BiPlus />
    </IconContext.Provider>
  );
}

export default PlusIcon;

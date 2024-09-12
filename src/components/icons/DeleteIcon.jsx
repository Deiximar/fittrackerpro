import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./icons.scss";
function DeleteIcon() {
  return (
    <IconContext.Provider value={{ className: "icon, deleteIcon" }}>
      <AiOutlineClose />
    </IconContext.Provider>
  );
}

export default DeleteIcon;

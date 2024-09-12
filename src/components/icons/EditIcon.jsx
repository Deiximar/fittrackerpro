import { BiSolidPencil } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./icons.scss";
function EditIcon() {
  return (
    <IconContext.Provider value={{ className: "icon, editIcon" }}>
      <BiSolidPencil />
    </IconContext.Provider>
  );
}

export default EditIcon;

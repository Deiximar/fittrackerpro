import { BiSolidUser } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./icons.scss";
function ProfileIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BiSolidUser />
    </IconContext.Provider>
  );
}

export default ProfileIcon;

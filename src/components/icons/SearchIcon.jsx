import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./icons.scss";
function SearchIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BsSearch />
    </IconContext.Provider>
  );
}

export default SearchIcon;

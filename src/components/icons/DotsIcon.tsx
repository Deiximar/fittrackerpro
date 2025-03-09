import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./icons.scss";
function DotsIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BiDotsHorizontalRounded />
    </IconContext.Provider>
  );
}

export default DotsIcon;

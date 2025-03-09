import React from "react";
import { BiLogOutCircle } from "react-icons/bi";

import { IconContext } from "react-icons";
function LogOutIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BiLogOutCircle />
    </IconContext.Provider>
  );
}

export default LogOutIcon;

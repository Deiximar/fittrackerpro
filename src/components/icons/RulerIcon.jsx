import React from "react";
import { FaRuler } from "react-icons/fa6";
import { IconContext } from "react-icons";
function RulerIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <FaRuler />
    </IconContext.Provider>
  );
}

export default RulerIcon;

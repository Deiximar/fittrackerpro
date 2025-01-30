import React from "react";
import { BiCalendar } from "react-icons/bi";
import { IconContext } from "react-icons";
function CalendarIcon() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <BiCalendar />
    </IconContext.Provider>
  );
}

export default CalendarIcon;

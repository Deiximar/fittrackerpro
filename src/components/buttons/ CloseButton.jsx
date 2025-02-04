import React from "react";
import DeleteIcon from "../icons/DeleteIcon";
import "./_iconButton.scss";
function CloseButton({ onClick }) {
  return (
    <button className="icon-button" onClick={onClick}>
      <DeleteIcon className="icon" />
    </button>
  );
}

export default CloseButton;

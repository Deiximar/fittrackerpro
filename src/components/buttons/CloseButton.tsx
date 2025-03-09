import React from "react";
import DeleteIcon from "../icons/DeleteIcon";
import "./_iconButton.scss";

interface CloseButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button className="icon-button" onClick={onClick}>
      <DeleteIcon />
    </button>
  );
}

export default CloseButton;

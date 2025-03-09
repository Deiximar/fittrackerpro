import { useEffect, useState } from "react";
import DotsIcon from "../icons/DotsIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

function ActionButton() {
  const [showActions, setShowActions] = useState(false);

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".action-button-container")) return;
    setShowActions(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="actions-wrapper">
      <button className="action-button-container" onClick={toggleActions}>
        <DotsIcon />
      </button>

      {showActions && (
        <div className="actions">
          <ul>
            <li>
              <EditIcon />
              Edit Routine
            </li>
            <li>
              <DeleteIcon />
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActionButton;

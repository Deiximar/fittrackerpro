import "./RoutineWidget.scss";
import ActionButton from "../buttons/ActionButton";

function RoutineWidget() {
  return (
    <div className="routine-widget-container">
      <div className="header">
        <h4>Rutina nombre</h4>
        <ActionButton />
      </div>
      <p>exercise, exercise, exercises</p>
    </div>
  );
}

export default RoutineWidget;

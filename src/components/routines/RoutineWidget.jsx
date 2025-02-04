import "./RoutineWidget.scss";
import ActionButton from "../buttons/ActionButton";

function RoutineWidget({ routine }) {
  const getExerciseNames = () => {
    if (routine.routineExercises.length > 0) {
      const exerciseNames = routine.routineExercises.map(
        (exercise) => exercise.exercise.name
      );
      return exerciseNames.join(", ");
    } else {
      return "No exercises added";
    }
  };
  return (
    <div className="routine-widget-container">
      <div className="header">
        <h4>{routine.name}</h4>
        <ActionButton />
      </div>
      <p>{getExerciseNames()}</p>
    </div>
  );
}

export default RoutineWidget;

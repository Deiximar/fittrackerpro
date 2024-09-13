import "./RoutineWidget.scss";
import ActionButton from "../buttons/ActionButton";

function RoutineWidget({ routine }) {
  const getExerciseNames = () => {
    if (routine.routineExercises) {
      const exerciseNames = routine.routineExercises.map(
        (exercise) => exercise.exerciseName
      );
      return exerciseNames.join(", ");
    }
    return "";
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

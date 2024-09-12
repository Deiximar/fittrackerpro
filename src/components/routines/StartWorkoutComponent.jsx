import React from "react";
import RoutineWidget from "./RoutineWidget";
import AddRoutineButton from "../buttons/AddRoutineButton";
import { useQuery } from "@tanstack/react-query";
import { fetchRoutines, fetchUserRoutines } from "../../service/routineApi";
import { useAuth } from "../../context/authContext";
import "./startWorkout.scss";

function StartWorkoutComponent() {
  const { isAuthenticated } = useAuth();

  const {
    data: routines,
    status: routinesStatus,
    error: routinesError,
  } = useQuery({
    queryKey: ["routine"],
    queryFn: fetchRoutines,
  });

  const {
    data: userRoutines,
    status: userRoutinesStatus,
    error: userRoutinesError,
  } = useQuery({
    queryKey: ["userRoutines"],
    queryFn: fetchUserRoutines,
    enabled: isAuthenticated,
  });
  console.log("user", userRoutines);
  console.log("other", routines);

  return (
    <div className="start-workout-container">
      <h2 className="title">Start Workout</h2>

      <div className="routines">
        {isAuthenticated && (
          <div className="routine-container">
            <div className="header">
              <h3 className="subtitle">My Routines</h3>
              <AddRoutineButton />
            </div>

            <div className="routine-list">
              {userRoutinesStatus === "loading" ? (
                <p>Loading user routines...</p>
              ) : userRoutinesStatus === "error" ? (
                <p>Error loading user routines: {userRoutinesError.message}</p>
              ) : (
                userRoutines?.map((routine) => (
                  <RoutineWidget key={routine.id} routine={routine} />
                ))
              )}
            </div>
          </div>
        )}

        <div className="routine-container">
          <h3 className="subtitle">Routines</h3>
          <div className="routine-list">
            {routinesStatus === "loading" ? (
              <p>Loading routines...</p>
            ) : routinesStatus === "error" ? (
              <p>Error loading routines: {routinesError.message}</p>
            ) : (
              routines?.map((routine) => (
                <RoutineWidget key={routine.id} routine={routine} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartWorkoutComponent;

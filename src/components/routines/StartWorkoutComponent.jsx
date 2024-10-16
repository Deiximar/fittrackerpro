import React from "react";
import RoutineWidget from "./RoutineWidget";
import AddRoutineButton from "../buttons/AddRoutineButton";
import {
  useQuery,
  useInfiniteQuery,
  keepPreviousData,
} from "@tanstack/react-query";
import { fetchRoutines, fetchUserRoutines } from "../../service/routineApi";
import { useAuth } from "../../context/authContext";
import "./startWorkout.scss";
import { useState } from "react";

function StartWorkoutComponent() {
  const [page, setPage] = useState(0);

  const { isAuthenticated, token } = useAuth();
  const {
    data: routines,
    fetchNextPage: fetchNextPageRoutine,
    hasNextPage: hasNextPageRoutine,
    isFetchingNextPage: isFetchingNextPageRoutine,
    status: routinesStatus,
    error: routinesError,
  } = useQuery({
    queryFn: () => fetchRoutines(page),
  });

  const {
    data: userRoutines,
    status: userRoutinesStatus,
    error: userRoutinesError,
  } = useQuery({
    queryKey: ["userRoutines", token, page],
    queryFn: fetchUserRoutines,
    enabled: isAuthenticated && !!token,
    placeholderData: keepPreviousData,
  });

  console.log({ userRoutines, routines });

  return (
    <div className="start-workout-container">
      <h2 className="title">Start Workout</h2>

      <div className="routines">
        {isAuthenticated && !!token && (
          <div className="routine-container">
            <div className="header">
              <h3 className="subtitle">My Routines</h3>
              {/* <AddRoutineButton /> */}
            </div>

            <div className="routine-list">
              {userRoutinesStatus === "loading" ? (
                <p>Loading user routines...</p>
              ) : userRoutinesStatus === "error" ? (
                <p>Error loading user routines: {userRoutinesError.message}</p>
              ) : (
                userRoutines?.content?.map((routine) => (
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
              routines?.content?.map((routine) => (
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

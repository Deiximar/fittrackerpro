import { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchExercises } from "../../service/exerciseApi";
import SearchIcon from "../icons/SearchIcon";
import "./exercise.scss";
function ExcersiceList() {
  const [searchText, setSearchText] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [equipment, setEquipment] = useState("");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["filteredExercises", bodyPart, equipment, searchText],
    queryFn: fetchExercises,
    getNextPageParam: (lastPage) => {
      if (!lastPage.last) {
        return lastPage.pageable.pageNumber + 1;
      } else {
        return undefined;
      }
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10 &&
        hasNextPage
      ) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Limpiar el evento
  }, [hasNextPage, fetchNextPage]);

  if (status === "loading") return <p>Loading exercises...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;

  const content = data?.pages?.map((todos) =>
    todos.content.map((todo) => {
      return <ExerciseCard key={todo.id} exercise={todo} />;
    })
  );

  return (
    <div className="exercise-container">
      <h2 className="title">Exercises</h2>

      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchIcon className="search-icon" />
        </div>
        <div className="selectors">
          <select
            value={bodyPart}
            onChange={(e) => setBodyPart(e.target.value)}
          >
            <option value="">Any Body Part</option>
            <option value="back">Back</option>
            <option value="cardio">Cardio</option>
            <option value="chest">Chest</option>
            <option value="lower arms">Lower Arms</option>
            <option value="lower legs">Lower Legs</option>
            <option value="neck">Neck</option>
            <option value="shoulders">Shoulders</option>
            <option value="upper arms">Upper Arms</option>
            <option value="upper legs">Upper Legs</option>
            <option value="waist">Waist</option>
          </select>

          <select
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          >
            <option value="">Any Equipment</option>
            <option value="assisted">Assisted</option>
            <option value="band">Band</option>
            <option value="barbell">Barbell</option>
            <option value="body weight">Body Weight</option>
            <option value="bosu ball">Bosu Ball</option>
            <option value="cable">Cable</option>
            <option value="dumbbell">Dumbbell</option>
            <option value="elliptical machine">Elliptical Machine</option>
            <option value="ez barbell">EZ Barbell</option>
            <option value="hammer">Hammer</option>
            <option value="kettlebell">Kettlebell</option>
            <option value="leverage machine">Leverage Machine</option>
            <option value="medicine ball">Medicine Ball</option>
            <option value="olympic barbell">Olympic Barbell</option>
            <option value="resistance band">Resistance Band</option>
            <option value="roller">Roller</option>
            <option value="rope">Rope</option>
            <option value="skierg machine">Skierg Machine</option>
            <option value="sled machine">Sled Machine</option>
            <option value="smith machine">Smith Machine</option>
            <option value="stability ball">Stability Ball</option>
            <option value="stationary bike">Stationary Bike</option>
            <option value="stepmill machine">Stepmill Machine</option>
            <option value="tire">Tire</option>
            <option value="trap bar">Trap Bar</option>
            <option value="upper body ergometer">Upper Body Ergometer</option>
            <option value="weighted">Weighted</option>
            <option value="wheel roller">Wheel Roller</option>
          </select>
        </div>

        <div className="exercise-list-container">{content}</div>
      </div>
    </div>
  );
}

export default ExcersiceList;

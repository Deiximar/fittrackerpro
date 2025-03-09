import axios from "axios";
import { GET_EXERCISES } from "../config/url";

export const fetchExercises = async ({ pageParam = 0, queryKey }) => {
  const [_key, bodyPart, equipment, searchText] = queryKey;

  const res = await axios.get(GET_EXERCISES, {
    params: {
      page: pageParam,
      size: 10,
      bodyPart: bodyPart || undefined,
      equipment: equipment || undefined,
      searchText: searchText || undefined,
    },
  });
  return res.data;
};

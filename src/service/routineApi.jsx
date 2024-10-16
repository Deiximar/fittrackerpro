import axios from "axios";
import { GET_ROUTINES, GET_USER_ROUTINES } from "../config/url";

export const fetchRoutines = async (pageParam = 0) => {
  const res = await axios.get(GET_ROUTINES, {
    params: {
      page: pageParam,
      size: 4,
    },
  });
  console.log(res);
  return res.data;
};

export const fetchUserRoutines = async ({ queryKey }) => {
  const [_key, token, pageParam] = queryKey;
  let headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await axios.get(GET_USER_ROUTINES, {
    headers,
    params: {
      page: pageParam,
      size: 4,
    },
  });
  return res.data;
};

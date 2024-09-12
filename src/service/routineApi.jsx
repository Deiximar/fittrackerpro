import axios from "axios";
import { GET_ROUTINES, GET_USER_ROUTINES } from "../config/url";

export const fetchRoutines = async () => {
  let headers = undefined;
  const token = null;

  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.get(GET_ROUTINES, {
    headers,
  });
  return res.data;
};

export const fetchUserRoutines = async () => {
  let headers = undefined;
  const token = null;

  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.get(GET_USER_ROUTINES, {
    headers,
  });
  return res.data;
};

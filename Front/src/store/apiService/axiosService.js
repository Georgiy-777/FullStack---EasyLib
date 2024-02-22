import axios from "axios";

export const axiosService = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

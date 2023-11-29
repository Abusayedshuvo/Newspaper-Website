import axios from "axios";

const instance = axios.create({
  // baseURL: `http://localhost:5000`,
  baseURL: `https://assignment12-eight.vercel.app`,
  // withCredentials: true,
});

const useAxiosPublic = () => {
  return instance;
};

export default useAxiosPublic;

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getTopics = async () => {
  const allTopics = await axiosInstance.get("/topics");
  return allTopics.data.topics;
};

export const getUser = async (username) => {
  const singleUser = await axiosInstance.get(`/users/${username}`);

  return singleUser.data.user;
};

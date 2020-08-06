import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://b-end-nc-news-app.herokuapp.com/api',
});

export const getTopics = async () => {
  const allTopics = await axiosInstance.get("/topics");
  return allTopics.data.topics;
};

export const getUser = async (username) => {
  const singleUser = await axiosInstance.get(`/users/${username}`);
  return singleUser.data.user;
};

export const getAllUsers = async () => {
  const allUsers = await axiosInstance.get('/users')
  return allUsers.data.users
}
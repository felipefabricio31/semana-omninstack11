import axios from "axios";

const api = axios.create({
  //baseURL: "http://192.168.15.72:3333"
  baseURL: "https://api-node-omninstackk11.herokuapp.com"
});

export default api;

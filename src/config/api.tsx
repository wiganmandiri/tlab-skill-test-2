import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: 'https://api.soundcloud.com',
  // baseURL: 'https://api-v2.soundcloud.com',
  headers: {
    "accept": "application/json; charset=utf-8",
    "Content-Type": "application/json"
  },
});

export default instance;

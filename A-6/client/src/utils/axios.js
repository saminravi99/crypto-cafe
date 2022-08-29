import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://redux-toolkit-video-gallery-server.onrender.com",
});

export default axiosInstance;

// http://localhost:9000
// https://redux-toolkit-video-gallery-server.onrender.com

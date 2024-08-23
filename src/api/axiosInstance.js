import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://url-shortener-backend-u8de.onrender.com",
});

export default axiosInstance;

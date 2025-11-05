import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_API_URL
      : import.meta.env.VITE_API_URL ||
        "https://chatterbot-ch1r.onrender.com/api",
  withCredentials: true,
});

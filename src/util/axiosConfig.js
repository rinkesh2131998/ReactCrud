import axios from "axios";
export const axiosApi = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "Content-type": "application/json",
  },
});

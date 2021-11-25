import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://samples.openweathermap.org/",
    headers: {"Content-Type": "application/json"}
})

export default axiosClient
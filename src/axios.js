import axios from "axios";

// Base Url to make to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;
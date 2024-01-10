import axios from "axios";
const instance = axios.create({
	// baseURL: "http://localhost:8080/api",
	baseURL: "https://forum-backend-temx.onrender.com/api",
});
export default instance;

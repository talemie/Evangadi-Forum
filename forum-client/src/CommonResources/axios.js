import axios from "axios";
const instance = axios.create({
	baseURL: "http://localhost:8080/api",
	// baseURL: "https://evangadi-forum-backend-tem.onrender.com/api",
});
export default instance;

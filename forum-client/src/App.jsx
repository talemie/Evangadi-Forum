import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Questions from "./Components/Questions/Questions";
import AskQuestion from "./Components/Questions/AskQuestion";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "./CommonResources/axios";
import SingleQuestion from "./Components/Questions/SingleQuestion";
// create context
const AppStateContext = createContext();

function App() {
	const [user, setUser] = useState();
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const checkUser = async () => {
		try {
			const { data } = await axios.get("/users/check", {
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			setUser(data);
		} catch (error) {
			console.log(error);
			navigate("/");
		}
	};
	useEffect(() => {
		checkUser();
	}, []);
	return (
		<AppStateContext.Provider value={[user, setUser]}>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
							<Footer />
						</>
					}
				/>
				<Route
					path="/home"
					element={
						<>
							<Header />
							<Questions />
							<Footer />
						</>
					}
				/>
				{/* single question route */}
				<Route
					path="/question/:questionid"
					element={
						<>
							<Header />
							<SingleQuestion/>
							<Footer />
						</>
					}
				/>
				<Route
					path="/ask"
					element={
						<>
							<Header />
							<AskQuestion />
							<Footer />
						</>
					}
				/>
			</Routes>
		</AppStateContext.Provider>
	);
}
export const useAppStateValue = () => (useContext(AppStateContext));
export default App;

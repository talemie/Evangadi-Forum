import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Questions from "./Components/Questions/Questions";
import AskQuestion from "./Components/Questions/AskQuestion";

function App() {
	return (
		<>
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
					path="/questions"
					element={
						<>
							<Header />
							<Questions />
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
		</>
	);
}

export default App;

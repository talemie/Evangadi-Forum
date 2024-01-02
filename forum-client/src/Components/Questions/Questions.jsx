import React, { useEffect, useState } from "react";
import "./question.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaUserAlt } from "react-icons/fa";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { MdNavigateNext } from "react-icons/md";
import axios from "../../CommonResources/axios";
import { Link } from "react-router-dom";
import { useAppStateValue } from "../../App";
function Questions() {
	const [questions, setQuestions] = useState([]);
	const token = localStorage.getItem("token");
	const [user, setUser] = useAppStateValue();
	// console.log(user);
	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const response = await axios({
					method: "GET",
					url: `/questions/all-questions`,
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				// console.log(response.data.questions);
				setQuestions(response.data.questions);
			} catch (error) {
				console.log(error);
			}
		};
		fetchQuestions();
	}, []);
	return (
		<div className="questions__wrapper bg-slate-100">
			<div className="container py-3">
				<div className="ask__question flex justify-between mr-4">
					<Link to="/ask">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
							Ask Question
						</button>
					</Link>
					<h3 className="text-2xl pr-5">
						Welcome:
						<span className="username text-red-400"> {user?.username}</span>
					</h3>
				</div>
				<div className="search__question pt-5 pb-3 pr-5 mr-4">
					<input
						type="text"
						placeholder="search question"
						className="w-full border border-gray-300 rounded-md p-3 "
					/>
				</div>
				{questions?.map((question, i) => (
					<Link to={`/question/${question.questionid}`} key={i}>
						<div className="each__question  border-t border-gray-300 py-4 hover:bg-slate-200 ">
							<div className="flex justify-between pl-4 mb-4">
								<div className="flex justify-between">
									<div className="hover:text-black w-8 h-8 mr-10">
										<FaUserAlt className="text-6xl border border-black rounded-full p-2 hover:bg-black hover:text-white " />
									</div>
									<div className="ml-10">{question.title}</div>
								</div>
								<div>
									<MdNavigateNext className="text-4xl" />
								</div>
							</div>
							<p className="pl-4 ml-3 pt-2">{question.username}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Questions;

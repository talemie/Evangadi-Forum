import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "../../../CommonResources/axios";
import { Link } from "react-router-dom";
function Questions() {
	const [questions, setQuestions] = useState("");
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsbWF6TSIsInVzZXJpZCI6NCwiaWF0IjoxNzAzODIyMzc0LCJleHAiOjE3MDM5MDg3NzR9.nkggJ2MiI6I1RyLgNjV8Fe2uk9KYwCvAhm03gUxUz88";
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
				console.log(response.data.questions);
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
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
						Ask Question
					</button>
					<h3 className="text-2xl pr-5">
						Welcome:<span className="username text-red-400"> Abebe</span>
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
					<Link to="#" key={i}>
						<div className="each__question  border-t border-gray-300 py-4 hover:bg-slate-200">
							<div className="flex justify-between ">
								<div className="hover:text-black ">
									<AccountCircleIcon className="material-icons w-6 h-6" />
								</div>
								<div>{question.title}</div>
								<div>
									<KeyboardArrowRightIcon />
								</div>
							</div>
							<p>userName</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Questions;

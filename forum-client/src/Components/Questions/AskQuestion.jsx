import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import axios from "../../CommonResources/axios.js";
function AskQuestion() {
	const token = localStorage.getItem("token");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");
	const onChangeTitle = (e) => {
		setTitle(e.target.value);
	};
	const onchangeDescription = (e) => {
		setDescription(e.target.value);
	};

	// submit question handler
	const submitQuestionHandler = async (e) => {
		e.preventDefault();
		if (!title || !description) {
			setError(true);
			return;
		}
		try {
			const response = await axios({
				method: "POST",
				url: "questions/add-question",
				data: {
					title: title,
					description: description,
				},
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
		} catch (error) {
			setError(error.response.data);
			console.log(error.response.data);
		}
	};
	return (
		<div className=" bg-slate-100 ">
			<div className="container">
				<h1 className="text-3xl p-2 pt-5">Steps To Write A Good Question</h1>
				<div className="ml-6 mb-9">
					<p className="p-1 text-2xl">
						<ArrowCircleRightIcon /> Summerize your problems in a
						one-line-title.
					</p>
					<p className="p-1 text-2xl">
						<ArrowCircleRightIcon /> Describe your problem in more detail.
					</p>
					<p className="p-1 text-2xl">
						<ArrowCircleRightIcon /> Describe what you tried and what you
						expected to happen.
					</p>
					<p className="p-1 text-2xl">
						<ArrowCircleRightIcon /> Describe what you tried and what you
						expected to happen.
					</p>
				</div>
			</div>
			<div className="container">
				<h1 className="text-4xl text-center p-4 mb-2">Post Your Question</h1>
				<form onSubmit={submitQuestionHandler}>
					<input
						onChange={onChangeTitle}
						type="text"
						placeholder="Question title"
						className={`w-full border border-black rounded-md p-3 my-3 ${
							!title && error ? "bg-red-200 " : ""
						}`}
					/>
					<br />
					<textarea
						onChange={onchangeDescription}
						className={`w-full border border-black rounded-md p-3 my-2 ${
							!title && error ? "bg-red-200" : ""
						}`}
						name=""
						id=""
						cols="30"
						rows="5"
						placeholder="Question detail ..."
					></textarea>
					<button className="bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded my-1 mb-5">
						Post Question
					</button>
				</form>
			</div>
		</div>
	);
}

export default AskQuestion;

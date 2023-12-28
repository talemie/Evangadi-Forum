import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from '../../../CommonResources/axios.js'
function Register({ toggleComponent }) {
	const [userName, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("")
	const navigate=useNavigate()

	// holding the field values
	const handleuserNameChange = (event) => {
		setUsername(event.target.value);
	};
	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};
	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};


	const togglePasswordVisibility = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	// register user
	 const registerUser = async (e) => {
		e.preventDefault()
		if (!userName||!firstName||!lastName||!email||!password) {
			setError('please provide all required information!')
			return
		} else {
			setError("")
		 }
		// sending data to backend to register user
		try {
			const response = await axios({
				method: "POST",
				url: "/users/register",
				data: {
					"username": userName,
					"firstname": firstName,
					"lastname": lastName,
					"email": email,
					"password": password,
				},
				headers: {
					"Content-Type": "application/json", 
				},
			});
			navigate("/questions");
		} catch (error) {
			setError(error.response.data);
			console.log(error.response.data);
		}
	};
	return (
		<div className="signup__section rounded ">
			<div className="text-center">
				<h2 className="pb-2 text-2xl">Join the network</h2>

				<div className="mb-4 flex flex-wrap justify-center">
					<h6 className="pb-1 w-full lg:w-1/2">Already have an account?</h6>

					<h6 className="text-orange-400 pl-2 hover:underline w-full lg:w-1/2">
						<Link to="#" onClick={() => toggleComponent("login")}>
							Sign in
						</Link>
					</h6>
				</div>
			</div>
			{error && <div className="text-red-200">{ error.msg}</div>}
			<div className="signup__form">
				<form onSubmit={registerUser}>
					<input
						type="text"
						placeholder="Username"
						className={`col-12 border border-gray-300 rounded-md mt-2 p-2 ${
							!userName && error ? "bg-red-100" : ""
						}`}
						onChange={handleuserNameChange}
					/>
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/2">
							<input
								type="text"
								placeholder="First name"
								className={`w-full 
										border
										border-gray-300
										rounded-md
										mt-2
										p-2 ${!firstName && error ? "bg-red-100" : ""}`}
								onChange={handleFirstNameChange}
							/>
						</div>
						<div className="w-full md:w-1/2 flex justify-end">
							<input
								type="text"
								placeholder="Last name"
								className={`w-full  
										border
										border-gray-300
										rounded-md
										mt-2
										p-2 md:ml-3 ${!lastName && error ? "bg-red-100" : ""}`}
								onChange={handleLastNameChange}
							/>
						</div>
					</div>
					<input
						type="email"
						name=""
						placeholder=" Email address"
						className={`col-12 border border-gray-300 rounded-md p-2 mt-3 ${
							!email && error ? "bg-red-100" : ""
						}`}
						onChange={handleEmailChange}
					/>
					<br />
					<div className="password-input">
						<input
							type={showPassword ? "text" : "password"}
							name=""
							placeholder=" Password"
							className={`col-12 border border-gray-300 rounded-md mt-2 p-2 ${
								!password && error ? "bg-red-100" : ""
							}`}
							onChange={handlePasswordChange}
						/>
						<span className="show-hide-button hover:text-orange-400 opacity-50">
							<VisibilityOffIcon onClick={togglePasswordVisibility} />
						</span>
					</div>
					<Link to="#">
						<h6 className="mt-3 text-center text-xs">
							<input type="checkbox" name="" id="" className="mr-1" />I agree to
							the
							<span className="text-end text-orange-400 hover:underline px-2">
								privacy and policy
							</span>
							and
							<span className="text-end text-orange-400 hover:underline px-2">
								terms of service
							</span>
						</h6>
					</Link>
					<button
						type="submit"
						className="col-12 bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-3"
					>
						Agree and Join
					</button>
					<Link to="#" onClick={"handleLogging"}>
						<h6 className="text-center text-orange-400 hover:underline pt-2">
							Already have an account?
						</h6>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Register;

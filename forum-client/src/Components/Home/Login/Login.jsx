import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "../../../CommonResources/axios.js";
function Login({ toggleComponent }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

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

	// Login functionality
	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		if (!email||!password) {
			setError(true)
		}

		// sending login information to backend
		try {
			const {data} = await axios({
				method: "POST",
				url: "/users/login",
				data: {
					email: email,
					password: password,
				},
				headers: {
					"Content-Type": "application/json",
				},
			});
			// setEmail("")
			// setPassword("")
			console.log(data);
			localStorage.setItem('token',data.token)
			navigate("/questions");
		} catch (error) {
			setError(error.response.data);
			console.log(error.response.data);
		}
	};
	return (
		<div className="login__section rounded ">
			<div className="login__head text-center">
				<h2 className="pb-2 text-2xl">Login to your account</h2>

				<div className=" mb-4 flex flex-wrap justify-center">
					<h6 className="pb-1 w-full lg:w-1/2">Don't have an account?</h6>
					<h6 className="text-orange-400 pl-2 hover:underline w-full lg:w-1/2">
						<Link to="#" onClick={() => toggleComponent("signup")}>
							Create a new account
						</Link>
					</h6>
				</div>
			</div>
			<div className="login__form">
				{error && <div className="text-red-400">{error.msg}</div>}
				<form onSubmit={handleLoginSubmit}>
					<input
						type="email"
						name=""
						id=""
						placeholder=" Email address"
						className={`w-full border border-gray-300 rounded-md p-2 mt-3 ${
							error && !email ? "bg-red-200" : ""
						}`}
						onChange={handleEmailChange}
					/>
					<br />
					<div className="password-input">
						<input
							type={showPassword ? "text" : "password"}
							name=""
							id="loginPass"
							placeholder=" Password"
							className={`w-full border border-gray-300 rounded-md mt-2 p-2 ${
								error && !password ? "bg-red-200" : ""
							}`}
							onChange={handlePasswordChange}
						/>
						<span className="show-hide-button hover:text-orange-400 opacity-50">
							<VisibilityOffIcon onClick={togglePasswordVisibility} />
						</span>
					</div>

					<Link to="#">
						<h6 className="text-end text-orange-400 hover:underline pt-3">
							Forgot password?
						</h6>
					</Link>
					<button className="col-12 bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-5">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;

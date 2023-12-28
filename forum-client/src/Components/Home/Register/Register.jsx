import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function Register({ toggleComponent }) {
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const togglePasswordVisibility = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
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
			<div className="signup__form">
				<form>
					<input
						type="text"
						placeholder="Username"
						className="col-12 border border-gray-300 rounded-md mt-2 p-2"
					/>
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/2">
							<input
								type="text"
								placeholder="First name"
								className="w-full 
										border
										border-gray-300
										rounded-md
										mt-2
										p-2 "
							/>
						</div>
						<div className="w-full md:w-1/2 flex justify-end">
							<input
								type="text"
								placeholder="Last name"
								className="w-full  
										border
										border-gray-300
										rounded-md
										mt-2
										p-2 md:ml-3"
							/>
						</div>
					</div>
					<input
						type="text"
						name=""
						id=""
						placeholder=" Email address"
						className="col-12 border border-gray-300 rounded-md p-2 mt-3"
					/>
					<br />
					<div className="password-input">
						<input
							type={showPassword ? "text" : "password"}
							name=""
							id="loginPass"
							placeholder=" Password"
							className="col-12 border border-gray-300 rounded-md mt-2 p-2"
						/>
						<span className="show-hide-button hover:text-orange-400 opacity-50">
							<VisibilityOffIcon onClick={togglePasswordVisibility} />
						</span>
					</div>
				</form>
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
				<button className="col-12 bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-3">
					Agree and Join
				</button>
				<Link to="#" onClick={"handleLogging"}>
					<h6 className="text-center text-orange-400 hover:underline pt-2">
						Already have an account?
					</h6>
				</Link>
			</div>
		</div>
	);
}

export default Register;

import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
	return (
		<div className="login__section">
			<div className="login__head text-center">
				<h2 className="pb-2 text-2xl">Login to your account</h2>

				<div className="account_check mb-4">
					<h6 className="pb-1 col-lg-6">Don't have an account</h6>
					<Link to="#">
						<h6 className="text-orange-400 pl-2 hover:underline">
							Create a new account
						</h6>
					</Link>
				</div>
			</div>
			<div className="login__form">
				<form>
					<input
						type="text"
						name=""
						id=""
						placeholder=" Email address"
						className="col-12 border border-gray-300 rounded-md p-2"
					/>
					<br />
					<input
						type="text"
						name=""
						id=""
						placeholder=" Password"
						className="col-12 border border-gray-300 rounded-md mt-2 p-2"
					/>
				</form>
				<Link to="#">
					<h6 className="text-end text-orange-400 hover:underline pt-2">
						Forgot password?
					</h6>
				</Link>
				<button className="col-12 bg-blue-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded mt-3">
					Login
				</button>
			</div>
		</div>
	);
}

export default Login;

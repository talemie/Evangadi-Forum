import React, { useState } from "react";
// import "./styles.css";

const Test = () => {
	const [showLoginPage, setShowLoginPage] = useState(true);

	const togglePage = () => {
		setShowLoginPage(!showLoginPage);
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-96">
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
					onClick={togglePage}
				>
					Toggle
				</button>

				<div className="bg-gray-200 h-64 rounded overflow-hidden relative">
					<div
						className={`h-full w-full absolute top-0 left-0 transition-transform duration-300 ease-in-out ${
							showLoginPage ? "translate-x-0" : "-translate-x-full"
						}`}
					>
						{showLoginPage ? <LoginPage /> : <SignupPage />}
					</div>
				</div>
			</div>
		</div>
	);
};

const LoginPage = () => {
	return <h1>Login page content</h1>;
};

const SignupPage = () => {
	return <h1>Signup page content</h1>;
};

export default Test;

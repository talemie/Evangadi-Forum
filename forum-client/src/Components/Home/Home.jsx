import React, { useState } from "react";
import "./home.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
function Home() {
	const [showLogin, setshowLogin] = useState(true);
	const handleLogging = () => {
		setshowLogin(!showLogin);
	};
	return (
		<div className="home pb-5">
			<div className="container">
				<div className="row home__internal">
					<div
						className={`col-md-6 rounded  transition-transform duration-700 ease-in-out `}
					>
						{showLogin ? (
							<Login handleLogging={handleLogging} />
						) : (
							<Register handleLogging={handleLogging} />
						)}
					</div>
					<div className="col-md-6 mt-1 sm:mt-7">
						<h3 className="text-orange-400 text-2xl">About</h3>
						<h1 className="text-3xl my-3">
							Evangadi <br />
							Networks
						</h1>
						<div className="text-justify">
							<p>
								No matter what stage of life you are in, whether you’re just
								starting elementary school or being promoted to CEO of a Fortune
								500 company, you have much to offer to those who are trying to
								follow in your footsteps.
							</p>
							<p className="my-3">
								Wheather you are willing to share your knowledge or you are just
								looking to meet mentors of your own, please start by joining the
								network here.
							</p>
						</div>
						<button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
							HOW IT WORKS
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

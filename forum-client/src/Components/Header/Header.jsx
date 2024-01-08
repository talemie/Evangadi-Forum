import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";


function Header() {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	console.log(windowWidth);
	const logingOut = () => {
		localStorage.removeItem("token");
		navigate('/')
	};
	return (
		<div className="container mt-3 nav__header px-md-4">
			<div className="main__nav">
				<div className="">
					<Link to="/home">
						<img
							src="https://forum.ibrodev.com/assets/evangadi-logo-5fea54cc.png"
							alt=""
						/>
					</Link>
				</div>
				{windowWidth > 990 ? (
					<div className="menu ">
						<div>
							<Link to="#">Home</Link>
						</div>
						<div>
							<Link to="#">How it works</Link>
						</div>
						<div>
							<button className="signin" onClick={logingOut}>
								{!token ? "SIGN IN" : "SIGN OUT"}
							</button>
						</div>
					</div>
				) : (
					<div>
						<SideMenu />
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;

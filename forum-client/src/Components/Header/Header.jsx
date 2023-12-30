import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";
import { useStateValue } from "../StateProvider/StateProvider";
function Header() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [token, setToken] = useStateValue();
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="container mt-3 nav__header px-md-4">
			<div className="main__nav">
				<div className="">
					<Link to='/'>
						<img
						src="https://forum.ibrodev.com/assets/evangadi-logo-5fea54cc.png"
						alt=""
					/>
					</Link>
					
				</div>
				{windowWidth > 990 ? (
					<div className="menu ">
						<div><Link to="#">Home</Link></div>
						<div><Link to="#">How it works</Link></div>
						<div>
							<button className="signin">SIGN IN</button>
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

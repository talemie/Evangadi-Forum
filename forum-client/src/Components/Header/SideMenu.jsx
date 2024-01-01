import React, { useState } from "react";
import "./sideMenu.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
function SideMenu() {
	const token = localStorage.getItem("token");
	const [isMenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};
	const logingOut = () => {
		localStorage.removeItem("token");
		navigate("/");
	};
	return (
		<>
			<button onClick={toggleMenu} className="menu-icon">
				<MenuIcon />
			</button>
			<div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
				<button onClick={toggleMenu} className="bg-white text-black mb-3">
					<CloseIcon />
				</button>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="#">How it works</Link>
					</li>
					<li>
						<Link to="#" className="signin" onClick={logingOut}>
							{!token ? "SIGN IN" : "SIGN OUT"}
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default SideMenu;

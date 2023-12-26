import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import FacebookIcon from "@mui/icons-material/Facebook";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
		<div className="container-fluid footer">
			<div className="container ">
				<div className="row">
					<div className="footer__logo col-md-4">
						<Link to="/">
							<img
								src="https://forum.ibrodev.com/assets/evangadi-logo-footer-f73bca57.png"
								alt=""
							/>
						</Link>
						<div className="footer__icons">
							<span>
								<Link to="#">
									<FacebookIcon />
								</Link>
							</span>
							<span>
								<Link to="#">
									<CameraAltIcon />
								</Link>
							</span>
							<span>
								<Link to="#">
									<YouTubeIcon />
								</Link>
							</span>
						</div>
					</div>
					<div className="footer__usefulLinks col-md-4">
						<h2>Useful Link</h2>
						<ul>
							<li>
								<Link to="#">How it works</Link>
							</li>
							<li>
								<Link to="#">Terms of Service</Link>
							</li>
							<li>
								<Link to="#">Privacy policy</Link>
							</li>
						</ul>
					</div>
					<div className="footer__contactInfo col-md-4">
						<h2>Contact Info</h2>
						<ul>
							<li>Evangadi Networks</li>
							<li>support@evangadi.com</li>
							<li>+1-202-386-2702</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer
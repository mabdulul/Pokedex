import React from "react";
import logo from "./logo.svg";
import SearchForm from "./SearchForm";
import sidelogo from "../Logo2.svg";
const Nav = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<a className="navbar-brand" href="#">
				<img src={sidelogo} alt="logo" width="50px" />
				<img src={logo} alt="logo" width="120px" />
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse navSet" id="navbarNav">
				<ul className="navbar-nav navSetDrill">
					<li className="nav-item ">
						<a className="nav-link nav-border" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link nav-border" href="#">
							Legendary
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link nav-border" href="#">
							Phase
						</a>
					</li>
				</ul>
			</div>
			<SearchForm />
		</nav>
	);
};

export default Nav;

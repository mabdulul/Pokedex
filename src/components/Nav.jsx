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
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Legendary
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
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

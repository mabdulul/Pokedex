import React from "react";
import logo from "./logo.svg";
import SearchForm from "./SearchForm";
import sidelogo from "../Logo2.svg";
import "./style.css";
import HomePage from "./HomePage";
import ListOfTraits from "./ListofTraits";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Nav = (props) => {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg ">
				<Link className="navbar-brand" to="/">
					<img src={logo} className="Pokemon_Logo" alt="logo" width="120px" />
				</Link>
				<button
					class="navbar-toggler navbar_Pok"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span>
						<img src={sidelogo} alt="logo" width="50px" />
					</span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link nav-border" to="/">
								Home <span class="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item ">
							<Link className="nav-link nav-border" href="/All">
								Link
							</Link>
						</li>
					</ul>
					<SearchForm />
				</div>
			</nav>
			<Route path="/" exact component={HomePage} />
			<Route path="/type" exact component={ListOfTraits} />
		</Router>
	);
};

export default Nav;

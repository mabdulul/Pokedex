import React from "react";

import search from "./icon.svg";
import history from "./history";
import "./style.css";

class SearchForm extends React.Component {
	view = " ";
	state = {
		search: " ",
		searchData: [],
		Type: "pokemon",
		isLoading: false,
		error: null,
		view: null,
		anError: null,
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		console.log(history);
		e.preventDefault();
		this.setState({ isLoading: true });
		console.log(this.state.Type);
		let search = this.state.search.toLowerCase().split(" ").join("");
		this.getData(`${search}/`);
	};

	getData = async (url) => {
		await fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})

			.then((data) => history.push("/list", { data }))

			.then((data) => this.setState({ searchData: data, isLoading: false }))
			.catch((error) => this.setState({ error, isLoading: false }));
	};

	render() {
		return (
			<>
				<form
					onSubmit={this.handleSubmit}
					className="form-inline  my-2 my-lg-0 searchBox_form searchBox"
				>
					<label className="searchBox_label">
						<input
							className="form-control search_label mr-sm-2  search_input"
							type="text"
							value={this.state.search}
							onChange={this.handleChange}
							name="search"
							placeholder="Search for a Pokémon"
						/>
					</label>
					<button type="submit" value="Submit" className="searchBox_btn">
						<img src={search} alt="search" width="20px" />
					</button>
				</form>
			</>
		);
	}
}

export default SearchForm;

import React from "react";

import search from "./icon.svg";
import history from "./history";
import "./style.css";

import { getPokemon } from "./GetPokemon";

class SearchForm extends React.Component {
	state = {
		search: " ",
		searchData: [],
		Type: "pokemon",
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		console.log(this.state.Type);
		let url = this.state.search.toLowerCase().split(" ").join("");
		const data = await getPokemon(url);
		console.log(data);
		history.push("/list", { data });
		history.push(`/list/${url}`);
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

import React from "react";
import ListOfTraits from "./ListofTraits";
import AbilityPokemon from "./AbilityPokemon";

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
		e.preventDefault();
		this.setState({ isLoading: true });

		console.log(this.state.Type);

		if (this.state.Type === "ability") {
			let search = this.state.search.toLowerCase().split(" ").join("");
			await fetch(`https://pokeapi.co/api/v2/${this.state.Type}/${search}/`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				.then((data) => this.TypeofSearch(data))
				.then((data) => this.setState({ searchData: data, isLoading: false }))
				.catch((error) => this.setState({ error, isLoading: false }));
		} else {
			let search = this.state.search.toLowerCase().split(" ").join("");
			await fetch(`${search}/`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
				})
				.then((data) => this.TypeofSearch(data))
				.then((data) => this.setState({ searchData: data, isLoading: false }))
				.catch((error) => this.setState({ error, isLoading: false }));
		}
	};

	TypeofSearch = (e) => {
		this.view = this.state.Type;
		if (e) {
			if (this.view === "pokemon") {
				this.view = <ListOfTraits traits={e} />;
			} else {
				this.view = <AbilityPokemon traits={e} />;
			}
		} else {
			this.view = <h1>Try another search cirtira </h1>;
		}
	};

	render() {
		const { isLoading, error } = this.state;

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							type="text"
							value={this.state.search}
							onChange={this.handleChange}
							name="search"
						/>
					</label>
					<select
						value={this.state.searchType}
						onChange={this.handleChange}
						name="Type"
					>
						<option value="pokemon">Pokemon</option>
						<option value="ability">Abilities</option>
					</select>
					<input type="submit" value="Submit" />
				</form>
				{isLoading ? (
					<h5>it id loading dkd</h5>
				) : error ? (
					<div>{error.message}</div>
				) : (
					<div>{this.view}</div>
				)}
			</div>
		);
	}
}

export default SearchForm;

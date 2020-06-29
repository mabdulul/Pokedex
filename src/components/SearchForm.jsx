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
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({ isLoading: true });
		let search = this.state.search.toLowerCase().split(" ").join("");
		await fetch(`https://pokeapi.co/api/v2/${this.state.Type}/${search}/`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Something went wrong ...");
				}
			})
			.then((data) => this.TypeofSearch(data))
			.then((data) => this.setState({ searchData: data, isLoading: false }))
			.catch((error) => this.setState({ error, isLoading: false }));
	};

	TypeofSearch = (e) => {
		this.view = this.state.Type;
		if (this.view === "pokemon") {
			this.view = <ListOfTraits traits={e} />;
		} else {
			this.view = <AbilityPokemon traits={e} />;
		}
		return this.view;
	};

	render() {
		const { isLoading, error } = this.state;
		if (isLoading) {
			return <p>Loading ...</p>;
		}
		if (error) {
			return <p>{error.message}</p>;
		}
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
				{this.view}
			</div>
		);
	}
}

export default SearchForm;

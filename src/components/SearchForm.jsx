import React from "react";
import ListOfTraits from "./ListofTraits";

class SearchForm extends React.Component {
	state = { pokemon: " ", pokechar: [], Type: "Pokemon" };

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(
			`https://pokeapi.co/api/v2/${this.state.Type}/${this.state.pokemon}/`
		);
		console.log(response);

		const data = await response.json();
		this.setState({
			pokechar: data,
		});
	};

	render() {
		let view;
		if (this.state.Type === "pokemon") {
			view = <ListOfTraits traits={this.state.pokechar} />;
		} else {
			view = <ListOfTraits traits={this.state.pokechar} />;
		}

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							type="text"
							value={this.state.pokemon}
							onChange={this.handleChange}
							name="pokemon"
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
				{view}
			</div>
		);
	}
}

export default SearchForm;

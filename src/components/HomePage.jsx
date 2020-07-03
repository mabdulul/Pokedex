import React, { Component } from "react";
import { loadData } from "./utils";

class HomePage extends Component {
	state = {
		PokeOne: [],
		PokeTwo: [],
		PokeThree: [],
	};
	getRandomInt = () => {
		let num = Math.floor(Math.random() * Math.floor(100));
		return num;
	};
	async componentDidMount() {
		const dataOne = await loadData(`${this.getRandomInt()}`);
		const dataTwo = await loadData(`${this.getRandomInt()}`);
		const dataThree = await loadData(`${this.getRandomInt()}`);

		this.setState({
			PokeOne: dataOne,
			PokeTwo: dataTwo,
			PokeThree: dataThree,
		});

		if (this.state.PokeOne.length > 1) {
			const amtdelte = this.state.PokeOne.length - 1;
			const newArray = this.state.PokeOne.splice(0, amtdelte);
			console.log("here", newArray);
		}
	}
	render() {
		const { PokeOne, PokeTwo, PokeThree } = this.state;

		return (
			<>
				<div>
					{PokeOne.map((traits) => (
						<li key={traits.name}>
							<h3>{traits.number}</h3>
							<h3>{traits.name}</h3>
						</li>
					))}
				</div>
			</>
		);
	}
}

export default HomePage;

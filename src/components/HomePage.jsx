import React, { Component } from "react";
import { loadData } from "./utils";

class HomePage extends Component {
	state = {
		pokemon: [],
	};
	getRandomInt = () => {
		let num = Math.floor(Math.random() * Math.floor(100));
		return num;
	};
	async componentDidMount() {
		const pokeholder = [];
		for (let i = 0; i < 3; i++) {
			let getData = await loadData(`${this.getRandomInt()}`);
			if (getData.length > 1) {
				let getDataOne = getData.splice(1, 1);
				pokeholder.push(getDataOne);
			} else {
				pokeholder.push(getData);
			}
			this.setState({
				pokemon: pokeholder,
			});
		}
	}
	render() {
		const { pokemon } = this.state;
		console.log("pokemon", pokemon);

		return (
			<>
				<div>
					{pokemon.map((drilldown) =>
						drilldown.map((traits) => (
							<div>
								{traits.name} {traits.types}
								<img src={traits.sprite} alt={traits.name} />
							</div>
						))
					)}
				</div>
			</>
		);
	}
}

export default HomePage;

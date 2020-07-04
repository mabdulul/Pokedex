import React, { Component } from "react";
import { loadData } from "./utils";

class HomePage extends Component {
	state = {
		PokeOne: [],
	};
	getRandomInt = () => {
		let num = Math.floor(Math.random() * Math.floor(100));
		return num;
	};
	async componentDidMount() {
		const pokeholder = [];
		for (let i = 0; i < 3; i++) {
			let test = await loadData(`${this.getRandomInt()}`);
			if (test.length > 1) {
				console.log("test lenght", test.length);
				let test2 = test.splice(1, 1);
				pokeholder.push(test2);
			} else {
				pokeholder.push(test);
			}
			this.setState({
				PokeOne: pokeholder,
			});
		}
	}
	render() {
		const { PokeOne } = this.state;
		console.log("PokeOne", PokeOne);

		return (
			<>
				<div>
					{PokeOne.map((traits) =>
						traits.map((test) => <div>{test.name}</div>)
					)}
				</div>
			</>
		);
	}
}

export default HomePage;

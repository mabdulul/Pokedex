import React, { Component } from "react";
import { loadData } from "./utils";
import { Palette } from "react-palette";

class HomePage extends Component {
	state = {
		pokemon: [],
	};
	getRandomInt = () => {
		let num = Math.floor(Math.random() * Math.floor(800));
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

		return (
			<>
				<div className="container-fluid">
					<div className="row">
						<div
							className="col-sm-12 col-md-12 col-lg-12 d-flex"
							style={{ justifyContent: "space-evenly" }}
						>
							{pokemon.map((drilldown) =>
								drilldown.map((traits) => (
									<div>
										<Palette src={traits.sprite}>
											{({ data, loading, error }) => (
												<div
													style={{
														width: "250px",
														height: "230px",
														backgroundImage: `linear-gradient(to right top, ${data.vibrant}, ${data.lightVibrant})`,
														borderRadius: "13%",
														display: "grid",
														justifyContent: "center",
													}}
												>
													<div
														className="imageUp"
														style={{ position: "relative", bottom: "50px" }}
													>
														<img
															src={traits.sprite}
															alt={traits.name}
															className="img-responsive"
															width="150px"
														/>
													</div>

													<div>
														<h3 style={{ color: "white" }}>{traits.name} </h3>
														<p
															style={{
																textTransform: "uppercase",
																fontSize: "13px",
															}}
														>
															{traits.types}
														</p>
													</div>
												</div>
											)}
										</Palette>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default HomePage;

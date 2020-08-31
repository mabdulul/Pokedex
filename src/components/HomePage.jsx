import React, { Component } from "react";
import { loadData } from "./utils";
import { Palette } from "react-palette";
import "./style.css";

import uuid from "react-uuid";
import { getPokemon } from "./GetPokemon";

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
				<section>
					<div className="container" style={{ marginTop: "5%" }}>
						<div className="row HomePage">
							<div className="col-md-12 homepage_header">
								<div className="homepage_header">
									<h3 className="homepageH2">Today's Pokemon</h3>
									<br />
									<hr className="homepage_header_hr" />
								</div>
							</div>
						</div>
						<div className="row">
							{pokemon.map((drilldown) =>
								drilldown.map((traits) => (
									<div
										className="col-sm-12 col-md-11 col-lg-4 homepage_topThree"
										key={uuid()}
									>
										<Palette src={traits.sprite}>
											{({ data, loading, error }) => (
												<button
													className="HomePage_btn"
													onClick={() => getPokemon(traits.name)}
													key={uuid()}
												>
													<div
														className="Homepage_Pokemon"
														style={{
															backgroundImage: `linear-gradient(to right top, ${data.vibrant}, ${data.lightVibrant})`,
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
																width="195px"
															/>
														</div>

														<div>
															<h4 className="PokeNameHome">{traits.name} </h4>
															<div>
																<div className="TypeOfPokeBox">
																	{traits.types.map((type) => (
																		<div className="TypeOfPoke">
																			<span className={type}>{type}</span>
																		</div>
																	))}
																</div>
															</div>
														</div>
													</div>
												</button>
											)}
										</Palette>
									</div>
								))
							)}
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default HomePage;

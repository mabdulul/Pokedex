import React, { Component } from "react";

import history from "./history";
import { Palette } from "react-palette";
import "./style.css";

import uuid from "react-uuid";
import { getPokemon } from "./GetPokemon";

class HomePage extends Component {
	state = {
		pokemon: [],
		loading: true,
	};
	getRandomInt = () => {
		let num = Math.floor(Math.random() * Math.floor(800));
		return num;
	};
	async componentDidMount() {
		this.setState({
			loading: true,
		});
		const pokeholder = [];
		for (let i = 0; i < 3; i++) {
			let getData = await getPokemon(`${this.getRandomInt()}`);
			if (getData.length > 1) {
				let getDataOne = getData.splice(1, 1);
				pokeholder.push(getDataOne);
				this.setState({
					loading: false,
				});
			} else {
				pokeholder.push(getData);
				this.setState({
					loading: false,
				});
			}
			this.setState({
				pokemon: pokeholder,
			});
		}
	}

	render() {
		const { pokemon } = this.state;
		const { loading } = this.state;

		if (loading) return "Loading";

		return (
			<>
				<section key={uuid()}>
					<div className="container" style={{ marginTop: "5%" }} key={uuid()}>
						<div className="row HomePage">
							<div className="col-md-12 homepage_header">
								<div className="homepage_header">
									<h3 className="homepageH2">Today's Pokemon</h3>
									<br />
									<hr className="homepage_header_hr" />
								</div>
							</div>
						</div>
						<div className="row" key={uuid()}>
							{pokemon.map((drilldown) =>
								drilldown.map((traits) => (
									<div
										className="col-sm-12 col-md-11 col-lg-4 homepage_topThree"
										key={uuid()}
									>
										<Palette src={traits.sprite} key={uuid()}>
											{({ data, loading, error }) => (
												<button
													className="HomePage_btn"
													onClick={() => history.push(`/list/${traits.number}`)}
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
																src={
																	traits.sprite
																		? traits.sprite
																		: "https://via.placeholder.com/150"
																}
																alt={traits.name}
																className="img-responsive"
																width="195px"
																key={uuid()}
															/>
														</div>

														<div key={uuid()}>
															<h4 className="PokeNameHome">{traits.name}</h4>
															<div key={uuid()}>
																<div className="TypeOfPokeBox" key={uuid()}>
																	{traits.types.map((type) => (
																		<div className="TypeOfPoke" key={uuid()}>
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

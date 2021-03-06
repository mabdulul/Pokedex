import React, { useState, useEffect } from "react";
import "./style.css";
import { Palette } from "react-palette";
import { getPokemon } from "./GetPokemon";
import history from "./history";

const ListOfTraits = (props) => {
	let url = props.match.params.url;
	console.log(url);
	const [loading, setLoading] = useState(true);
	const [filterdata, setfilterdata] = useState([]);
	const [doesnotExist, setdoesnotExist] = useState(false);

	useEffect(() => {
		setLoading(true);
		setdoesnotExist(false);

		const getData = async () => {
			await getPokemon(url)
				.then((data) => {
					setfilterdata(data.splice(0, 1));
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error:", error);
					setdoesnotExist(true);
				});
		};
		getData();
	}, [url]);

	if (!!doesnotExist) return "The pokemon does not exist ";
	if (loading) return "Loading";

	return (
		<div className="container moveRight">
			<div className="row">
				<div className="col-md-12">
					{filterdata.map((poke) => (
						<Palette src={poke.sprite} key={poke.number}>
							{({ data, loading, error }) => (
								<div
									key={poke.number}
									className="PokeHolder"
									style={{
										backgroundImage: `linear-gradient(to right top, ${data.vibrant}, ${data.lightVibrant})`,
									}}
								>
									<div className="Poke_img">
										<img
											className="img-fluid"
											src={poke.sprite}
											alt={poke.name}
										/>
									</div>
									<div className="PokeHolder-row">
										<div>
											<h1 className="PokeName">{poke.name}</h1>
										</div>
										<div className="TypeOfPokeBox">
											{poke.types.map((type) => (
												<p className="TypeOfPoke Pokefix">
													<span className={type}>{type}</span>
												</p>
											))}
										</div>
										<div>
											<p>{poke.description}</p>
										</div>
										<div className="Poke_Looks">
											<ul>
												<li>
													<span className="Poke_Looks_title">Weight</span>
													<br />{" "}
													<span className="Poke_Looks_traits">
														{poke.weight}
													</span>
												</li>
												<li>
													<span className="Poke_Looks_title">Height</span>
													<br />{" "}
													<span className="Poke_Looks_traits">
														{poke.height}
													</span>
												</li>
												<li>
													<span className="Poke_Looks_title">Species</span>
													<br />{" "}
													<span className="Poke_Looks_traits">
														{poke.species}
													</span>
												</li>
												<li>
													<span className="Poke_Looks_title">Abilities</span>
													<br />{" "}
													<p className="Poke_Looks_traits">
														{poke.abilities.normal.join(", ")}
														<br />
													</p>
												</li>
											</ul>
										</div>
										<div className="Poke_btn">
											<p>Evolutions</p>
											{poke.family.evolutionLine.map((url) => (
												<>
													{url.split("/").map((evo) => (
														<>
															<button
																className="btn btn-light"
																onClick={() => history.push(`/list/${evo}`)}
															>
																{evo}
															</button>
														</>
													))}
												</>
											))}
										</div>
									</div>
								</div>
							)}
						</Palette>
					))}
				</div>
			</div>
		</div>
	);
};

export default ListOfTraits;

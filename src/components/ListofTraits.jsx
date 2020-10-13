import React from "react";
import "./style.css";
import { Palette } from "react-palette";
import { getPokemon } from "./GetPokemon";

const ListOfTraits = (props) => {
<<<<<<< HEAD
<<<<<<< HEAD
	let data = props.location.state;

	if (!data.data || data.data.message) {
=======
=======
>>>>>>> parent of 1ab6346... refactoring
	const [evoImages, setImages] = useState();
	let data = props.location.state;
	let maybe = props.location.state;
	// useEffect(() => {
	// 	const bla = maybe.data.map((ok) =>
	// 		ok.family.evolutionLine.map((evo) => evo)
	// 	);
	// 	setImages(bla);
	// }, [maybe]);

	console.log("I am right here", evoImages);

	if (!data.data) {
>>>>>>> parent of 1ab6346... refactoring
		return <h1>The pokemon does not exist </h1>;
	}
	const onePoke = data.data.splice(0, 1);

	const filterData = data.data.splice(0, 1);

	return (
		<div className="container moveRight">
			<div className="row">
				<div className="col-md-12">
<<<<<<< HEAD
<<<<<<< HEAD
					{filterData.map((poke) => (
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
											{poke.family.evolutionLine.map((evo) => (
												<button
													className="btn btn-light"
													onClick={() => getPokemon(evo)}
												>
													{evo}
												</button>
											))}
										</div>
									</div>
								</div>
							)}
						</Palette>
=======
=======
>>>>>>> parent of 1ab6346... refactoring
					{onePoke.map((poke) => (
						<div key={poke.number}>
							<p>{poke.description}</p>
							<img src={poke.sprite} alt={poke.name} width="500px" />
							<h1>{poke.name}</h1>
							<ul>
								{poke.types.map((type) => (
									<li>{type}</li>
								))}
							</ul>
							<div className="Poke_Looks">
								<p>Weight {poke.weight}</p>
								<p>Height: {poke.height}</p>
								<p>species: {poke.species}</p>
								<p>{poke.abilities.normal}</p>
							</div>
							<div>
								{poke.family.evolutionLine.map((evo) => (
									<button onClick={() => getLink(evo)}>{evo}</button>
								))}
							</div>
						</div>
>>>>>>> parent of 1ab6346... refactoring
					))}
				</div>
			</div>
		</div>
	);
};

export default ListOfTraits;
